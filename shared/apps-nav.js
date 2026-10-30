/*
 * kinokoapps 共通「ほかのアプリ」カード
 * 使い方(各LP):
 *   <div id="kinoko-apps-nav" data-app="synqlo"></div>
 *   色は既定で明るい。ダークモード対応の LP は data-theme="auto"(端末に合わせる)か "dark"(いつも暗い)を付ける
 *   <script src="https://kinokoapps.site/shared/apps-nav.js" defer></script>
 * data-app のアプリは一覧から除く。JS が動かなくても LP 側の文字リンクで困らない。
 *
 * このファイルは Google アナリティクス(GA4)のタグも読み込む(全 LP 共通・測定 ID は下の GA_ID)。
 *   store_click … ストア(apps.apple.com / play.google.com)へのリンクを押した。store=app_store|google_play、
 *                 app=サブドメイン(korogakon など)、placement=page(ページ内)|apps_nav(「ほかのアプリ」カード。app は行き先)
 *   try_play    … 「ちょっと遊んでみる」の画面を、1ページ表示のうち最初に触った。app=サブドメイン、game=data-kt-try の値
 * Firebase は使わない。Cookie は kinokoapps.site 全体で共有(*.web.app では各サイトごと)。
 */
(function () {
  'use strict';

  var ROOT_ID = 'kinoko-apps-nav';
  var GA_ID = 'G-EJ3GHR7TTF';
  var BASE = 'https://kinokoapps.site/shared/';


  // ---- アクセス解析(GA4) ----
  // サブドメイン(korogakon.kinokoapps.site → korogakon)。トップは top。
  function appOf(host) {
    host = String(host || '').toLowerCase();
    if (host === 'kinokoapps.site' || host === 'www.kinokoapps.site') return 'top';
    return host.split('.')[0] || 'unknown';
  }

  function initAnalytics() {
    if (window.__kanGa) return;
    window.__kanGa = true;
    var host = location.hostname;
    window.dataLayer = window.dataLayer || [];
    var gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag = gtag;
    gtag('js', new Date());
    // kinokoapps.site の中はサブドメインをまたいで同じ訪問者として数える(Cookie は .kinokoapps.site)
    gtag('config', GA_ID, { cookie_domain: /(^|\.)kinokoapps\.site$/.test(host) ? 'kinokoapps.site' : 'auto' });
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(g);

    function onLink(e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var u;
      try { u = new URL(a.href, location.href); } catch (err) { return; }
      var store = u.hostname === 'apps.apple.com' ? 'app_store' : u.hostname === 'play.google.com' ? 'google_play' : '';
      if (!store) return;
      var inNav = !!(a.closest && a.closest('#' + ROOT_ID));
      gtag('event', 'store_click', {
        store: store,
        app: (inNav && a.getAttribute('data-app')) || appOf(host),
        placement: inNav ? 'apps_nav' : 'page',
        transport_type: 'beacon'
      });
    }
    document.addEventListener('click', onLink, true);
    document.addEventListener('auxclick', onLink, true);

    var tried = false;
    document.addEventListener('pointerdown', function (e) {
      if (tried) return;
      var t = e.target;
      var screen = t && t.closest ? t.closest('[data-kt-try] [data-kt-screen]') : null;
      if (!screen) return;
      tried = true;
      var sec = screen.closest('[data-kt-try]');
      gtag('event', 'try_play', { app: appOf(host), game: (sec && sec.getAttribute('data-kt-try')) || '' });
    }, true);
  }

  // ページの下に出す案内(ページにプライバシーポリシーへのリンクがあれば、そこへもつなぐ)
  function addNotice() {
    if (document.getElementById('kan-ga-notice')) return;
    var p = document.createElement('p');
    p.id = 'kan-ga-notice';
    p.style.cssText = 'max-width:960px;margin:8px auto 24px;padding:0 16px;font-size:12px;line-height:1.6;text-align:center;opacity:.7;color:inherit;font-family:inherit;box-sizing:border-box';
    p.textContent = 'このサイトでは、利用状況の把握のため Google アナリティクスを使っています。';
    var priv = document.querySelector('a[href*="privacy"]');
    if (priv && priv.href) {
      var a = document.createElement('a');
      a.href = priv.href;
      a.textContent = 'プライバシーポリシー';
      a.style.cssText = 'color:inherit;text-decoration:underline';
      p.appendChild(document.createTextNode(' '));
      p.appendChild(a);
    }
    var root = document.getElementById(ROOT_ID);
    if (root && root.parentNode) root.parentNode.insertBefore(p, root.nextSibling);
    else if (document.body) document.body.appendChild(p);
  }

  initAnalytics();

  var script = document.currentScript;
  var jsonUrl = BASE + 'apps.json';
  try {
    if (script && script.src) jsonUrl = new URL('apps.json', script.src).href;
  } catch (e) {}

  function platform() {
    var ua = navigator.userAgent || '';
    if (/Android/i.test(ua)) return 'android';
    // iPadOS は Mac を名乗るので、タッチ有無で見分ける
    if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
    return 'pc';
  }

  function safeUrl(u) {
    return typeof u === 'string' && /^https:\/\//.test(u) ? u : '';
  }

  function withParam(url, key, value) {
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + key + '=' + value;
  }

  function hrefFor(app, from, os) {
    var tag = 'lp_' + encodeURIComponent(from || 'unknown');
    if (os === 'ios' && safeUrl(app.ios)) return withParam(safeUrl(app.ios), 'ct', tag);
    if (os === 'android' && safeUrl(app.play)) return withParam(safeUrl(app.play), 'referrer', 'utm_source%3D' + tag);
    return safeUrl(app.lp);
  }

  var DARK = '--kan-ink:#f1eefc;--kan-muted:#b9b3d1;--kan-card:#2b2456;--kan-line:rgba(255,255,255,.14)';

  function injectStyle() {
    if (document.getElementById('kan-style')) return;
    var css =
      // 既定は明るい色だけ。端末がダークモードでも、LP が明るいままなら文字が読めなくならないようにする。
      // ダークモード対応の LP だけ data-theme で選ぶ: light(既定)・dark(いつも暗い)・auto(端末の設定に合わせる)
      '#' + ROOT_ID + '{--kan-ink:#2a2340;--kan-muted:#6b6485;--kan-card:#fff;--kan-line:rgba(0,0,0,.1);--kan-accent:#e2533c;' +
      'max-width:960px;margin:32px auto;padding:0 16px;font-family:inherit;color:var(--kan-ink);box-sizing:border-box}' +
      '#' + ROOT_ID + '[data-theme="dark"]{' + DARK + '}' +
      '@media(prefers-color-scheme:dark){#' + ROOT_ID + '[data-theme="auto"]{' + DARK + '}}' +
      '#' + ROOT_ID + ' *{box-sizing:border-box}' +
      '#' + ROOT_ID + ' .kan-title{font-size:20px;font-weight:700;margin:0 0 4px}' +
      '#' + ROOT_ID + ' .kan-sub{font-size:14px;color:var(--kan-muted);margin:0 0 14px}' +
      '#' + ROOT_ID + ' .kan-row{display:flex;gap:12px;overflow-x:auto;padding:4px 2px 14px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}' +
      '#' + ROOT_ID + ' .kan-card{flex:0 0 220px;scroll-snap-align:start;display:flex;flex-direction:column;gap:10px;padding:14px;' +
      'background:var(--kan-card);border:1px solid var(--kan-line);border-radius:16px;color:var(--kan-ink);text-decoration:none}' +
      '#' + ROOT_ID + ' .kan-card:hover,#' + ROOT_ID + ' .kan-card:focus-visible{border-color:var(--kan-accent);outline:none}' +
      '#' + ROOT_ID + ' .kan-icon{width:56px;height:56px;border-radius:14px;display:block;background:var(--kan-line)}' +
      '#' + ROOT_ID + ' .kan-name{font-size:16px;font-weight:700;line-height:1.3}' +
      '#' + ROOT_ID + ' .kan-tag{font-size:13px;line-height:1.5;color:var(--kan-muted)}' +
      '#' + ROOT_ID + ' .kan-go{margin-top:auto;font-size:13px;font-weight:700;color:var(--kan-accent)}';
    var st = document.createElement('style');
    st.id = 'kan-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function render(root, apps) {
    var self = root.getAttribute('data-app') || '';
    var os = platform();
    // 旧 id(aliases)で呼ばれても自分を除けるようにする
    var list = apps.filter(function (a) {
      if (!a || !safeUrl(a.lp)) return false;
      if (a.id === self) return false;
      return !(Array.isArray(a.aliases) && a.aliases.indexOf(self) >= 0);
    });
    if (!list.length) return;

    injectStyle();
    root.textContent = '';
    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', 'ほかのアプリ');

    root.appendChild(el('h2', 'kan-title', 'ほかのアプリ'));
    root.appendChild(el('p', 'kan-sub', 'キノコアップスのアプリです。横にスライドして見られます。'));

    var row = el('div', 'kan-row');
    list.forEach(function (a) {
      var href = hrefFor(a, self, os);
      if (!href) return;
      var card = el('a', 'kan-card');
      card.href = href;
      card.rel = 'noopener';
      try { card.setAttribute('data-app', appOf(new URL(a.lp).hostname)); } catch (e) {}

      var icon = el('img', 'kan-icon');
      icon.alt = '';
      icon.width = 56;
      icon.height = 56;
      icon.loading = 'lazy';
      icon.decoding = 'async';
      var src = safeUrl(a.icon);
      if (src) icon.src = src;

      card.appendChild(icon);
      card.appendChild(el('span', 'kan-name', a.name || ''));
      card.appendChild(el('span', 'kan-tag', a.tagline || ''));
      card.appendChild(el('span', 'kan-go', os === 'pc' ? 'くわしく見る' : 'ストアで見る'));
      row.appendChild(card);
    });
    root.appendChild(row);
  }

  function start() {
    addNotice();
    var root = document.getElementById(ROOT_ID);
    if (!root || !window.fetch) return;
    fetch(jsonUrl, { credentials: 'omit' })
      .then(function (r) {
        return r.ok ? r.json() : [];
      })
      .then(function (apps) {
        if (Array.isArray(apps)) render(root, apps);
      })
      .catch(function () {});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
