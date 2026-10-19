import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.--Htgknp.js";
const _imports_0 = "/zBean.github.io/assets/image.DBCzL5Ip.png";
const _imports_1 = "/zBean.github.io/assets/image-1.AdbWnFbM.png";
const _imports_2 = "/zBean.github.io/assets/image-2.DhmkjqDm.png";
const _imports_3 = "/zBean.github.io/assets/image-3.qnFlfjAI.png";
const _imports_4 = "/zBean.github.io/assets/image-4.F3pTefj3.png";
const _imports_5 = "/zBean.github.io/assets/image-5.q0WuaU8s.png";
const _imports_6 = "/zBean.github.io/assets/image-6.BjIE9Cy1.png";
const _imports_7 = "/zBean.github.io/assets/image-7.Bcl1Dzv_.png";
const _imports_8 = "/zBean.github.io/assets/image-8.Cy9Sj-r7.png";
const _imports_9 = "/zBean.github.io/assets/image-9.BFJuShOH.png";
const _imports_10 = "/zBean.github.io/assets/image-10.DltSB4Sm.png";
const __pageData = JSON.parse('{"title":"基于 FPGA 的高性能离子电子皮肤感知系统","description":"介绍基于 FPGA 的离子电子皮肤感知系统，涵盖频分复用、并行相敏检测、Verilog 实现与数据采集，以及触觉信号的实时处理和实验验证。","frontmatter":{"title":"基于 FPGA 的高性能离子电子皮肤感知系统","description":"介绍基于 FPGA 的离子电子皮肤感知系统，涵盖频分复用、并行相敏检测、Verilog 实现与数据采集，以及触觉信号的实时处理和实验验证。","lang":"zh-CN","article":true,"date":"2024-10-17","dateApproximate":true,"tags":["FPGA","Verilog","频分复用","电子皮肤","触觉感知"],"image":"/social/fpga.png","imageAlt":"FPGA 离子电子皮肤感知系统设计图","updatedISO":"2026-10-17T10:50:13.502Z","publishedISO":"2024-10-17","head":[["link",{"rel":"canonical","href":"https://jioy.github.io/zBean.github.io/blog/2.FPGA_FDM/FPGA.html"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:site_name","content":"Zhibin Li"}],["meta",{"property":"og:title","content":"基于 FPGA 的高性能离子电子皮肤感知系统 | Zhibin Li"}],["meta",{"property":"og:description","content":"介绍基于 FPGA 的离子电子皮肤感知系统，涵盖频分复用、并行相敏检测、Verilog 实现与数据采集，以及触觉信号的实时处理和实验验证。"}],["meta",{"property":"og:url","content":"https://jioy.github.io/zBean.github.io/blog/2.FPGA_FDM/FPGA.html"}],["meta",{"property":"og:image","content":"https://jioy.github.io/zBean.github.io/social/fpga.png"}],["meta",{"property":"og:image:alt","content":"FPGA 离子电子皮肤感知系统设计图"}],["meta",{"property":"og:locale","content":"zh_CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:title","content":"基于 FPGA 的高性能离子电子皮肤感知系统 | Zhibin Li"}],["meta",{"name":"twitter:description","content":"介绍基于 FPGA 的离子电子皮肤感知系统，涵盖频分复用、并行相敏检测、Verilog 实现与数据采集，以及触觉信号的实时处理和实验验证。"}],["meta",{"name":"twitter:image","content":"https://jioy.github.io/zBean.github.io/social/fpga.png"}],["meta",{"name":"twitter:image:alt","content":"FPGA 离子电子皮肤感知系统设计图"}],["meta",{"property":"article:modified_time","content":"2026-10-17T10:50:13.502Z"}],["meta",{"property":"article:author","content":"https://jioy.github.io/zBean.github.io/"}],["meta",{"property":"article:published_time","content":"2024-10-17"}],["meta",{"property":"article:tag","content":"FPGA"}],["meta",{"property":"article:tag","content":"Verilog"}],["meta",{"property":"article:tag","content":"频分复用"}],["meta",{"property":"article:tag","content":"电子皮肤"}],["meta",{"property":"article:tag","content":"触觉感知"}],["script",{"type":"application/ld+json","id":"page-schema"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"BlogPosting\\",\\"@id\\":\\"https://jioy.github.io/zBean.github.io/blog/2.FPGA_FDM/FPGA.html#article\\",\\"url\\":\\"https://jioy.github.io/zBean.github.io/blog/2.FPGA_FDM/FPGA.html\\",\\"mainEntityOfPage\\":\\"https://jioy.github.io/zBean.github.io/blog/2.FPGA_FDM/FPGA.html\\",\\"headline\\":\\"基于 FPGA 的高性能离子电子皮肤感知系统\\",\\"description\\":\\"介绍基于 FPGA 的离子电子皮肤感知系统，涵盖频分复用、并行相敏检测、Verilog 实现与数据采集，以及触觉信号的实时处理和实验验证。\\",\\"image\\":\\"https://jioy.github.io/zBean.github.io/social/fpga.png\\",\\"inLanguage\\":\\"zh-CN\\",\\"dateModified\\":\\"2026-10-17T10:50:13.502Z\\",\\"datePublished\\":\\"2024-10-17\\",\\"keywords\\":[\\"FPGA\\",\\"Verilog\\",\\"频分复用\\",\\"电子皮肤\\",\\"触觉感知\\"],\\"author\\":{\\"@type\\":\\"Person\\",\\"@id\\":\\"https://jioy.github.io/zBean.github.io/#person\\",\\"name\\":\\"Zhibin Li\\",\\"alternateName\\":\\"李志斌\\",\\"url\\":\\"https://jioy.github.io/zBean.github.io/\\",\\"image\\":\\"https://jioy.github.io/zBean.github.io/profile6.png\\",\\"affiliation\\":{\\"@type\\":\\"CollegeOrUniversity\\",\\"name\\":\\"Southern University of Science and Technology\\",\\"url\\":\\"https://www.sustech.edu.cn/en/\\"},\\"sameAs\\":[\\"https://github.com/jioy\\",\\"https://scholar.google.com/citations?user=Q_M985YAAAAJ\\",\\"https://space.bilibili.com/205887712\\"]}}"]]},"headers":[],"relativePath":"blog/2.FPGA_FDM/FPGA.md","filePath":"blog/2.FPGA_FDM/FPGA.md","lastUpdated":1792234213502.71}');
const _sfc_main = { name: "blog/2.FPGA_FDM/FPGA.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMeta = resolveComponent("ArticleMeta");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "基于-fpga-的高性能离子电子皮肤感知系统",
      tabindex: "-1"
    }, [
      createTextVNode("基于 FPGA 的高性能离子电子皮肤感知系统 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#基于-fpga-的高性能离子电子皮肤感知系统",
        "aria-label": 'Permalink to "基于 FPGA 的高性能离子电子皮肤感知系统"'
      }, "​")
    ], -1)),
    createVNode(_component_ArticleMeta),
    _cache[1] || (_cache[1] = createStaticVNode("", 75))
  ]);
}
const FPGA = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  FPGA as default
};
