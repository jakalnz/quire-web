/* Quire service worker (web build). Generated from scripts/web/sw.template.js.
 *
 * - Keeps the app working offline: every file of the build is cached on
 *   install, under a cache named for this build.
 * - Serves the user's local images: Markdown points images at
 *   <base>__local__/<path>; the page that owns the file handles reads the
 *   bytes and hands them back here (web/pwa.ts).
 * - A new version waits until the page says to switch (the page offers a
 *   "Reload" when one is ready), so an open document is never pulled away.
 */
const CACHE = 'quire-3d53df8b72f4'
const ASSETS = ["./","index.html","assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","assets/KaTeX_AMS-Regular-DMm9YOAa.woff","assets/KaTeX_AMS-Regular-DRggAlZN.ttf","assets/KaTeX_Caligraphic-Bold-ATXxdsX0.ttf","assets/KaTeX_Caligraphic-Bold-BEiXGLvX.woff","assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","assets/KaTeX_Caligraphic-Regular-CTRA-rTL.woff","assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","assets/KaTeX_Caligraphic-Regular-wX97UBjC.ttf","assets/KaTeX_Fraktur-Bold-BdnERNNW.ttf","assets/KaTeX_Fraktur-Bold-BsDP51OF.woff","assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","assets/KaTeX_Fraktur-Regular-CB_wures.ttf","assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","assets/KaTeX_Fraktur-Regular-Dxdc4cR9.woff","assets/KaTeX_Main-Bold-Cx986IdX.woff2","assets/KaTeX_Main-Bold-Jm3AIy58.woff","assets/KaTeX_Main-Bold-waoOVXN0.ttf","assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","assets/KaTeX_Main-BoldItalic-DzxPMmG6.ttf","assets/KaTeX_Main-BoldItalic-SpSLRI95.woff","assets/KaTeX_Main-Italic-3WenGoN9.ttf","assets/KaTeX_Main-Italic-BMLOBm91.woff","assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","assets/KaTeX_Main-Regular-B22Nviop.woff2","assets/KaTeX_Main-Regular-Dr94JaBh.woff","assets/KaTeX_Main-Regular-ypZvNtVU.ttf","assets/KaTeX_Math-BoldItalic-B3XSjfu4.ttf","assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","assets/KaTeX_Math-BoldItalic-iY-2wyZ7.woff","assets/KaTeX_Math-Italic-DA0__PXp.woff","assets/KaTeX_Math-Italic-flOr_0UB.ttf","assets/KaTeX_Math-Italic-t53AETM-.woff2","assets/KaTeX_SansSerif-Bold-CFMepnvq.ttf","assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","assets/KaTeX_SansSerif-Bold-DbIhKOiC.woff","assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","assets/KaTeX_SansSerif-Italic-DN2j7dab.woff","assets/KaTeX_SansSerif-Italic-YYjJ1zSn.ttf","assets/KaTeX_SansSerif-Regular-BNo7hRIc.ttf","assets/KaTeX_SansSerif-Regular-CS6fqUqJ.woff","assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","assets/KaTeX_Script-Regular-C5JkGWo-.ttf","assets/KaTeX_Script-Regular-D3wIWfF6.woff2","assets/KaTeX_Script-Regular-D5yQViql.woff","assets/KaTeX_Size1-Regular-C195tn64.woff","assets/KaTeX_Size1-Regular-Dbsnue_I.ttf","assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","assets/KaTeX_Size2-Regular-B7gKUWhC.ttf","assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","assets/KaTeX_Size2-Regular-oD1tc_U0.woff","assets/KaTeX_Size3-Regular-CTq5MqoE.woff","assets/KaTeX_Size3-Regular-DgpXs0kz.ttf","assets/KaTeX_Size4-Regular-BF-4gkZK.woff","assets/KaTeX_Size4-Regular-DWFBv043.ttf","assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","assets/KaTeX_Typewriter-Regular-C0xS9mPB.woff","assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","assets/KaTeX_Typewriter-Regular-D3Ib7_Hf.ttf","assets/abnfDiagram-YUKMZFIV-BysBzoV0.js","assets/apl-B4CMkyY2.js","assets/arc-D8zb7GTS.js","assets/architectureDiagram-47P4ROYG-CVdefu7t.js","assets/asciiarmor-Df11BRmG.js","assets/asn1-EdZsLKOL.js","assets/asterisk-B-8jnY81.js","assets/blockDiagram-E7TT5TSB-BXYwn209.js","assets/brainfuck-C4LP7Hcl.js","assets/c4Diagram-CRA5TL53-Cd_Fdr4q.js","assets/channel-BoqJXOd0.js","assets/chunk-2Q5K7J3B-dYLnLIBK.js","assets/chunk-5VM5RSS4-BDQ_ILLM.js","assets/chunk-7TKQ45FW-9f3VAzu8.js","assets/chunk-AW2ZBBNX-CmHgHT65.js","assets/chunk-FVRAUYC3-Dbv2BAvx.js","assets/chunk-HTAEGDNF-QepiKCZu.js","assets/chunk-JWPE2WC7-d71bhzTB.js","assets/chunk-KQW6MTUR-BHaF_Nhp.js","assets/chunk-XXDRQBXY-59QSUAgn.js","assets/classDiagram-v2-K4WV4PDN-BAJTsrPq.js","assets/clike-B9uivgTg.js","assets/clojure-BMjYHr_A.js","assets/cmake-BQqOBYOt.js","assets/cobol-CWcv1MsR.js","assets/coffeescript-S37ZYGWr.js","assets/commonlisp-DBKNyK5s.js","assets/cose-bilkent-JH36ORCC-Bey3DWyB.js","assets/crystal-SjHAIU92.js","assets/css-BnMrqG3P.js","assets/cursor-editorTextHighlight-kG3uUOwL.svg","assets/cynefin-EF2NZ3EQ-DUg9P51H.js","assets/cynefinDiagram-3GCD6N5R-9aOb0eUA.js","assets/cypher-C_CwsFkJ.js","assets/cytoscape.esm-BB4DxJjf.js","assets/d-pRatUO7H.js","assets/dagre-W4DXFKR2-B54oIPB7.js","assets/defaultLocale-DX6XiGOO.js","assets/diagram-2UJZ2QOL-wE1iy6ps.js","assets/diagram-OVF4WLC6-YDpyq3h0.js","assets/diagram-PFPMY2P6-CcOlTd1Z.js","assets/diagram-UMYRVEAY-Tzqhgxfm.js","assets/diagram-YEKJPTXX-BFho0mZf.js","assets/diagram-ZIFT7M5P-BcxF1NAe.js","assets/diff-DbItnlRl.js","assets/dockerfile-BKs6k2Af.js","assets/dtd-DF_7sFjM.js","assets/dylan-DwRh75JA.js","assets/ebnf-CDyGwa7X.js","assets/ebnfDiagram-VR2GEFS7-Bd0BDxj9.js","assets/ecl-Cabwm37j.js","assets/eiffel-CnydiIhH.js","assets/elk-IJKZMXRS-BWAAeBCE.js","assets/elm-vLlmbW-K.js","assets/erDiagram-O2IAPWRE-CqQ7gG-v.js","assets/erlang-BNw1qcRV.js","assets/factor-kuTfRLto.js","assets/fcl-Kvtd6kyn.js","assets/flowDiagram-OXPTDLAJ-Dks_qUuI.js","assets/forth-Ffai-XNe.js","assets/fortran-DYz_wnZ1.js","assets/ganttDiagram-R7TSEDQI-E5SOyxoX.js","assets/gas-Bneqetm1.js","assets/gherkin-heZmZLOM.js","assets/gitGraphDiagram-XJZIOB7I-DmKnIe6n.js","assets/graph-ChPKytOi.js","assets/groovy-D9Dt4D0W.js","assets/haskell-Cw1EW3IL.js","assets/haxe-H-WmDvRZ.js","assets/http-DBlCnlav.js","assets/idl-BEugSyMb.js","assets/index-BJl-4N6w.js","assets/index-BVZl5Nmb.js","assets/index-Bj5Wyc-J.js","assets/index-CHCPgzOD.js","assets/index-CSHOoWCa.css","assets/index-Ch064Lvp.js","assets/index-CufXYSWn.js","assets/index-CwGl71vH.js","assets/index-CxsBASLl.js","assets/index-D-9jvaQS.js","assets/index-D3cBseIu.js","assets/index-DExZ0DNP.js","assets/index-DHE6nHUq.js","assets/index-DSpDpV51.js","assets/index-DhMwZ7DM.js","assets/index-Dtg-udRs.js","assets/index-DuQ-T-Co.js","assets/index-t7MPlkYK.js","assets/index-uyLNLwNU.js","assets/infoDiagram-5W2HQ5XZ-8DLihjVh.js","assets/init-Gi6I4Gst.js","assets/ishikawaDiagram-K3B6WC7H-CuHx9A7G.js","assets/javascript-iXu5QeM3.js","assets/journeyDiagram-COXZFDF6-BSHIvSjn.js","assets/julia-DuME0IfC.js","assets/kanban-definition-P3RFRI5V-BorFrtsH.js","assets/katex-HP8lGamR.js","assets/linear-BKQ5LOtU.js","assets/livescript-BwQOo05w.js","assets/lua-VAEuO923.js","assets/mathematica-DTrFuWx2.js","assets/mbox-CNhZ1qSd.js","assets/mermaid.core-e3iQwEvB.js","assets/mindmap-definition-LZFPQGKD-4ZQmiImo.js","assets/mirc-CjQqDB4T.js","assets/mllike-CXdrOF99.js","assets/modelica-Dc1JOy9r.js","assets/mscgen-BA5vi2Kp.js","assets/mumps-BT43cFF4.js","assets/nginx-DdIZxoE0.js","assets/nsis-LY0VT_u5.js","assets/ntriples-BfvgReVJ.js","assets/octave-Ck1zUtKM.js","assets/ordinal-Cboi1Yqb.js","assets/oz-BzwKVEFT.js","assets/pascal--L3eBynH.js","assets/pdf.worker.min-CjEcRF4W.mjs","assets/pegDiagram-BGZESJAR-P3wZhAXe.js","assets/perl-CdXCOZ3F.js","assets/pieDiagram-CAPJLFHJ-DTuguHw-.js","assets/pig-CevX1Tat.js","assets/powershell-CFHJl5sT.js","assets/properties-C78fOPTZ.js","assets/protobuf-ChK-085T.js","assets/pug-DeIclll2.js","assets/puppet-DMA9R1ak.js","assets/python-BuPzkPfP.js","assets/q-pXgVlZs6.js","assets/quadrantDiagram-GDMTTRAM-BctXzY2z.js","assets/r-B6wPVr8A.js","assets/railroadDiagram-SM67HX2B-DeOqAgm6.js","assets/requirementDiagram-X7JNWC4A-BnMTTZmo.js","assets/rpm-CTu-6PCP.js","assets/ruby-BK5aLJev.js","assets/sankeyDiagram-UM26HJRW-Cz0VECj9.js","assets/sas-B4kiWyti.js","assets/scheme-C41bIUwD.js","assets/sequenceDiagram-ZO4K6R2Y-CNv_xOKC.js","assets/shell-CjFT_Tl9.js","assets/sieve-C3Gn_uJK.js","assets/simple-mode-GW_nhZxv.js","assets/sizeCapture-INFHLROL-ClrxI3Rr.js","assets/smalltalk-CnHTOXQT.js","assets/solr-DehyRSwq.js","assets/source-serif-4-cyrillic-ext-opsz-italic-Bl6DJqma.woff2","assets/source-serif-4-cyrillic-ext-opsz-normal-DIwfbPUE.woff2","assets/source-serif-4-cyrillic-opsz-italic-Dibx14aP.woff2","assets/source-serif-4-cyrillic-opsz-normal-C0olyEE-.woff2","assets/source-serif-4-greek-opsz-italic-CMW9dfKg.woff2","assets/source-serif-4-greek-opsz-normal-DrHU7SY7.woff2","assets/source-serif-4-latin-ext-opsz-italic-BhUEwDRF.woff2","assets/source-serif-4-latin-ext-opsz-normal-HoL-AExg.woff2","assets/source-serif-4-latin-opsz-italic-BOLXpvkj.woff2","assets/source-serif-4-latin-opsz-normal-BpEBLj1O.woff2","assets/source-serif-4-vietnamese-opsz-italic-C-k5pZlm.woff2","assets/source-serif-4-vietnamese-opsz-normal-BOyYyU_V.woff2","assets/sparql-DkYu6x3z.js","assets/spreadsheet-BCZA_wO0.js","assets/sql-D0XecflT.js","assets/stateDiagram-v2-TBUQTH76-BWlxkRpe.js","assets/stex-C3f8Ysf7.js","assets/stylus-B533Al4x.js","assets/swift-BzpIVaGY.js","assets/swimlanes-N4OXWK64-BKD_RWyC.js","assets/swimlanesDiagram-K3J5GTZL-BVv9GkCW.js","assets/tcl-DVfN8rqt.js","assets/textile-CnDTJFAw.js","assets/tiddlywiki-DO-Gjzrf.js","assets/tiki-DGYXhP31.js","assets/timeline-definition-YOQAKGHF-C23wUO3j.js","assets/toml-Bm5Em-hy.js","assets/troff-wAsdV37c.js","assets/ttcn-CfJYG6tj.js","assets/ttcn-cfg-B9xdYoR4.js","assets/turtle-B1tBg_DP.js","assets/usecaseDiagram-VIAY4XPW-BqHMu8lj.js","assets/vb-CmGdzxic.js","assets/vbscript-BuJXcnF6.js","assets/velocity-D8B20fx6.js","assets/vennDiagram-BLWOH2XV-Dh5tWCpw.js","assets/verilog-C6RDOZhf.js","assets/vhdl-lSbBsy5d.js","assets/wardleyDiagram-YMQ3BMBF-CyFomWt-.js","assets/webidl-ZXfAyPTL.js","assets/xquery-DzFWVndE.js","assets/xychartDiagram-TAQBALBS-DQjef-0Z.js","assets/yacas-BJ4BC0dw.js","assets/z80-Hz9HOZM7.js","favicon.png","icons/128.png","icons/256.png","icons/512.png","manifest.webmanifest","pdfjs/cmaps/78-EUC-H.bcmap","pdfjs/cmaps/78-EUC-V.bcmap","pdfjs/cmaps/78-H.bcmap","pdfjs/cmaps/78-RKSJ-H.bcmap","pdfjs/cmaps/78-RKSJ-V.bcmap","pdfjs/cmaps/78-V.bcmap","pdfjs/cmaps/78ms-RKSJ-H.bcmap","pdfjs/cmaps/78ms-RKSJ-V.bcmap","pdfjs/cmaps/83pv-RKSJ-H.bcmap","pdfjs/cmaps/90ms-RKSJ-H.bcmap","pdfjs/cmaps/90ms-RKSJ-V.bcmap","pdfjs/cmaps/90msp-RKSJ-H.bcmap","pdfjs/cmaps/90msp-RKSJ-V.bcmap","pdfjs/cmaps/90pv-RKSJ-H.bcmap","pdfjs/cmaps/90pv-RKSJ-V.bcmap","pdfjs/cmaps/Add-H.bcmap","pdfjs/cmaps/Add-RKSJ-H.bcmap","pdfjs/cmaps/Add-RKSJ-V.bcmap","pdfjs/cmaps/Add-V.bcmap","pdfjs/cmaps/Adobe-CNS1-0.bcmap","pdfjs/cmaps/Adobe-CNS1-1.bcmap","pdfjs/cmaps/Adobe-CNS1-2.bcmap","pdfjs/cmaps/Adobe-CNS1-3.bcmap","pdfjs/cmaps/Adobe-CNS1-4.bcmap","pdfjs/cmaps/Adobe-CNS1-5.bcmap","pdfjs/cmaps/Adobe-CNS1-6.bcmap","pdfjs/cmaps/Adobe-CNS1-UCS2.bcmap","pdfjs/cmaps/Adobe-GB1-0.bcmap","pdfjs/cmaps/Adobe-GB1-1.bcmap","pdfjs/cmaps/Adobe-GB1-2.bcmap","pdfjs/cmaps/Adobe-GB1-3.bcmap","pdfjs/cmaps/Adobe-GB1-4.bcmap","pdfjs/cmaps/Adobe-GB1-5.bcmap","pdfjs/cmaps/Adobe-GB1-UCS2.bcmap","pdfjs/cmaps/Adobe-Japan1-0.bcmap","pdfjs/cmaps/Adobe-Japan1-1.bcmap","pdfjs/cmaps/Adobe-Japan1-2.bcmap","pdfjs/cmaps/Adobe-Japan1-3.bcmap","pdfjs/cmaps/Adobe-Japan1-4.bcmap","pdfjs/cmaps/Adobe-Japan1-5.bcmap","pdfjs/cmaps/Adobe-Japan1-6.bcmap","pdfjs/cmaps/Adobe-Japan1-UCS2.bcmap","pdfjs/cmaps/Adobe-Korea1-0.bcmap","pdfjs/cmaps/Adobe-Korea1-1.bcmap","pdfjs/cmaps/Adobe-Korea1-2.bcmap","pdfjs/cmaps/Adobe-Korea1-UCS2.bcmap","pdfjs/cmaps/B5-H.bcmap","pdfjs/cmaps/B5-V.bcmap","pdfjs/cmaps/B5pc-H.bcmap","pdfjs/cmaps/B5pc-V.bcmap","pdfjs/cmaps/CNS-EUC-H.bcmap","pdfjs/cmaps/CNS-EUC-V.bcmap","pdfjs/cmaps/CNS1-H.bcmap","pdfjs/cmaps/CNS1-V.bcmap","pdfjs/cmaps/CNS2-H.bcmap","pdfjs/cmaps/CNS2-V.bcmap","pdfjs/cmaps/ETHK-B5-H.bcmap","pdfjs/cmaps/ETHK-B5-V.bcmap","pdfjs/cmaps/ETen-B5-H.bcmap","pdfjs/cmaps/ETen-B5-V.bcmap","pdfjs/cmaps/ETenms-B5-H.bcmap","pdfjs/cmaps/ETenms-B5-V.bcmap","pdfjs/cmaps/EUC-H.bcmap","pdfjs/cmaps/EUC-V.bcmap","pdfjs/cmaps/Ext-H.bcmap","pdfjs/cmaps/Ext-RKSJ-H.bcmap","pdfjs/cmaps/Ext-RKSJ-V.bcmap","pdfjs/cmaps/Ext-V.bcmap","pdfjs/cmaps/GB-EUC-H.bcmap","pdfjs/cmaps/GB-EUC-V.bcmap","pdfjs/cmaps/GB-H.bcmap","pdfjs/cmaps/GB-V.bcmap","pdfjs/cmaps/GBK-EUC-H.bcmap","pdfjs/cmaps/GBK-EUC-V.bcmap","pdfjs/cmaps/GBK2K-H.bcmap","pdfjs/cmaps/GBK2K-V.bcmap","pdfjs/cmaps/GBKp-EUC-H.bcmap","pdfjs/cmaps/GBKp-EUC-V.bcmap","pdfjs/cmaps/GBT-EUC-H.bcmap","pdfjs/cmaps/GBT-EUC-V.bcmap","pdfjs/cmaps/GBT-H.bcmap","pdfjs/cmaps/GBT-V.bcmap","pdfjs/cmaps/GBTpc-EUC-H.bcmap","pdfjs/cmaps/GBTpc-EUC-V.bcmap","pdfjs/cmaps/GBpc-EUC-H.bcmap","pdfjs/cmaps/GBpc-EUC-V.bcmap","pdfjs/cmaps/H.bcmap","pdfjs/cmaps/HKdla-B5-H.bcmap","pdfjs/cmaps/HKdla-B5-V.bcmap","pdfjs/cmaps/HKdlb-B5-H.bcmap","pdfjs/cmaps/HKdlb-B5-V.bcmap","pdfjs/cmaps/HKgccs-B5-H.bcmap","pdfjs/cmaps/HKgccs-B5-V.bcmap","pdfjs/cmaps/HKm314-B5-H.bcmap","pdfjs/cmaps/HKm314-B5-V.bcmap","pdfjs/cmaps/HKm471-B5-H.bcmap","pdfjs/cmaps/HKm471-B5-V.bcmap","pdfjs/cmaps/HKscs-B5-H.bcmap","pdfjs/cmaps/HKscs-B5-V.bcmap","pdfjs/cmaps/Hankaku.bcmap","pdfjs/cmaps/Hiragana.bcmap","pdfjs/cmaps/KSC-EUC-H.bcmap","pdfjs/cmaps/KSC-EUC-V.bcmap","pdfjs/cmaps/KSC-H.bcmap","pdfjs/cmaps/KSC-Johab-H.bcmap","pdfjs/cmaps/KSC-Johab-V.bcmap","pdfjs/cmaps/KSC-V.bcmap","pdfjs/cmaps/KSCms-UHC-H.bcmap","pdfjs/cmaps/KSCms-UHC-HW-H.bcmap","pdfjs/cmaps/KSCms-UHC-HW-V.bcmap","pdfjs/cmaps/KSCms-UHC-V.bcmap","pdfjs/cmaps/KSCpc-EUC-H.bcmap","pdfjs/cmaps/KSCpc-EUC-V.bcmap","pdfjs/cmaps/Katakana.bcmap","pdfjs/cmaps/LICENSE","pdfjs/cmaps/NWP-H.bcmap","pdfjs/cmaps/NWP-V.bcmap","pdfjs/cmaps/RKSJ-H.bcmap","pdfjs/cmaps/RKSJ-V.bcmap","pdfjs/cmaps/Roman.bcmap","pdfjs/cmaps/UniCNS-UCS2-H.bcmap","pdfjs/cmaps/UniCNS-UCS2-V.bcmap","pdfjs/cmaps/UniCNS-UTF16-H.bcmap","pdfjs/cmaps/UniCNS-UTF16-V.bcmap","pdfjs/cmaps/UniCNS-UTF32-H.bcmap","pdfjs/cmaps/UniCNS-UTF32-V.bcmap","pdfjs/cmaps/UniCNS-UTF8-H.bcmap","pdfjs/cmaps/UniCNS-UTF8-V.bcmap","pdfjs/cmaps/UniGB-UCS2-H.bcmap","pdfjs/cmaps/UniGB-UCS2-V.bcmap","pdfjs/cmaps/UniGB-UTF16-H.bcmap","pdfjs/cmaps/UniGB-UTF16-V.bcmap","pdfjs/cmaps/UniGB-UTF32-H.bcmap","pdfjs/cmaps/UniGB-UTF32-V.bcmap","pdfjs/cmaps/UniGB-UTF8-H.bcmap","pdfjs/cmaps/UniGB-UTF8-V.bcmap","pdfjs/cmaps/UniJIS-UCS2-H.bcmap","pdfjs/cmaps/UniJIS-UCS2-HW-H.bcmap","pdfjs/cmaps/UniJIS-UCS2-HW-V.bcmap","pdfjs/cmaps/UniJIS-UCS2-V.bcmap","pdfjs/cmaps/UniJIS-UTF16-H.bcmap","pdfjs/cmaps/UniJIS-UTF16-V.bcmap","pdfjs/cmaps/UniJIS-UTF32-H.bcmap","pdfjs/cmaps/UniJIS-UTF32-V.bcmap","pdfjs/cmaps/UniJIS-UTF8-H.bcmap","pdfjs/cmaps/UniJIS-UTF8-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF16-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF16-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF32-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF32-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF8-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF8-V.bcmap","pdfjs/cmaps/UniJISPro-UCS2-HW-V.bcmap","pdfjs/cmaps/UniJISPro-UCS2-V.bcmap","pdfjs/cmaps/UniJISPro-UTF8-V.bcmap","pdfjs/cmaps/UniJISX0213-UTF32-H.bcmap","pdfjs/cmaps/UniJISX0213-UTF32-V.bcmap","pdfjs/cmaps/UniJISX02132004-UTF32-H.bcmap","pdfjs/cmaps/UniJISX02132004-UTF32-V.bcmap","pdfjs/cmaps/UniKS-UCS2-H.bcmap","pdfjs/cmaps/UniKS-UCS2-V.bcmap","pdfjs/cmaps/UniKS-UTF16-H.bcmap","pdfjs/cmaps/UniKS-UTF16-V.bcmap","pdfjs/cmaps/UniKS-UTF32-H.bcmap","pdfjs/cmaps/UniKS-UTF32-V.bcmap","pdfjs/cmaps/UniKS-UTF8-H.bcmap","pdfjs/cmaps/UniKS-UTF8-V.bcmap","pdfjs/cmaps/V.bcmap","pdfjs/cmaps/WP-Symbol.bcmap","pdfjs/iccs/CGATS001Compat-v2-micro.icc","pdfjs/iccs/LICENSE","pdfjs/images/altText_add.svg","pdfjs/images/altText_disclaimer.svg","pdfjs/images/altText_done.svg","pdfjs/images/altText_spinner.svg","pdfjs/images/altText_warning.svg","pdfjs/images/annotation-check.svg","pdfjs/images/annotation-comment.svg","pdfjs/images/annotation-help.svg","pdfjs/images/annotation-insert.svg","pdfjs/images/annotation-key.svg","pdfjs/images/annotation-newparagraph.svg","pdfjs/images/annotation-noicon.svg","pdfjs/images/annotation-note.svg","pdfjs/images/annotation-paperclip.svg","pdfjs/images/annotation-paragraph.svg","pdfjs/images/annotation-pushpin.svg","pdfjs/images/checkmark.svg","pdfjs/images/comment-actionsButton.svg","pdfjs/images/comment-closeButton.svg","pdfjs/images/comment-editButton.svg","pdfjs/images/comment-popup-editButton.svg","pdfjs/images/cursor-editorFreeHighlight.svg","pdfjs/images/cursor-editorFreeText.svg","pdfjs/images/cursor-editorInk.svg","pdfjs/images/cursor-editorTextHighlight.svg","pdfjs/images/editor-toolbar-delete.svg","pdfjs/images/editor-toolbar-edit.svg","pdfjs/images/findbarButton-next.svg","pdfjs/images/findbarButton-previous.svg","pdfjs/images/gv-toolbarButton-download.svg","pdfjs/images/loading-icon.gif","pdfjs/images/loading.svg","pdfjs/images/messageBar_closingButton.svg","pdfjs/images/messageBar_info.svg","pdfjs/images/messageBar_warning.svg","pdfjs/images/pages_closeButton.svg","pdfjs/images/pages_selected.svg","pdfjs/images/pages_viewArrow.svg","pdfjs/images/pages_viewButton.svg","pdfjs/images/secondaryToolbarButton-documentProperties.svg","pdfjs/images/secondaryToolbarButton-firstPage.svg","pdfjs/images/secondaryToolbarButton-handTool.svg","pdfjs/images/secondaryToolbarButton-lastPage.svg","pdfjs/images/secondaryToolbarButton-rotateCcw.svg","pdfjs/images/secondaryToolbarButton-rotateCw.svg","pdfjs/images/secondaryToolbarButton-scrollHorizontal.svg","pdfjs/images/secondaryToolbarButton-scrollPage.svg","pdfjs/images/secondaryToolbarButton-scrollVertical.svg","pdfjs/images/secondaryToolbarButton-scrollWrapped.svg","pdfjs/images/secondaryToolbarButton-selectTool.svg","pdfjs/images/secondaryToolbarButton-spreadEven.svg","pdfjs/images/secondaryToolbarButton-spreadNone.svg","pdfjs/images/secondaryToolbarButton-spreadOdd.svg","pdfjs/images/signature-properties-row-check.svg","pdfjs/images/toolbarButton-bookmark.svg","pdfjs/images/toolbarButton-currentOutlineItem.svg","pdfjs/images/toolbarButton-download.svg","pdfjs/images/toolbarButton-editorFreeText.svg","pdfjs/images/toolbarButton-editorHighlight.svg","pdfjs/images/toolbarButton-editorInk.svg","pdfjs/images/toolbarButton-editorSignature.svg","pdfjs/images/toolbarButton-editorStamp.svg","pdfjs/images/toolbarButton-menuArrow.svg","pdfjs/images/toolbarButton-menuArrowNova.svg","pdfjs/images/toolbarButton-openFile.svg","pdfjs/images/toolbarButton-pageDown.svg","pdfjs/images/toolbarButton-pageUp.svg","pdfjs/images/toolbarButton-presentationMode.svg","pdfjs/images/toolbarButton-print.svg","pdfjs/images/toolbarButton-search.svg","pdfjs/images/toolbarButton-secondaryToolbarToggle.svg","pdfjs/images/toolbarButton-signaturePropertiesError.svg","pdfjs/images/toolbarButton-signaturePropertiesVerified.svg","pdfjs/images/toolbarButton-viewAttachments.svg","pdfjs/images/toolbarButton-viewLayers.svg","pdfjs/images/toolbarButton-viewOutline.svg","pdfjs/images/toolbarButton-viewThumbnail.svg","pdfjs/images/toolbarButton-viewsManagerToggle.svg","pdfjs/images/toolbarButton-zoomIn.svg","pdfjs/images/toolbarButton-zoomOut.svg","pdfjs/images/treeitem-collapsed.svg","pdfjs/images/treeitem-expanded.svg","pdfjs/standard_fonts/FoxitDingbats.pfb","pdfjs/standard_fonts/FoxitFixed.pfb","pdfjs/standard_fonts/FoxitFixedBold.pfb","pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","pdfjs/standard_fonts/FoxitFixedItalic.pfb","pdfjs/standard_fonts/FoxitSerif.pfb","pdfjs/standard_fonts/FoxitSerifBold.pfb","pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","pdfjs/standard_fonts/FoxitSerifItalic.pfb","pdfjs/standard_fonts/FoxitSymbol.pfb","pdfjs/standard_fonts/LICENSE_FOXIT","pdfjs/standard_fonts/LICENSE_LIBERATION","pdfjs/standard_fonts/LiberationSans-Bold.ttf","pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","pdfjs/standard_fonts/LiberationSans-Italic.ttf","pdfjs/standard_fonts/LiberationSans-Regular.ttf","pdfjs/wasm/LICENSE_JBIG2","pdfjs/wasm/LICENSE_OPENJPEG","pdfjs/wasm/LICENSE_PDFJS_JBIG2","pdfjs/wasm/LICENSE_PDFJS_OPENJPEG","pdfjs/wasm/LICENSE_PDFJS_QCMS","pdfjs/wasm/LICENSE_QCMS","pdfjs/wasm/jbig2.wasm","pdfjs/wasm/jbig2_nowasm_fallback.js","pdfjs/wasm/openjpeg.wasm","pdfjs/wasm/openjpeg_nowasm_fallback.js","pdfjs/wasm/qcms_bg.wasm","pdfjs/wasm/quickjs-eval.js","pdfjs/wasm/quickjs-eval.wasm"]
const LOCAL = '__local__/'

