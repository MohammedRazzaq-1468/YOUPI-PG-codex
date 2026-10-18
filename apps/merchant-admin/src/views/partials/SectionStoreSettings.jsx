import React from 'react';

export default function SectionStoreSettings() {
  return (
    <>
    {/*  =========================================================================  */}
    {/*  SECTION 2: STORE SETTINGS                                                  */}
    {/*  =========================================================================  */}
    <div id="sectionStoreSettings" hidden>

      {/*  SUB-VIEW 2.1: BRAND IDENTITY & WHITE-LABEL VISUAL CUSTOMIZER  */}
      <div id="subViewStoreBrand">
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🎨 White-Label Branding &amp; Visual Gateway Customizer</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Customize every visual, textual, and brand asset of your customer checkout
                experience. Live reflection on smartphone mockup.</div>
            </div>
            <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">100% White-Label Capable</span>
          </div>

          <div
            style={{"display":"grid","gridTemplateColumns":"minmax(0, 1.4fr) minmax(340px, 1fr)","gap":"2rem","alignItems":"start"}}>

            {/*  LEFT COLUMN: CONTROLS & SETTINGS  */}
            <div>
              {/*  SECTION 1: CORE BRAND IDENTITY  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  🏷️ 1. Core Brand Identity &amp; Title
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Merchant
                      Store / Business Name</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingBusinessName" type="text" placeholder="e.g. YOUPI Store or MSPCARE"
                      style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Gateway
                      Title / App Name</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingAppName" type="text" defaultValue="YOUPI PG" placeholder="e.g. YOUPI Pay"
                      style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                  </div>
                </div>
                <div>
                  <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Brand Logo
                    Image URL</label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingLogoUrl" type="url" placeholder="https://yourbrand.com/logo.png" style={{"width":"100%"}}
                    onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                  <span
                    style={{"fontSize":"0.72rem","color":"var(--text-muted)","display":"block","marginTop":"0.25rem"}}>Transparent
                    PNG or SVG recommended. When left blank, your store initial letter is used.</span>
                </div>
              </div>

              {/*  SECTION 2: VISUAL THEME & COLOR PALETTE  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  🎨 2. Visual Theme &amp; Color Palette
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Primary
                      Brand Color (Hex)</label>
                    <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingColorPicker" type="color" defaultValue="#0b63e5"
                        style={{"width":"44px","height":"40px","border":"none","background":"transparent","cursor":"pointer","padding":"0"}}
                        onInput={(e) => { try { (new Function('e', "syncColorPickerToText(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }} />
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingPrimaryColor" type="text" defaultValue="#0b63e5"
                        style={{"flex":"1","fontFamily":"monospace","fontWeight":"700"}}
                        onInput={(e) => { try { (new Function('e', "syncTextColorToPicker(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }} />
                    </div>
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Header
                      Styling Theme</label>
                    <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingHeaderTheme" style={{"width":"100%"}} onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }}>
                      <option value="gradient">Dynamic Gradient (Brand to Deep Accent)</option>
                      <option value="solid">Solid Brand Color</option>
                      <option value="dark">Obsidian Dark Navy (#0b1329)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <span
                    style={{"fontSize":"0.75rem","color":"var(--text-muted)","fontWeight":"700","display":"block","marginBottom":"0.4rem"}}>Quick
                    FinTech Brand Palettes:</span>
                  <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#0b63e5', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🔵 Sapphire Blue</button>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#10b981', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟢 Emerald Green</button>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#8b5cf6', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟣 Violet Purple</button>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#f43f5e', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🔴 Rose Crimson</button>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#d97706', 'gradient')"))(e); } catch(err) { console.error(err); } }}>🟡 Amber Gold</button>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.3rem 0.65rem","fontSize":"0.75rem"}}
                      onClick={(e) => { try { (new Function('e', "applyQuickPalette('#0f172a', 'dark')"))(e); } catch(err) { console.error(err); } }}>⚫ Obsidian Dark</button>
                  </div>
                </div>
              </div>

              {/*  SECTION 3: TRUST BADGE & SUB-BANNER CONTROLS  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  🛡️ 3. Badges &amp; Conversion Banners
                </div>
                {/*  Hidden inputs preserve existing trust badge settings without merchant UI access  */}
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="hidden" id="settingHideTrustBadge" />
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="hidden" id="settingTrustBadgeText" />
                <div style={{"marginBottom":"1rem","paddingBottom":"1rem","borderBottom":"1px dashed var(--border)"}}>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.35rem"}}>
                    <label style={{"fontSize":"0.82rem","fontWeight":"700"}}>Header Sub-banner Text</label>
                    <label
                      style={{"fontSize":"0.78rem","color":"var(--text-muted)","display":"flex","alignItems":"center","gap":"0.35rem","cursor":"pointer"}}>
                      <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="settingHideSubbanner" onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                      <span>Hide Sub-banner</span>
                    </label>
                  </div>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSubbannerText" type="text" placeholder="e.g. ⚡ 5-Second Instant UPI Activation"
                    style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                </div>
                <div>
                  <label
                    style={{"fontSize":"0.78rem","color":"var(--text-muted)","display":"flex","alignItems":"center","gap":"0.35rem","cursor":"pointer"}}>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="settingHideTimeSavingBanner" onChange={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                    <span>Hide Psychological Time-Saving Banner</span>
                  </label>
                </div>
              </div>

              {/*  SECTION 4: TRUST GUARANTEES & NOTICES  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  🛡️ 4. Guarantees &amp; Conversion Notices
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Sidebar Trust Notice</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSidebarNotice" type="text" placeholder="e.g. Fast & Secure 256-Bit Encrypted Payments" style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Footer Guarantee Text</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingFooterGuarantee" type="text" placeholder="e.g. 100% Payment Protection Guaranteed" style={{"width":"100%"}} onInput={(e) => { try { (new Function('e', "updateLiveWhiteLabelPreview()"))(e); } catch(err) { console.error(err); } }} />
                  </div>
                </div>
              </div>

              {/*  SECTION 5: SUPPORT & LEGAL POLICIES  */}
              <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
                <div className="group-box-title text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
                  📞 5. Support &amp; Legal Policies
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Customer
                      Support Email(s)</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSupportEmails" type="text" placeholder="support@brand.com, help@brand.com"
                      style={{"width":"100%"}} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Customer
                      Support Mobile(s)</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingSupportMobiles" type="text" placeholder="+91 9876543210, +91 9123456789"
                      style={{"width":"100%"}} />
                  </div>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}}>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Privacy
                      Policy URL</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingPrivacyPolicyUrl" type="url" placeholder="https://yourbrand.com/privacy-policy"
                      style={{"width":"100%"}} />
                  </div>
                  <div>
                    <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Terms of
                      Service URL</label>
                    <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingTermsUrl" type="url" placeholder="https://yourbrand.com/terms"
                      style={{"width":"100%"}} />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{"padding":"0.85rem 1.75rem","fontSize":"0.95rem","width":"100%","justifyContent":"center"}}
                onClick={(e) => { try { (new Function('e', "saveMerchantBrandingAndToggles()"))(e); } catch(err) { console.error(err); } }}>
                💾 Save &amp; Apply All White-Label Settings
              </button>
            </div>

            {/*  RIGHT COLUMN: INTERACTIVE SMARTPHONE CHECKOUT MOCKUP PREVIEW  */}
            <div style={{"position":"sticky","top":"130px"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                <div
                  style={{"fontSize":"0.82rem","fontWeight":"800","textTransform":"uppercase","color":"#94a3b8","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                  <span
                    style={{"display":"inline-block","width":"8px","height":"8px","borderRadius":"50%","background":"#10b981"}}></span>
                  Live Gateway Mockup Preview
                </div>
                <span style={{"fontSize":"0.72rem","color":"var(--text-muted)"}}>Real-time reflection</span>
              </div>

              {/*  PHONE CHASSIS  */}
              <div
                style={{"width":"100%","maxWidth":"380px","margin":"0 auto","background":"#ffffff","borderRadius":"36px","border":"9px solid #1e293b","boxShadow":"0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)","overflow":"hidden","position":"relative","minHeight":"580px","display":"flex","flexDirection":"column"}}>
                {/*  PHONE NOTCH  */}
                <div
                  style={{"background":"#0b0f19","height":"24px","display":"flex","alignItems":"center","justifyContent":"space-between","padding":"0 16px","color":"#ffffff","fontSize":"10px","fontWeight":"700"}}>
                  <span>9:41</span>
                  <div style={{"width":"50px","height":"4px","background":"#334155","borderRadius":"4px"}}></div>
                  <div style={{"display":"flex","gap":"4px","alignItems":"center"}}><span>5G</span><span>100%</span></div>
                </div>

                {/*  LIVE CHECKOUT HEADER  */}
                <div id="mockupHeader"
                  style={{"background":"linear-gradient(180deg, #0b63e5 0%, #0747a6 100%)","padding":"12px 14px 10px 14px","color":"#ffffff","transition":"background 0.2s ease"}}>
                  <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","marginBottom":"8px"}}>
                    <div style={{"display":"flex","alignItems":"center","gap":"10px"}}>
                      <div
                        style={{"width":"36px","height":"36px","borderRadius":"50%","background":"#ffffff","display":"flex","alignItems":"center","justifyContent":"center","overflow":"hidden","boxShadow":"0 2px 5px rgba(0,0,0,0.15)","flexShrink":"0"}}>
                        <span id="mockupAvatarLetter" style={{"fontWeight":"900","color":"#0b63e5","fontSize":"16px"}}>M</span>
                        <img id="mockupAvatarImg" alt="Logo"
                          style={{"display":"none","width":"100%","height":"100%","objectFit":"contain"}} />
                      </div>
                      <div>
                        <div id="mockupHeaderMerchantName"
                          style={{"fontSize":"13.5px","fontWeight":"800","lineHeight":"1.2","color":"#ffffff"}}>Merchant Checkout
                        </div>
                        <div id="mockupTrustBadge"
                          style={{"display":"inline-flex","alignItems":"center","gap":"3px","marginTop":"2px"}}>
                          <span style={{"fontSize":"11px"}}>🛡️</span>
                          <span id="mockupTrustBadgeText"
                            style={{"fontSize":"10px","fontWeight":"700","color":"rgba(255,255,255,0.92)"}}>YouPI PG Verified
                            Business</span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{"width":"28px","height":"28px","borderRadius":"50%","background":"rgba(255,255,255,0.18)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"12px"}}>
                      👤</div>
                  </div>

                  <div id="mockupSubbanner"
                    style={{"background":"rgba(255,255,255,0.15)","borderRadius":"6px","padding":"4px 8px","fontSize":"10.5px","fontWeight":"700","display":"flex","alignItems":"center","gap":"5px","backdropFilter":"blur(4px)"}}>
                    <span>🛒</span>
                    <span id="mockupSubbannerText"
                      style={{"whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>Verified &amp; Protected by
                      YOUPI PG</span>
                  </div>
                </div>

                {/*  BODY PREVIEW  */}
                <div style={{"padding":"12px","background":"#f8fafc","flex":"1","display":"flex","flexDirection":"column","gap":"10px"}}>
                  <div id="mockupTimeSavingBanner"
                    style={{"background":"#f0fdf4","border":"1px solid #86efac","borderRadius":"8px","padding":"7px 10px","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"6px"}}>
                    <div style={{"fontSize":"10px","color":"#14532d","fontWeight":"700","lineHeight":"1.3"}}>⚡ Skip wait: Instant
                      billing counter checkout available</div>
                    <span
                      style={{"background":"#10b981","color":"#fff","fontSize":"9px","fontWeight":"800","padding":"3px 7px","borderRadius":"5px","whiteSpace":"nowrap"}}>Switch</span>
                  </div>

                  <div
                    style={{"background":"#ffffff","border":"1px solid #e2e8f0","borderRadius":"10px","padding":"10px","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                    <div>
                      <div style={{"fontSize":"9.5px","color":"#64748b","fontWeight":"700","textTransform":"uppercase"}}>Order
                        #ORD-78921</div>
                      <div style={{"fontSize":"17px","fontWeight":"900","color":"#0f172a","marginTop":"2px"}}>₹1,500.00</div>
                    </div>
                    <span
                      style={{"background":"#eff6ff","color":"#2563eb","fontSize":"10px","fontWeight":"800","padding":"3px 8px","borderRadius":"6px"}}>Direct
                      UPI</span>
                  </div>

                  <div
                    style={{"background":"#ffffff","border":"1px solid #e2e8f0","borderRadius":"10px","padding":"12px","textAlign":"center"}}>
                    <div
                      style={{"width":"110px","height":"110px","margin":"0 auto 8px auto","borderRadius":"8px","border":"2px solid #0f172a","padding":"4px","display":"flex","alignItems":"center","justifyContent":"center","background":"#ffffff"}}>
                      <div
                        style={{"width":"100%","height":"100%","background":"repeating-linear-gradient(45deg, #0f172a, #0f172a 6px, #ffffff 6px, #ffffff 12px)","borderRadius":"4px","opacity":"0.85"}}>
                      </div>
                    </div>
                    <div style={{"fontSize":"10px","fontWeight":"700","color":"#334155"}}>Scan with any UPI App (GPay, PhonePe,
                      Paytm)</div>
                  </div>
                </div>

                {/*  LIVE STICKY FOOTER  */}
                <div style={{"background":"#ffffff","borderTop":"1px solid #e2e8f0","padding":"10px 14px","marginTop":"auto"}}>
                  <div
                    style={{"display":"flex","alignItems":"center","justifyContent":"center","gap":"5px","fontSize":"10px","fontWeight":"700","color":"#0b63e5","marginBottom":"5px"}}>
                    <span>🛡️</span>
                    <span id="mockupFooterGuarantee">100% Payment Protection by YOUPI PG</span>
                  </div>
                  <div id="mockupLegalDisclaimer"
                    style={{"fontSize":"9px","color":"#64748b","textAlign":"center","marginBottom":"8px"}}>
                    Secured by YOUPI PG &amp; 256-Bit Bank Encryption &bull; Privacy Notice
                  </div>
                  <div
                    style={{"display":"flex","justifyContent":"space-between","alignItems":"center","background":"#0f172a","borderRadius":"8px","padding":"8px 12px","color":"#ffffff"}}>
                    <div>
                      <div style={{"fontSize":"8.5px","color":"#94a3b8","fontWeight":"600"}}>Total Payable</div>
                      <div style={{"fontSize":"13px","fontWeight":"800","color":"#ffffff"}}>₹1,500.00</div>
                    </div>
                    <span id="mockupCtaButton"
                      style={{"background":"#2563eb","color":"#ffffff","fontSize":"10.5px","fontWeight":"800","padding":"5px 12px","borderRadius":"6px"}}>Continue
                      &rsaquo;</span>
                  </div>
                </div>

                {/*  PHONE HOME BAR  */}
                <div style={{"background":"#ffffff","height":"14px","display":"flex","alignItems":"center","justifyContent":"center"}}>
                  <div style={{"width":"90px","height":"4px","background":"#cbd5e1","borderRadius":"4px"}}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*  SUB-VIEW 2.2: RECEIVING UPI ACCOUNTS (VPAS)  */}
      <div id="subViewStoreVpa" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">⚡ Receiving UPI Accounts &amp; Multiple VPAs</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Manage receiving VPAs. <strong>Only ONE VPA can be active at a time</strong> for
                gateway payments. Activating a VPA automatically rotates and deactivates all others.</div>
            </div>
            <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" id="activeVpaModeBadge">Active Gateway VPA</span>
          </div>

          {/*  Current Active VPA Callout Box  */}
          <div id="activeVpaCallout"
            style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.5rem","display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
            <div>
              <div style={{"fontSize":"0.75rem","fontWeight":"800","color":"var(--text-muted)","textTransform":"uppercase"}}>
                Currently Active Gateway VPA</div>
              <div style={{"fontSize":"1.45rem","fontWeight":"900","color":"var(--primary)","margin":"0.25rem 0"}}
                id="activeVpaIdDisplay">Loading active VPA...</div>
              <div style={{"fontSize":"0.85rem","color":"var(--text-muted)"}} id="activeVpaPayeeDisplay">Payee: -</div>
            </div>
            <div style={{"textAlign":"right"}}>
              <div style={{"fontSize":"0.75rem","color":"var(--text-muted)","marginBottom":"0.3rem"}}>Checkout Mode</div>
              <div style={{"fontSize":"0.9rem","fontWeight":"800","color":"var(--success)"}}>✓ Direct Dynamic UPI QR Gateway
              </div>
            </div>
          </div>

          {/*  Add New VPA Section  */}
          <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
            <h4 style={{"marginBottom":"0.85rem","fontSize":"0.95rem","color":"var(--text-heading)"}}>➕ Add New Receiving UPI VPA
            </h4>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1rem"}}>
              <div>
                <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.3rem"}}>UPI ID /
                  VPA</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="newUpiVpa" type="text" placeholder="e.g. 9876543210@axl or merchant@okhdfcbank"
                  style={{"width":"100%"}} />
              </div>
              <div>
                <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.3rem"}}>Payee / Merchant
                  Display Name</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="newUpiPayee" type="text" placeholder="e.g. YOUPI Store or Store Name" style={{"width":"100%"}} />
              </div>
            </div>
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
              <label
                style={{"display":"flex","alignItems":"center","gap":"0.5rem","fontSize":"0.85rem","fontWeight":"600","cursor":"pointer"}}>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="newUpiActivateNow" defaultChecked style={{"width":"16px","height":"16px"}} />
                <span>Set as active VPA for customer checkout immediately</span>
              </label>
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "addNewUpiAccount()"))(e); } catch(err) { console.error(err); } }}>➕ Save &amp; Add UPI Account</button>
            </div>
          </div>

          {/*  Saved VPAs Table  */}
          <h4 style={{"marginBottom":"0.75rem","fontSize":"0.95rem","color":"var(--text-heading)"}}>📋 Saved Receiving UPI
            Accounts</h4>
          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">UPI ID (VPA)</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payee Name</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Gateway Status</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Slot State</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Created</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody id="upiAccountsTableBody">
                <tr>
                  <td colSpan="6" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>Loading UPI
                    accounts...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 2.3: SELLING MODES & MODALITIES  */}
      <div id="subViewStoreModes" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🏪 Store Selling Mode &amp; Payment Modalities</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Toggle between <strong>Online Selling Mode</strong> (E-Commerce) or
                <strong>Offline Selling Mode</strong> (Physical till/POS desk). Reflects instantly on checkout.
              </div>
            </div>
            <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="currentSellingModeBadge">ONLINE SELLING MODE</span>
          </div>

          {/*  Mode Segmented Switch  */}
          <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1.5rem"}}>
            <div id="cardModeOnline" onClick={(e) => { try { (new Function('e', "setSellingMode('ONLINE', true)"))(e); } catch(err) { console.error(err); } }} className="selling-mode-card mode-selected-online">
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.5rem"}}>
                <strong style={{"fontSize":"1rem","color":"var(--text-heading)"}}>🌐 Online Selling Mode</strong>
                <span className="badge badge-primary" id="badgeOnlineActive">ACTIVE</span>
              </div>
              <p style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.45","margin":"0"}}>
                For websites and courier deliveries. Supports <strong>UPI QR</strong> (always on) and optional
                <strong>Cash on Delivery (COD)</strong>.
              </p>
            </div>

            <div id="cardModeOffline" onClick={(e) => { try { (new Function('e', "setSellingMode('OFFLINE', true)"))(e); } catch(err) { console.error(err); } }} className="selling-mode-card rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 cursor-pointer transition-all hover:border-slate-400">
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.5rem"}}>
                <strong style={{"fontSize":"1rem","color":"var(--text-heading)"}}>🏬 Offline Selling Mode</strong>
                <span className="badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20" id="badgeOfflineActive" style={{"display":"none"}}>ACTIVE</span>
              </div>
              <p style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.45","margin":"0"}}>
                For retail stores and physical checkout desks. Supports <strong>UPI QR</strong> (always on),
                configurable <strong>Cash</strong>, and configurable <strong>Card POS</strong>.
              </p>
            </div>
          </div>

          {/*  ONLINE PAYMENT MODALITIES  */}
          <div id="panelOnlineMode" className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--info)","marginBottom":"0.75rem"}}>🌐 Online Payment
              Options</div>
            <div style={{"display":"flex","flexDirection":"column","gap":"1rem"}}>
              <div
                style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Digital UPI Payments (QR Code)</strong>
                    <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" style={{"fontSize":"0.72rem"}}>Default · Always Enabled</span>
                  </div>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Direct QR code scan &amp; pay via any UPI app
                    (GPay, PhonePe, Paytm, CRED).</div>
                </div>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" checked disabled style={{"width":"20px","height":"20px","opacity":"0.85"}} />
              </div>

              <label
                style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Cash on Delivery (COD)</strong>
                    <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Doorstep Cash</span>
                  </div>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customers confirm order with pre-purchase
                    verification and pay cash upon package arrival.</div>
                </div>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCod" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
              </label>
            </div>
          </div>

          {/*  OFFLINE PAYMENT MODALITIES  */}
          <div id="panelOfflineMode" hidden className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--warning)","marginBottom":"0.75rem"}}>🏬 Offline
              Counter Payment Options</div>
            <div style={{"display":"flex","flexDirection":"column","gap":"1rem"}}>
              <div
                style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Digital UPI Payments (QR Code)</strong>
                    <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" style={{"fontSize":"0.72rem"}}>Default · Always Enabled</span>
                  </div>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer scans dynamic QR code on screen at
                    billing counter.</div>
                </div>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" checked disabled style={{"width":"20px","height":"20px","opacity":"0.85"}} />
              </div>

              <label
                style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Cash</strong>
                    <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Billing Till</span>
                  </div>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer pays physical cash at till. Cashier
                    verifies note and approves in Cashier Dock.</div>
                </div>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCash" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
              </label>

              <label
                style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","padding":"0.85rem","background":"var(--bg-card)","border":"1px solid var(--border)","borderRadius":"0.5rem","cursor":"pointer"}}>
                <div>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <strong style={{"fontSize":"0.9rem","color":"var(--text-heading)"}}>Card</strong>
                    <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" style={{"fontSize":"0.72rem"}}>Store POS Terminal</span>
                  </div>
                  <div style={{"fontSize":"0.8rem","color":"var(--text-muted)"}}>Customer swipes or taps card on physical store
                    POS machine.</div>
                </div>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleMethodCard" defaultChecked style={{"width":"20px","height":"20px","cursor":"pointer"}} />
              </label>
            </div>
          </div>

          {/*  Offline Instructions  */}
          <div className="settings-group-box rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 mb-5">
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"var(--text-heading)","marginBottom":"1rem"}}>🏪 In-Store
              Till &amp; POS Instructions</div>
            <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}}>
              <div>
                <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Cash at Till
                  Counter Instructions</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingCounterInstructions" type="text"
                  placeholder="e.g. Please proceed to Billing Counter and present this screen to Cashier"
                  style={{"width":"100%"}} />
              </div>
              <div>
                <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Card POS
                  Counter Instructions</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingCardCounterInstructions" type="text"
                  placeholder="e.g. Please swipe, insert, or tap your card on the store POS terminal."
                  style={{"width":"100%"}} />
              </div>
            </div>
          </div>

          <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"100%","padding":"0.75rem"}}
            onClick={(e) => { try { (new Function('e', "saveMerchantBrandingAndToggles()"))(e); } catch(err) { console.error(err); } }}>
            💾 Save Selling Mode &amp; Payment Modalities
          </button>
        </div>
      </div>

    </div>

    </>
  );
}
