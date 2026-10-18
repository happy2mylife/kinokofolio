/*
 * kinokoapps 共通「ほかのアプリ」カード
 * 使い方(各LP):
 *   <div id="kinoko-apps-nav" data-app="synqlo"></div>
 *   <script src="https://kinokoapps.site/shared/apps-nav.js" defer></script>
 * data-app のアプリは一覧から除く。JS が動かなくても LP 側の文字リンクで困らない。
 */
(function () {
  'use strict';

  var ROOT_ID = 'kinoko-apps-nav';
  var BASE = 'https://kinokoapps.site/shared/';

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

  function injectStyle() {
    if (document.getElementById('kan-style')) return;
    var css =
      '#' + ROOT_ID + '{--kan-ink:#2a2340;--kan-muted:#6b6485;--kan-card:#fff;--kan-line:rgba(0,0,0,.1);--kan-accent:#e2533c;' +
      'max-width:960px;margin:32px auto;padding:0 16px;font-family:inherit;color:var(--kan-ink);box-sizing:border-box}' +
      '@media(prefers-color-scheme:dark){#' + ROOT_ID + '{--kan-ink:#f1eefc;--kan-muted:#b9b3d1;--kan-card:#2b2456;--kan-line:rgba(255,255,255,.14)}}' +
      '#' + ROOT_ID + ' *{box-sizing:border-box}' +
      '#' + ROOT_ID + ' .kan-title{font-size:20px;font-weight:700;margin:0 0 4px}' +
      '#' + ROOT_ID + ' .kan-sub{font-size:14px;color:var(--kan-muted);margin:0 0 14px}' +
      '#' + ROOT_ID + ' .kan-row{display:flex;gap:12px;overflow-x:auto;padding:4px 2px 14px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}' +
      '#' + ROOT_ID + ' .kan-card{flex:0 0 220px;scroll-snap-align:start;display:flex;flex-direction:column;gap:10px;padding:14px;' +
      'background:var(--kan-card);border:1px solid var(--kan-line);border-radius:16px;color:inherit;text-decoration:none}' +
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
    var list = apps.filter(function (a) {
      return a && a.id !== self && safeUrl(a.lp);
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