const MIME = {
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', jfif: 'image/jpeg', gif: 'image/gif',
  svg: 'image/svg+xml', webp: 'image/webp', bmp: 'image/bmp', ico: 'image/x-icon', avif: 'image/avif'
}

/**
 * Cache the build a few files at a time, retrying failures. (cache.addAll
 * fetches hundreds of files at once and fails the whole install if any one
 * request fails, which a busy host can cause.) Only the app's page itself must
 * succeed; anything missed is cached the first time it's used.
 */
async function precache() {
  const cache = await caches.open(CACHE)
  const urls = ASSETS.map((a) => new URL(a, self.registration.scope).href)
  const queue = [...urls]
  const failed = []
  const worker = async () => {
    for (let url = queue.shift(); url; url = queue.shift()) {
      let ok = false
      for (let attempt = 0; attempt < 3 && !ok; attempt++) {
        try {
          const res = await fetch(url, { cache: 'no-cache' })
          if (res.ok) {
            await cache.put(url, res)
            ok = true
          }
        } catch {
          /* retry below */
        }
        if (!ok) await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
      }
      if (!ok) failed.push(url)
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker))
  const shell = new URL('index.html', self.registration.scope).href
  if (failed.includes(shell)) throw new Error('could not cache the app')
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) if (key.startsWith('quire-') && key !== CACHE) await caches.delete(key)
      await self.clients.claim()
    })()
  )
})

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting()
})

