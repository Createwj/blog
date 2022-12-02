import{u as y,r as e,o,c as t,a as s,b as n,d as a,F as C,e as D,t as c,f as A,g as p,C as F}from"./app.671fb740.js";const h={id:"title",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#",-1),g={id:"title-1",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#title-1","aria-hidden":"true"},"#",-1),b={id:"title-2",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#title-2","aria-hidden":"true"},"#",-1),f={id:"title-3",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#title-3","aria-hidden":"true"},"#",-1),_=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 foo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 one.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 two.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 bar</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u251C\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u251C\u2500 three.md</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u2514\u2500 four.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[Home](/) &lt;!-- sends the user to the root index.md --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[foo](/foo/) &lt;!-- sends the user to index.html of directory foo --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[foo heading](./#heading) &lt;!-- anchors user to a heading in the foo index file --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[bar - three](../bar/three) &lt;!-- you can omit extension --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[bar - three](../bar/three.md) &lt;!-- you can append .md --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">[bar - four](../bar/four.html) &lt;!-- or you can append .html --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><hr><h1 id="emoji-\u{1F389}" tabindex="-1">Emoji \u{1F389} <a class="header-anchor" href="#emoji-\u{1F389}" aria-hidden="true">#</a></h1><ul><li>Input</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">:tada: :100:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>output</li></ul><p>\u{1F389} \u{1F4AF}</p><p>A <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">list of all emojis</a> is available.</p><br><hr><h1 id="default-title" tabindex="-1">Default Title <a class="header-anchor" href="#default-title" aria-hidden="true">#</a></h1><p>Input</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">::: info</span></span>
<span class="line"><span style="color:#A6ACCD;">This is an info box.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: tip</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a tip.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: warning</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: danger</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a details block.</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Output</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="custom-title" tabindex="-1">Custom Title <a class="header-anchor" href="#custom-title" aria-hidden="true">#</a></h2><p>Input</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">::: danger STOP</span></span>
<span class="line"><span style="color:#A6ACCD;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`js</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;Hello, VitePress!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Output</p><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, VitePress!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></details><p>A <a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md" target="_blank" rel="noreferrer">list of valid languages</a> is available on Shiki&#39;s repository.</p><h2 id="line-highlighting-in-code-blocks" tabindex="-1">Line Highlighting in Code Blocks <a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-hidden="true">#</a></h2><p>Input</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>output</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Line ranges: for example <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></p><p>Alternatively, it&#39;s possible to highlight directly in the line by using the // [!code hl] comment.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Highlighted!&#39;, // [!code  hl]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Highlighted!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801" tabindex="-1">\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801 <a class="header-anchor" href="#\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line has-focus"><span style="color:#A6ACCD;">      msg: &#39;Focused!&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-focused-lines"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Focused!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u4F3C-git-\u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4" tabindex="-1">\u7C7B\u4F3C git \u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4 <a class="header-anchor" href="#\u7C7B\u4F3C-git-\u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki has-diff"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line diff remove"><span style="color:#A6ACCD;">      msg: &#39;Removed&#39; </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">      msg: &#39;Added&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line diff remove"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Removed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span></span>
<span class="line diff add"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">msg</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Added</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6807\u6CE8" tabindex="-1">\u6807\u6CE8 <a class="header-anchor" href="#\u6807\u6CE8" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`js</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Error&#39;, // [!code  error]</span></span>
<span class="line"><span style="color:#A6ACCD;">      msg: &#39;Warning&#39; // [!code  warning]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\`\`\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted error"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line highlighted warning"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Warning</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><hr><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted error"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line highlighted warning"><span style="color:#F07178;">      msg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Warning</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5012\u5165\u4EE3\u7801\u7247\u6BB5" tabindex="-1">\u5012\u5165\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#\u5012\u5165\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/components/CustomComponent.vue{2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus atque numquam facilis ipsa voluptas illum. Laboriosam possimus</span></span>
<span class="line"><span style="color:#A6ACCD;">  esse modi, provident nesciunt culpa deserunt laborum natus perferendis quos amet consequuntur ducimus.</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="md-\u6587\u4EF6\u4E2D\u5305\u542B-md-\u6587\u4EF6" tabindex="-1">md \u6587\u4EF6\u4E2D\u5305\u542B md \u6587\u4EF6 <a class="header-anchor" href="#md-\u6587\u4EF6\u4E2D\u5305\u542B-md-\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;!--@include: ./parts/basics.md--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="md-\u6587\u4EF6\u4E2D\u4F7F\u7528-vue-\u4EE3\u7801" tabindex="-1">md \u6587\u4EF6\u4E2D\u4F7F\u7528 vue \u4EE3\u7801 <a class="header-anchor" href="#md-\u6587\u4EF6\u4E2D\u4F7F\u7528-vue-\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{{ 1 + 1 }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span v-for=&quot;i in 3&quot;&gt;{{ i }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2</p>`,56),T=p(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useData </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useData()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Input</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">::: v-pre</span></span>
<span class="line"><span style="color:#A6ACCD;">\`{{ This will be displayed as-is }}\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Output</p><div><p><code>{{ This will be displayed as-is }}</code></p></div><h2 id="md-\u6587\u4EF6\u4E2D\u5BFC\u5165-vue-\u7EC4\u4EF6" tabindex="-1">md \u6587\u4EF6\u4E2D\u5BFC\u5165 vue \u7EC4\u4EF6 <a class="header-anchor" href="#md-\u6587\u4EF6\u4E2D\u5BFC\u5165-vue-\u7EC4\u4EF6" aria-hidden="true">#</a></h2>`,6),x=p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import CustomComponent from &#39;../../components/CustomComponent.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># Docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a .md using a custom component</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;CustomComponent /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## More docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h1 id="vue-click-away" tabindex="-1">Vue Click Away <a class="header-anchor" href="#vue-click-away" aria-hidden="true">#</a></h1>`,3),I=JSON.parse('{"title":"MarkDown","titleTemplate":"Vite & Vue powered static site generator","description":"VitePress","frontmatter":{"title":"MarkDown","titleTemplate":"Vite & Vue powered static site generator","description":"VitePress","head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[{"level":3,"title":"Title","slug":"title","link":"#title","children":[]},{"level":3,"title":"Title","slug":"title-1","link":"#title-1","children":[]},{"level":3,"title":"Title","slug":"title-2","link":"#title-2","children":[]},{"level":3,"title":"Title","slug":"title-3","link":"#title-3","children":[]},{"level":2,"title":"Custom Title","slug":"custom-title","link":"#custom-title","children":[]},{"level":2,"title":"Line Highlighting in Code Blocks","slug":"line-highlighting-in-code-blocks","link":"#line-highlighting-in-code-blocks","children":[]},{"level":2,"title":"\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801","slug":"\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801","link":"#\u6A21\u7CCA\u5176\u4ED6\u4EE3\u7801","children":[]},{"level":2,"title":"\u7C7B\u4F3C git \u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4","slug":"\u7C7B\u4F3C-git-\u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4","link":"#\u7C7B\u4F3C-git-\u63D0\u4EA4\u8BB0\u5F55\u5BF9\u6BD4","children":[]},{"level":2,"title":"\u6807\u6CE8","slug":"\u6807\u6CE8","link":"#\u6807\u6CE8","children":[]},{"level":2,"title":"\u5012\u5165\u4EE3\u7801\u7247\u6BB5","slug":"\u5012\u5165\u4EE3\u7801\u7247\u6BB5","link":"#\u5012\u5165\u4EE3\u7801\u7247\u6BB5","children":[]},{"level":2,"title":"md \u6587\u4EF6\u4E2D\u5305\u542B md \u6587\u4EF6","slug":"md-\u6587\u4EF6\u4E2D\u5305\u542B-md-\u6587\u4EF6","link":"#md-\u6587\u4EF6\u4E2D\u5305\u542B-md-\u6587\u4EF6","children":[]},{"level":2,"title":"md \u6587\u4EF6\u4E2D\u4F7F\u7528 vue \u4EE3\u7801","slug":"md-\u6587\u4EF6\u4E2D\u4F7F\u7528-vue-\u4EE3\u7801","link":"#md-\u6587\u4EF6\u4E2D\u4F7F\u7528-vue-\u4EE3\u7801","children":[]},{"level":2,"title":"md \u6587\u4EF6\u4E2D\u5BFC\u5165 vue \u7EC4\u4EF6","slug":"md-\u6587\u4EF6\u4E2D\u5BFC\u5165-vue-\u7EC4\u4EF6","link":"#md-\u6587\u4EF6\u4E2D\u5BFC\u5165-vue-\u7EC4\u4EF6","children":[]}],"relativePath":"web/demo.md","lastUpdated":1669193893000}'),j={name:"web/demo.md"},P=Object.assign(j,{setup(w){const{theme:i}=y();return(E,V)=>{const l=e("Badge"),r=e("VueClickAwayExample");return o(),t("div",null,[s("h3",h,[n("Title "),a(l,{type:"info",text:"default"}),n(),u]),s("h3",g,[n("Title "),a(l,{type:"tip",text:"^1.9.0"}),n(),m]),s("h3",b,[n("Title "),a(l,{type:"warning",text:"beta"}),n(),v]),s("h3",f,[n("Title "),a(l,{type:"danger",text:"caution"}),n(),k]),_,s("p",null,[(o(),t(C,null,D(3,d=>s("span",null,c(d),1)),64))]),T,a(F),x,s("ul",null,[s("li",null,[n("\u8FD9\u4E2A\u662F\u5168\u5C40\u7EC4\u4EF6"),a(r)])]),s("template",null,[s("h1",null,c(A(i)),1)])])}}});export{I as __pageData,P as default};
