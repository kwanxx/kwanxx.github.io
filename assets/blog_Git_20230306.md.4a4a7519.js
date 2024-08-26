import{_ as s,c as e,o as a,a as n}from"./app.c2dd8913.js";const u=JSON.parse('{"title":"\u65E0\u5BC6\u7801pull\u63D0\u4EA4","description":"","frontmatter":{},"headers":[],"relativePath":"blog/Git/20230306.md","lastUpdated":1678785046000}'),t={name:"blog/Git/20230306.md"},l=n(`<h4 id="\u65E0\u5BC6\u7801pull\u63D0\u4EA4" tabindex="-1">\u65E0\u5BC6\u7801pull\u63D0\u4EA4 <a class="header-anchor" href="#\u65E0\u5BC6\u7801pull\u63D0\u4EA4" aria-hidden="true">#</a></h4><ol><li>\u5B8C\u6210\u672C\u5730\u6587\u4EF6\u914D\u7F6E\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5168\u5C40\u63D0\u4EA4</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global credential.helper store</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u751F\u6210\u79D8\u94A5</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C &quot;email&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>ssh-keygen</li></ol><p>\u6253\u5F00\u6211\u4EEC\u7684github\u9875\u9762\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u5934\u50CF\uFF0C\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u7684setting\uFF0C\u8DF3\u8F6C\u9875\u9762\u540E\u70B9\u51FB\u4FA7\u8FB9\u680F\u7684SSH and GPG keys\uFF0C\u70B9\u51FBNew SSH key\uFF0C\u5C06 id_rsa.pub \u7684\u5185\u5BB9\u7C98\u8D34\u81F3key\u4E2D\u3002</p><p>\u4F4D\u7F6E\u5927\u6982\u5728\uFF1A<a href="https://github.com/settings/keys" target="_blank" rel="noopener noreferrer">https://github.com/settings/keys</a></p><ol start="3"><li>\u751F\u6210Personal access tokens \uFF08\u7B2C\u4E00\u6B21\u8BBF\u95EE\u9700\u8981\uFF0C\u53EF\u7701\u7565\uFF09</li></ol><p>\u5982\u679C\u5728CMD\u6216shell \u63D0\u4EA4git\u64CD\u4F5C\uFF0C\u7B2C\u4E00\u6B21\u65E0\u5BC6\u7801\u63D0\u4EA4\u9700\u8981\u8F93\u5165\u8D26\u53F7\u548Ctoken\uFF08\u8FD9\u91CC\u7684<strong>\u5BC6\u7801</strong>\uFF0C\u4E0D\u662F\u767B\u5F55github\u7684\u5BC6\u7801\uFF09</p><p>\u83B7\u5F97token\u7684\u65B9\u6CD5\uFF1A</p><p>\u8FDB\u5165Github\u7684 Developer settings\u9875\u9762\uFF0C\u70B9\u51FB\u4FA7\u8FB9\u680F\u7684Personal access tokens (classic)\uFF0C\u70B9\u51FBTokens\uFF0C\u751F\u6210Token\u3002</p><p>\u4F4D\u7F6E\u5927\u6982\u5728\uFF1A<a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">https://github.com/settings/tokens</a></p>`,11),o=[l];function p(r,i,c,g,_,h){return a(),e("div",null,o)}var k=s(t,[["render",p]]);export{u as __pageData,k as default};