/** Ask a page of ours for a local file's bytes. */
async function fromPage(clientId, path) {
  const candidates = []
  const own = clientId && (await self.clients.get(clientId))
  if (own) candidates.push(own)
  // Print frames and other documents may not have the handles: ask the app windows too.
  for (const c of await self.clients.matchAll({ type: 'window' })) if (c !== own) candidates.push(c)
  for (const client of candidates) {
    const reply = await new Promise((resolve) => {
      const channel = new MessageChannel()
      const timer = setTimeout(() => resolve(null), 10000)
      channel.port1.onmessage = (e) => {
        clearTimeout(timer)
        resolve(e.data)
      }
      client.postMessage({ type: 'quire-local', path }, [channel.port2])
    })
    if (reply && reply.bytes) return reply.bytes
  }
  return null
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  const scope = new URL(self.registration.scope)
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return
  const rel = url.pathname.slice(scope.pathname.length)

  if (rel.startsWith(LOCAL)) {
    const path = '/' + rel.slice(LOCAL.length).split('/').map(decodeURIComponent).join('/')
    const ext = (path.split('.').pop() || '').toLowerCase()
    if (!MIME[ext]) return event.respondWith(new Response('Not allowed', { status: 403 }))
    event.respondWith(
      fromPage(event.clientId || event.resultingClientId, path).then((bytes) =>
        bytes ? new Response(bytes, { headers: { 'Content-Type': MIME[ext] } }) : new Response('', { status: 404 })
      )
    )
    return
  }

  if (event.request.method !== 'GET') return
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const hit = await cache.match(event.request, { ignoreSearch: true })
      if (hit) return hit
      try {
        const res = await fetch(event.request)
        // Fill in anything the install missed, so it's there offline next time.
        if (res.ok && ASSETS.includes(rel)) await cache.put(event.request, res.clone())
        return res
      } catch (err) {
        // Offline and not cached: pages fall back to the app itself.
        if (event.request.mode === 'navigate') {
          const index = await cache.match(new URL('index.html', self.registration.scope).href)
          if (index) return index
        }
        throw err
      }
    })()
  )
})
