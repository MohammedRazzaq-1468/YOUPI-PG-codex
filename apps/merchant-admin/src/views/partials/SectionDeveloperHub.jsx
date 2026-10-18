import React from 'react';

export default function SectionDeveloperHub() {
  return (
    <>
    {/*  =========================================================================  */}
    {/*  SECTION 3: DEVELOPER & INFRASTRUCTURE HUB (Merged Control Center)           */}
    {/*  =========================================================================  */}
    <div id="sectionDeveloperHub" hidden>

      {/*  SUB-VIEW: DEVELOPER TOOLS -> PAYMENT SIMULATOR (FEATURE 65)  */}
      <div id="subViewDevSimulator" hidden>
        {/*  Header Banner  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
          style={{"border":"2px solid #3b82f6","background":"linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(15,23,42,0.98) 100%)","marginBottom":"1.5rem"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
            <div>
              <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                <span style={{"fontSize":"1.5rem"}}>🎮</span>
                <h2 style={{"margin":"0","fontSize":"1.35rem","color":"#ffffff","fontWeight":"800"}}>Developer Tools → Payment
                  Simulator</h2>
                <span className="badge"
                  style={{"background":"#2563eb","color":"#ffffff","fontSize":"0.75rem","padding":"0.25rem 0.65rem"}}>DEVELOPER
                  TESTING ONLY</span>
              </div>
              <p
                style={{"fontSize":"0.86rem","color":"var(--text-muted)","margin":"0.4rem 0 0 0","maxWidth":"820px","lineHeight":"1.5"}}>
                Simulate incoming bank SMS and Gmail payment notifications against real checkout sessions.
                The observation enters the <strong>REAL 6-stage verification engine</strong> without shortcuts.
                The real engine decides whether it passes, fails, or triggers fraud detection.
              </p>
            </div>
            {/*  Test Mode Quick Status / Enable  */}
            <div
              style={{"background":"#1e293b","border":"1px solid #334155","borderRadius":"8px","padding":"0.75rem 1rem","display":"flex","alignItems":"center","gap":"0.75rem"}}>
              <div style={{"fontSize":"0.8rem"}}>
                <div style={{"color":"#94a3b8","fontSize":"0.72rem","textTransform":"uppercase"}}>Test Mode Status</div>
                <strong id="simTestModeStatus" style={{"color":"#f59e0b"}}>Checking...</strong>
              </div>
              <button id="simBtnEnableTestMode" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simQuickEnableTestMode()"))(e); } catch(err) { console.error(err); } }}
                style={{"fontSize":"0.78rem","padding":"0.4rem 0.8rem","background":"#f59e0b","borderColor":"#d97706","color":"#0f172a","fontWeight":"700"}}>
                Enable Test Mode
              </button>
            </div>
          </div>
        </div>

        {/*  Target Customer & Active Payment Session Card  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #334155","background":"#0f172a","marginBottom":"1.5rem"}}>
          <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"1.5rem"}}>

            {/*  Column 1: Customer Selection  */}
            <div>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                  <span>👤</span> Target Customer
                </strong>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simFetchCustomers()"))(e); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                  ↻ Reload
                </button>
              </div>
              <div style={{"marginBottom":"0.75rem"}}>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simCustomerSearchInput" placeholder="Search customer (Name, Mobile, Email)..."
                  onInput={(e) => { try { (new Function('e', "simFilterCustomers(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }}
                  style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem"}} />
              </div>
              <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simCustomerSelect" size="4" defaultValue="" onChange={(e) => { try { (new Function('e', "simSelectCustomer(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }}
                style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.5rem","fontSize":"0.82rem","minHeight":"110px"}}>
                <option value="" disabled>Loading existing customers...</option>
              </select>

              {/*  Selected Customer Details  */}
              <div id="simSelectedCustomerBox"
                style={{"marginTop":"0.75rem","padding":"0.85rem","borderRadius":"8px","background":"#1e293b","border":"1px solid #334155","display":"none"}}>
                <div style={{"fontSize":"0.74rem","color":"#94a3b8","textTransform":"uppercase","marginBottom":"0.25rem"}}>Selected
                  Customer</div>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"baseline"}}>
                  <strong id="simCustName" style={{"color":"#ffffff","fontSize":"1rem"}}>-</strong>
                  <span id="simCustPhone" style={{"color":"#38bdf8","fontFamily":"monospace","fontSize":"0.84rem"}}>-</span>
                </div>
                <div id="simCustEmail" style={{"color":"#94a3b8","fontSize":"0.8rem","marginTop":"0.2rem"}}>-</div>
              </div>
            </div>

            {/*  Column 2: Active Payment Session Selection  */}
            <div>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                  <span>💳</span> Active Payment Sessions
                </strong>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simReloadSessions()"))(e); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                  ↻ Refresh Sessions
                </button>
              </div>
              <div id="simSessionsList"
                style={{"minHeight":"160px","maxHeight":"220px","overflowY":"auto","background":"#020617","border":"1px solid #334155","borderRadius":"6px","padding":"0.5rem"}}>
                <div style={{"color":"#64748b","fontSize":"0.82rem","textAlign":"center","padding":"2rem 1rem"}}>
                  Please select a customer on the left to inspect their active payment sessions.
                </div>
              </div>

              {/*  Terminal Session Notice (Requirement 6)  */}
              <div id="simTerminalNotice"
                style={{"display":"none","marginTop":"0.75rem","padding":"0.75rem 1rem","borderRadius":"8px","background":"rgba(239,68,68,0.15)","border":"1px solid #ef4444","color":"#fca5a5","fontSize":"0.84rem","fontWeight":"700"}}>
                ⚠️ SESSION NO LONGER ACTIVE — Observation injection disabled for terminal sessions.
              </div>

              {/*  Selected Session Details Bar  */}
              <div id="simSelectedSessionBar"
                style={{"display":"flex","marginTop":"0.75rem","padding":"0.75rem 1rem","borderRadius":"8px","background":"#1e293b","border":"1px solid #3b82f6","justifyContent":"space-between","alignItems":"center"}}>
                <div>
                  <span style={{"fontSize":"0.72rem","color":"#94a3b8","textTransform":"uppercase"}}>Target Session</span>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginTop":"0.15rem"}}>
                    <strong id="simSelectedSessionId"
                      style={{"color":"#38bdf8","fontFamily":"monospace","fontSize":"0.84rem"}}>-</strong>
                    <span id="simSelectedSessionOrder" style={{"color":"#e2e8f0","fontSize":"0.82rem"}}>-</span>
                  </div>
                </div>
                <div style={{"textAlign":"right"}}>
                  <div id="simSelectedSessionAmount" style={{"color":"#22c55e","fontWeight":"800","fontSize":"1.05rem"}}>-</div>
                  <span id="simSelectedSessionBadge" className="badge"
                    style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","background":"#22c55e","color":"#0f172a"}}>ACTIVE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/*  Two Independent Streams: SMS & Gmail (Section 8-15)  */}
        <div
          style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(360px, 1fr))","gap":"1.5rem","marginBottom":"1.5rem"}}>

          {/*  SMS STREAM PANEL  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #3b82f6","background":"#0b0f19"}}>
            <div
              style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
              <strong style={{"color":"#60a5fa","fontSize":"1.05rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                <span>📱</span> SMS STREAM
              </strong>
              <span style={{"fontSize":"0.74rem","color":"#94a3b8"}}>100% Customizable · Any String</span>
            </div>

            <div style={{"marginBottom":"1rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                Sender / Short Code
              </label>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simSmsSender" defaultValue="HDFCBK"
                placeholder="e.g. HDFCBK, AXISBK, 8796266491, arbitrary string..."
                style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem","fontFamily":"monospace"}} />
            </div>

            <div style={{"marginBottom":"1rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                SMS Content (Free-Form Raw Text)
              </label>
              <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simSmsContent" rows="4"
                placeholder="e.g. A/C XX1234 credited with Rs 499.00 CR. Ref 123456789012"
                style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontSize":"0.84rem","fontFamily":"monospace","resize":"vertical"}}></textarea>
              <div style={{"fontSize":"0.72rem","color":"#64748b","marginTop":"0.25rem"}}>Exact text preserved verbatim as
                <code>raw</code>.
              </div>
            </div>

            <div style={{"marginBottom":"1.25rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                Received Time
              </label>
              <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.4rem"}}>
                <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simSmsTimeType" onChange={(e) => { try { (new Function('e', "simToggleTimeInput('SMS')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.4rem 0.65rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                  <option value="CURRENT">Current Server Time</option>
                  <option value="CUSTOM">Custom Timestamp</option>
                </select>
              </div>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simSmsCustomTime"
                placeholder="YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)"
                style={{"display":"none","width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.45rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","fontFamily":"monospace"}} />
            </div>

            <button id="simBtnPushSms" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simInjectObservation('SMS')"))(e); } catch(err) { console.error(err); } }}
              style={{"width":"100%","background":"#2563eb","borderColor":"#1d4ed8","padding":"0.65rem","fontSize":"0.92rem","fontWeight":"800","display":"flex","justifyContent":"center","alignItems":"center","gap":"0.5rem"}}>
              <span>🚀</span> PUSH SMS TO STREAM
            </button>
          </div>

          {/*  GMAIL STREAM PANEL  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #ec4899","background":"#0b0f19"}}>
            <div
              style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
              <strong style={{"color":"#f472b6","fontSize":"1.05rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                <span>✉️</span> GMAIL STREAM
              </strong>
              <span style={{"fontSize":"0.74rem","color":"#94a3b8"}}>100% Customizable · Any String</span>
            </div>

            <div style={{"marginBottom":"1rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                Sender Email Address
              </label>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simGmailSender" defaultValue="notification@yourbank.bank.in"
                placeholder="e.g. notification@yourbank.bank.in, test@gmail.com, arbitrary email..."
                style={{"width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.5rem 0.75rem","borderRadius":"6px","fontSize":"0.84rem","fontFamily":"monospace"}} />
            </div>

            <div style={{"marginBottom":"1rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                Gmail Content (Free-Form Raw Text)
              </label>
              <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simGmailContent" rows="4"
                placeholder="e.g. Your account has been credited with ₹499.00 via UPI. Reference 123456789012."
                style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontSize":"0.84rem","fontFamily":"monospace","resize":"vertical"}}></textarea>
              <div style={{"fontSize":"0.72rem","color":"#64748b","marginTop":"0.25rem"}}>Exact text preserved verbatim as
                <code>raw</code>.
              </div>
            </div>

            <div style={{"marginBottom":"1.25rem"}}>
              <label style={{"display":"block","fontSize":"0.8rem","color":"#94a3b8","marginBottom":"0.35rem","fontWeight":"600"}}>
                Received Time
              </label>
              <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.4rem"}}>
                <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="simGmailTimeType" onChange={(e) => { try { (new Function('e', "simToggleTimeInput('GMAIL')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.4rem 0.65rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                  <option value="CURRENT">Current Server Time</option>
                  <option value="CUSTOM">Custom Timestamp</option>
                </select>
              </div>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="simGmailCustomTime"
                placeholder="YYYY-MM-DDTHH:mm:ss.sssZ (e.g. 2026-10-04T11:45:21Z)"
                style={{"display":"none","width":"100%","boxSizing":"border-box","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.45rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","fontFamily":"monospace"}} />
            </div>

            <button id="simBtnPushGmail" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simInjectObservation('GMAIL')"))(e); } catch(err) { console.error(err); } }}
              style={{"width":"100%","background":"#db2777","borderColor":"#be185d","padding":"0.65rem","fontSize":"0.92rem","fontWeight":"800","display":"flex","justifyContent":"center","alignItems":"center","gap":"0.5rem"}}>
              <span>🚀</span> PUSH GMAIL TO STREAM
            </button>
          </div>

        </div>

        {/*  PROCESSING RESULT INSPECTOR (Section 21 & 22)  */}
        <div id="simResultInspectorCard" className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
          style={{"display":"none","border":"1px solid #334155","background":"#020617","marginBottom":"1.5rem"}}>
          <div
            style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","flexWrap":"wrap","gap":"0.5rem","borderBottom":"1px solid #1e293b","paddingBottom":"0.75rem"}}>
            <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
              <span style={{"fontSize":"1.3rem"}}>🔬</span>
              <h3 style={{"margin":"0","fontSize":"1.15rem","color":"#ffffff","fontWeight":"800"}}>Processing Result Inspector</h3>
              <span id="simResultStatusBadge" className="badge"
                style={{"fontSize":"0.82rem","padding":"0.3rem 0.75rem"}}>UNKNOWN</span>
            </div>
            <div id="simResultMessageId" style={{"fontSize":"0.78rem","color":"#94a3b8","fontFamily":"monospace"}}></div>
          </div>

          {/*  Target & Extracted Fields Grid  */}
          <div
            style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(160px, 1fr))","gap":"0.75rem","marginBottom":"1.25rem"}}>
            <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
              <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Target Session</div>
              <div id="simResTargetSession"
                style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem","fontFamily":"monospace"}}>None</div>
            </div>
            <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
              <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Source</div>
              <div id="simResSource" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem"}}>-</div>
            </div>
            <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
              <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Amount</div>
              <div id="simResAmount" style={{"fontWeight":"700","color":"#38bdf8","fontSize":"0.95rem"}}>-</div>
            </div>
            <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
              <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Reference / UTR</div>
              <div id="simResRef" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.82rem","fontFamily":"monospace"}}>-
              </div>
            </div>
            <div style={{"background":"#0f172a","padding":"0.65rem 0.85rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
              <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Failing Reason</div>
              <div id="simResReason" style={{"fontWeight":"700","color":"#f87171","fontSize":"0.82rem"}}>None</div>
            </div>
          </div>

          {/*  6-Stage Execution Visualizer  */}
          <div
            style={{"fontSize":"0.8rem","fontWeight":"700","color":"#94a3b8","marginBottom":"0.75rem","textTransform":"uppercase","letterSpacing":"0.04em"}}>
            Pipeline Stage Inspection (Stages 1 – 6)
          </div>
          <div id="simStagesContainer" style={{"display":"flex","flexDirection":"column","gap":"0.5rem","marginBottom":"1rem"}}>
            {/*  Injected via JavaScript  */}
          </div>

          {/*  Raw Text Verbatim  */}
          <div style={{"background":"#0f172a","padding":"0.75rem 1rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
            <div style={{"fontSize":"0.72rem","color":"#64748b","textTransform":"uppercase","marginBottom":"0.25rem"}}>Exact Raw
              Payload (Preserved)</div>
            <pre id="simResRawText"
              style={{"margin":"0","fontSize":"0.8rem","color":"#cbd5e1","fontFamily":"monospace","whiteSpace":"pre-wrap","wordBreak":"break-all"}}></pre>
          </div>
        </div>

        {/*  SIMULATION HISTORY (Section 26 & 30)  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"border":"1px solid #1e293b","background":"#0b0f19"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.85rem"}}>
            <strong style={{"color":"#ffffff","fontSize":"0.95rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
              <span>📜</span> Simulation History
            </strong>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "simFetchHistory()"))(e); } catch(err) { console.error(err); } }}
              style={{"fontSize":"0.74rem","padding":"0.25rem 0.65rem"}}>
              ↻ Refresh History
            </button>
          </div>
          <div style={{"overflowX":"auto"}}>
            <table style={{"width":"100%","borderCollapse":"collapse","fontSize":"0.82rem","textAlign":"left"}}>
              <thead>
                <tr
                  style={{"borderBottom":"1px solid #334155","color":"#94a3b8","fontSize":"0.74rem","textTransform":"uppercase"}}>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Timestamp</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Source</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Sender</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Session</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Result</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Message ID</th>
                  <th style={{"padding":"0.6rem 0.75rem"}}>Reason</th>
                </tr>
              </thead>
              <tbody id="simHistoryTableBody">
                <tr>
                  <td colSpan="7" style={{"padding":"1.5rem","textAlign":"center","color":"#64748b"}}>Loading history...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/*  SUB-VIEW 3.1: MERGED CONTROL CENTER & SYSTEM SUPERVISOR  */}
      <div id="subViewDevSupervisor">

        {/*  CONFIRMATION MODAL: ENABLE TEST MODE (SECTION 11J)  */}
        <div id="modalEnableTestMode"
          style={{"display":"none","position":"fixed","inset":"0","background":"rgba(0,0,0,0.8)","zIndex":"999999","alignItems":"center","justifyContent":"center"}}>
          <div
            style={{"maxWidth":"480px","width":"92%","background":"#0f172a","border":"2px solid #f59e0b","borderRadius":"12px","padding":"1.75rem","boxShadow":"0 25px 50px -12px rgba(0,0,0,0.9)"}}>
            <div style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginBottom":"1rem"}}>
              <span style={{"fontSize":"1.8rem"}}>⚠️</span>
              <h3 style={{"margin":"0","fontSize":"1.25rem","color":"#fbbf24","fontWeight":"800"}}>Enable Test Mode?</h3>
            </div>
            <p style={{"color":"#e2e8f0","fontSize":"0.92rem","lineHeight":"1.6","marginBottom":"1.5rem"}}>
              Test Mode disables automatic banning for 10 minutes and is intended only for development and testing.
            </p>
            <div style={{"display":"flex","justifyContent":"flex-end","gap":"0.75rem"}}>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "closeTestModeModal()"))(e); } catch(err) { console.error(err); } }}
                style={{"fontSize":"0.88rem","padding":"0.55rem 1.1rem"}}>
                Cancel
              </button>
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "confirmEnableTestMode()"))(e); } catch(err) { console.error(err); } }}
                style={{"background":"#f59e0b","borderColor":"#d97706","color":"#0f172a","fontWeight":"800","fontSize":"0.88rem","padding":"0.55rem 1.25rem"}}>
                Enable Test Mode
              </button>
            </div>
          </div>
        </div>

        {/*  DEVELOPER TEST MODE CARD (SECTIONS 11A - 11L)  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="cardDeveloperTestMode"
          style={{"border":"2px solid #f59e0b","background":"linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(15,23,42,0.96) 100%)","marginBottom":"1.5rem"}}>
          {/*  Card Header & Autoritative Server Toggle  */}
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                <span style={{"fontSize":"1.35rem"}}>🧪</span>
                <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>Developer Settings → Test Mode</strong>
                <span className="badge" id="testModeBadge"
                  style={{"fontSize":"0.75rem","padding":"0.25rem 0.65rem","background":"#334155","color":"#94a3b8"}}>[ OFF ] Test
                  Mode</span>
              </div>
              <p
                style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"760px","lineHeight":"1.5"}}>
                This mode exists ONLY for development, debugging, QA, and verification-engine testing.
                While active, <strong>AUTOMATIC BAN SYSTEM = DISABLED</strong>.
                Automatically expires after 10 minutes (strictly enforced server-side).
              </p>
              <div
                style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginTop":"0.6rem","fontSize":"0.78rem","color":"#94a3b8","flexWrap":"wrap"}}>
                <span id="testModeBanStatusText">🛡️ Automatic Ban System: <strong style={{"color":"#22c55e"}}>ENABLED
                    (Normal)</strong></span>
                <span id="testModeCountdownWrap" style={{"display":"none","color":"#fbbf24","fontWeight":"700"}}>⏱ Test Mode
                  Enabled · Remaining time: <span id="testModeTimerVal">10:00</span></span>
              </div>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
              <label
                style={{"display":"flex","alignItems":"center","gap":"0.6rem","cursor":"pointer","background":"#1c1917","padding":"0.6rem 1.1rem","borderRadius":"0.5rem","border":"1px solid #d97706"}}>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="checkbox" id="toggleTestModeSwitch" onChange={(e) => { try { (new Function('e', "handleTestModeToggle(e.currentTarget)"))(e); } catch(err) { console.error(err); } }}
                  style={{"width":"20px","height":"20px","accentColor":"#f59e0b","cursor":"pointer"}} />
                <span style={{"fontSize":"0.88rem","fontWeight":"700","color":"#fef3c7"}} id="testModeLabelText">Test Mode</span>
              </label>
            </div>
          </div>

          {/*  Section 11J: Active Warning Banner  */}
          <div id="testModeActiveBanner"
            style={{"display":"none","marginTop":"1.25rem","padding":"1rem","borderRadius":"8px","background":"rgba(245,158,11,0.14)","border":"1px solid rgba(245,158,11,0.4)","color":"#fef3c7"}}>
            <div
              style={{"display":"flex","alignItems":"center","gap":"0.6rem","fontWeight":"800","fontSize":"0.95rem","color":"#fbbf24","marginBottom":"0.25rem"}}>
              <span>⚠️</span> TEST MODE ACTIVE
            </div>
            <div style={{"fontSize":"0.84rem","color":"#fed7aa","lineHeight":"1.4"}}>
              Automatic banning is temporarily disabled. This mode will automatically turn off after 10 minutes.
            </div>
          </div>

          {/*  Section 11C: Test Payment Observation (Visible ONLY when Test Mode is Active)  */}
          <div id="sectionTestObservation"
            style={{"display":"none","marginTop":"1.5rem","paddingTop":"1.25rem","borderTop":"1px solid rgba(245,158,11,0.25)"}}>
            <div
              style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"0.75rem","marginBottom":"1rem"}}>
              <div>
                <h4 style={{"margin":"0","fontSize":"1.05rem","color":"#ffffff","display":"flex","alignItems":"center","gap":"0.5rem"}}>
                  <span>🎯</span> Test Payment Observation
                </h4>
                <span style={{"fontSize":"0.78rem","color":"#94a3b8"}}>Inject synthetic observations directly into the
                  canonical 6-stage production verification flow.</span>
              </div>
              <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "generateFakeSmsTemplate()"))(e); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.8rem","padding":"0.4rem 0.85rem","borderColor":"#d97706","color":"#fde68a"}}>
                  📱 Create Fake SMS
                </button>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "generateFakeGmailTemplate()"))(e); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.8rem","padding":"0.4rem 0.85rem","borderColor":"#d97706","color":"#fde68a"}}>
                  ✉️ Create Fake Gmail
                </button>
              </div>
            </div>

            {/*  Section 11G: Timestamp Control  */}
            <div
              style={{"background":"#0b0f19","padding":"0.85rem","borderRadius":"8px","border":"1px solid #1e293b","marginBottom":"1.25rem","display":"flex","alignItems":"center","gap":"1rem","flexWrap":"wrap"}}>
              <span style={{"fontSize":"0.82rem","color":"#94a3b8","fontWeight":"600"}}>⏱ Test Timestamp Control:</span>
              <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="selectTestTimestampControl" onChange={(e) => { try { (new Function('e', "handleTestTimestampChange(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }}
                style={{"background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.35rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem"}}>
                <option value="CURRENT">Current Server Timestamp (Normal)</option>
                <option value="BEFORE_SESSION">Message received before session creation (-5 mins)</option>
                <option value="AFTER_EXPIRY">Message received after session expiry (+30 mins)</option>
                <option value="CUSTOM">Custom ISO Timestamp</option>
              </select>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputCustomTimestamp" placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
                style={{"display":"none","background":"#1e293b","color":"#f8fafc","border":"1px solid #475569","padding":"0.35rem 0.75rem","borderRadius":"6px","fontSize":"0.82rem","width":"220px"}} />
            </div>

            {/*  Sections 11D & 11E: Custom SMS & Custom Gmail Testing Grid  */}
            <div
              style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"1.25rem","marginBottom":"1.5rem"}}>
              {/*  Custom SMS Input Area (Section 11D)  */}
              <div style={{"background":"#0b0f19","border":"1px solid #334155","borderRadius":"10px","padding":"1.1rem"}}>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.6rem"}}>
                  <strong style={{"color":"#60a5fa","fontSize":"0.92rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                    📱 SMS Test Message
                  </strong>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputTestSmsSender" placeholder="Sender (e.g. VM-HDFCBK)" defaultValue="VM-HDFCBK"
                    style={{"background":"#1e293b","color":"#cbd5e1","border":"1px solid #334155","fontSize":"0.75rem","padding":"0.25rem 0.5rem","borderRadius":"4px","width":"130px"}} />
                </div>
                <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="inputTestSmsMessage" rows="4"
                  style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontFamily":"monospace","fontSize":"0.82rem","resize":"vertical"}}
                  placeholder="Enter custom SMS content here...&#10;e.g. A/C XX1234 credited by Rs 499.00 CR. Ref 123456789012."></textarea>
                <div style={{"marginTop":"0.75rem","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                  <span style={{"fontSize":"0.72rem","color":"#64748b"}}>Preserved verbatim as <code>raw</code></span>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnInjectSms" onClick={(e) => { try { (new Function('e', "injectTestMessage('SMS')"))(e); } catch(err) { console.error(err); } }}
                    style={{"background":"#2563eb","borderColor":"#1d4ed8","fontSize":"0.82rem","padding":"0.45rem 1rem"}}>
                    🚀 Inject Test SMS
                  </button>
                </div>
              </div>

              {/*  Custom Gmail Input Area (Section 11E)  */}
              <div style={{"background":"#0b0f19","border":"1px solid #334155","borderRadius":"10px","padding":"1.1rem"}}>
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.6rem"}}>
                  <strong style={{"color":"#f472b6","fontSize":"0.92rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                    ✉️ Gmail Test Message
                  </strong>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="inputTestGmailSender" placeholder="Sender (e.g. alerts@hdfc.bank.in)"
                    defaultValue="alerts@hdfc.bank.in"
                    style={{"background":"#1e293b","color":"#cbd5e1","border":"1px solid #334155","fontSize":"0.75rem","padding":"0.25rem 0.5rem","borderRadius":"4px","width":"170px"}} />
                </div>
                <textarea className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="inputTestGmailMessage" rows="4"
                  style={{"width":"100%","boxSizing":"border-box","background":"#020617","color":"#f8fafc","border":"1px solid #334155","borderRadius":"6px","padding":"0.75rem","fontFamily":"monospace","fontSize":"0.82rem","resize":"vertical"}}
                  placeholder="Enter custom email content here...&#10;e.g. Dear Customer, your account has been credited with INR 499.00 via UPI. UPI Ref No: 123456789012."></textarea>
                <div style={{"marginTop":"0.75rem","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                  <span style={{"fontSize":"0.72rem","color":"#64748b"}}>Preserved verbatim as <code>raw</code></span>
                  <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnInjectGmail" onClick={(e) => { try { (new Function('e', "injectTestMessage('GMAIL')"))(e); } catch(err) { console.error(err); } }}
                    style={{"background":"#db2777","borderColor":"#be185d","fontSize":"0.82rem","padding":"0.45rem 1rem"}}>
                    🚀 Inject Test Gmail
                  </button>
                </div>
              </div>
            </div>

            {/*  Section 11H: Test Results Display Inspector  */}
            <div id="testResultContainer"
              style={{"display":"none","background":"#020617","border":"1px solid #334155","borderRadius":"10px","padding":"1.25rem","marginBottom":"1.5rem"}}>
              <div
                style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"1rem","flexWrap":"wrap","gap":"0.5rem"}}>
                <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                  <h4 style={{"margin":"0","fontSize":"1rem","color":"#ffffff"}}>🔬 Complete Processing Result</h4>
                  <span id="testResultStatusBadge" className="badge"
                    style={{"fontSize":"0.8rem","padding":"0.3rem 0.75rem"}}>UNKNOWN</span>
                </div>
                <div id="testResultMeta" style={{"fontSize":"0.8rem","color":"#94a3b8","fontFamily":"monospace"}}></div>
              </div>

              {/*  Quick Metrics Summary  */}
              <div
                style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(130px, 1fr))","gap":"0.75rem","marginBottom":"1.25rem"}}>
                <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Source</div>
                  <div id="testResultSource" style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.9rem"}}>-</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Amount</div>
                  <div id="testResultAmount" style={{"fontWeight":"700","color":"#38bdf8","fontSize":"0.9rem"}}>-</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Reference / UTR</div>
                  <div id="testResultRef"
                    style={{"fontWeight":"700","color":"#f8fafc","fontSize":"0.85rem","fontFamily":"monospace"}}>-</div>
                </div>
                <div style={{"background":"#0f172a","padding":"0.6rem 0.8rem","borderRadius":"6px","border":"1px solid #1e293b"}}>
                  <div style={{"fontSize":"0.7rem","color":"#64748b","textTransform":"uppercase"}}>Failing Reason</div>
                  <div id="testResultReason" style={{"fontWeight":"700","color":"#f87171","fontSize":"0.82rem"}}>None</div>
                </div>
              </div>

              {/*  6-Stage Execution Visualizer  */}
              <div
                style={{"fontSize":"0.8rem","fontWeight":"700","color":"#94a3b8","marginBottom":"0.6rem","textTransform":"uppercase"}}>
                Verification Pipeline Stage Inspection
              </div>
              <div id="testResultStagesList" style={{"display":"flex","flexDirection":"column","gap":"0.5rem"}}>
                {/*  Stages injected dynamically  */}
              </div>
            </div>

            {/*  Section 11I: Test Mode Audit Log Table  */}
            <div style={{"background":"#0b0f19","border":"1px solid #1e293b","borderRadius":"10px","padding":"1.1rem"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
                <strong style={{"color":"#ffffff","fontSize":"0.88rem","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                  📜 Test Mode Audit Log
                </strong>
                <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchTestModeAuditLog()"))(e); } catch(err) { console.error(err); } }}
                  style={{"fontSize":"0.72rem","padding":"0.25rem 0.6rem"}}>
                  ↻ Refresh Audit
                </button>
              </div>
              <div style={{"overflowX":"auto"}}>
                <table style={{"width":"100%","borderCollapse":"collapse","fontSize":"0.78rem","textAlign":"left"}}>
                  <thead>
                    <tr style={{"borderBottom":"1px solid #334155","color":"#64748b"}}>
                      <th style={{"padding":"0.4rem"}}>Time</th>
                      <th style={{"padding":"0.4rem"}}>Action / Message ID</th>
                      <th style={{"padding":"0.4rem"}}>Source</th>
                      <th style={{"padding":"0.4rem"}}>Result</th>
                      <th style={{"padding":"0.4rem"}}>Raw Message</th>
                    </tr>
                  </thead>
                  <tbody id="testAuditLogTableBody">
                    <tr>
                      <td colSpan="5" style={{"padding":"1rem","textAlign":"center","color":"#64748b"}}>Loading test audit
                        records...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/*  FALSE NARRATIVE DEV SWITCH (FEATURE 65 / DEV TOOLS)  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
          style={{"border":"2px solid #8b5cf6","background":"linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(15,23,42,0.98) 100%)","marginBottom":"1.5rem"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"1rem"}}>
            <div style={{"flex":"1","minWidth":"280px"}}>
              <div style={{"display":"flex","alignItems":"center","gap":"0.6rem","marginBottom":"0.35rem"}}>
                <span style={{"fontSize":"1.35rem"}}>🎭</span>
                <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>UPI Server Health: False Narrative Switch</strong>
                <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="falseNarrativeBadge"
                  style={{"fontSize":"0.75rem","padding":"0.25rem 0.65rem"}}>⚪ OFF · REAL SERVER STATUS</span>
              </div>
              <p
                style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"760px","lineHeight":"1.5"}}>
                Override the live observer status to test checkout portal behavior under different UPI server health
                scenarios: <strong>Green</strong> (Healthy: Server Is Working), <strong>Yellow</strong> (Degraded: Extra
                processing seconds), or <strong>Red</strong> (Downtime: Server Facing Issues).
                <strong>Automatically turns off after 10 minutes</strong>.
              </p>
              <div
                style={{"display":"flex","alignItems":"center","gap":"0.75rem","marginTop":"0.6rem","fontSize":"0.78rem","color":"#94a3b8","flexWrap":"wrap"}}>
                <span>⚡ <strong>QR Code Invariant:</strong> The dynamic UPI QR code always loads and displays whether
                  servers are UP, BUSY, or DOWN.</span>
                <span id="falseNarrativeCountdownWrap" style={{"display":"none","color":"#c084fc","fontWeight":"700"}}>⏱
                  Auto-expiry: <span id="falseNarrativeTimerVal">10:00</span></span>
              </div>
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"0.5rem","alignItems":"flex-end"}}>
              <div
                style={{"fontSize":"0.75rem","fontWeight":"700","color":"#c4b5fd","textTransform":"uppercase","letterSpacing":"0.04em"}}>
                Select Narrative to Test:</div>
              <div style={{"display":"flex","gap":"6px","flexWrap":"wrap"}}>
                <button type="button" id="btnNarrativeGreen" onClick={(e) => { try { (new Function('e', "handleFalseNarrativeSelect('GREEN')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#064e3b","border":"1px solid #059669","color":"#6ee7b7","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                  🟢 Green
                </button>
                <button type="button" id="btnNarrativeYellow" onClick={(e) => { try { (new Function('e', "handleFalseNarrativeSelect('YELLOW')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#78350f","border":"1px solid #d97706","color":"#fde68a","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                  🟡 Yellow
                </button>
                <button type="button" id="btnNarrativeRed" onClick={(e) => { try { (new Function('e', "handleFalseNarrativeSelect('RED')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#7f1d1d","border":"1px solid #dc2626","color":"#fca5a5","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                  🔴 Red
                </button>
                <button type="button" id="btnNarrativeOff" onClick={(e) => { try { (new Function('e', "handleFalseNarrativeSelect('OFF')"))(e); } catch(err) { console.error(err); } }}
                  style={{"background":"#1e293b","border":"1px solid #475569","color":"#cbd5e1","fontSize":"0.8rem","fontWeight":"700","padding":"6px 12px","borderRadius":"6px","cursor":"pointer","display":"inline-flex","alignItems":"center","gap":"5px","transition":"all 0.15s"}}>
                  ⚪ Off (Live)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  YOUPI SHOWCASE STORE PORT 5000 MASTER TOGGLE CARD  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm"
          style={{"border":"2px solid #38bdf8","background":"linear-gradient(135deg, rgba(56,189,248,0.06) 0%, rgba(15,23,42,0.95) 100%)"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","flexWrap":"wrap","gap":"1rem"}}>
            <div>
              <div style={{"display":"flex","alignItems":"center","gap":"0.6rem"}}>
                <span style={{"fontSize":"1.35rem"}}>🛍️</span>
                <strong style={{"fontSize":"1.15rem","color":"#ffffff"}}>YOUPI Showcase Store (Port 5000)</strong>
                <span className="badge" id="cardStoreBadge"
                  style={{"fontSize":"0.8rem","padding":"0.3rem 0.75rem"}}>CHECKING...</span>
              </div>
              <p
                style={{"fontSize":"0.84rem","color":"var(--text-muted)","marginTop":"0.4rem","maxWidth":"720px","lineHeight":"1.5"}}>
                Toggle the public YOUPI Showcase Store on or off anytime. When disabled, the Node process is terminated
                and host port <code>5000</code> is freed. When enabled, it launches instantly.
              </p>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
              <a href="http://localhost:5000" id="btnOpenStoreLink" target="_blank" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                style={{"fontSize":"0.85rem","padding":"0.6rem 1.1rem","textDecoration":"none"}}>
                🌐 Open Store (5000) ↗
              </a>
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnToggleYoupiStore"
                style={{"fontSize":"0.88rem","padding":"0.65rem 1.4rem"}} onClick={(e) => { try { (new Function('e', "toggleYoupiStore()"))(e); } catch(err) { console.error(err); } }}>
                ⚡ Toggle Port 5000
              </button>
            </div>
          </div>
        </div>

        {/*  MANAGED PROCESSES SUPERVISOR TABLE  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🖥️ Managed Host Processes (Unified Control Center)</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Native child process supervisor. Zero external container dependencies. Start,
                stop, or restart any gateway service independently.</div>
            </div>
            <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
              <button className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "startAllServices()"))(e); } catch(err) { console.error(err); } }}>▶ Start All</button>
              <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "stopAllServices()"))(e); } catch(err) { console.error(err); } }}>⏹ Stop All</button>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "loadServices()"))(e); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
            </div>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Service Name &amp; ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Port</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">PID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Uptime</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Process Controls</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                <tr>
                  <td colSpan="6" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>Loading managed
                    processes...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*  REAL-TIME AGGREGATE TERMINAL LOGS CONSOLE  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📜 Real-Time Aggregate Terminal Console</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Live SSE stdout/stderr broadcast stream from all active processes.</div>
            </div>
            <div style={{"display":"flex","gap":"0.6rem","alignItems":"center"}}>
              <select className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="logServiceFilter" style={{"padding":"0.4rem 0.75rem","fontSize":"0.78rem"}} onChange={(e) => { try { (new Function('e', "filterLogs()"))(e); } catch(err) { console.error(err); } }}>
                <option value="ALL">All Services</option>
                <option value="payment-api">payment-api (6100)</option>
                <option value="checkout-portal">checkout-portal (7000)</option>
                <option value="merchant-admin">merchant-admin (6001)</option>
                <option value="coin-wallet-store">coin-wallet-store (5000)</option>
                <option value="sms-observer">sms-observer (6002)</option>
                <option value="gmail-observer">gmail-observer (6003)</option>
              </select>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"padding":"0.4rem 0.75rem","fontSize":"0.78rem"}}
                onClick={(e) => { try { (new Function('e', "clearLogsConsole()"))(e); } catch(err) { console.error(err); } }}>Clear Console</button>
            </div>
          </div>

          <div className="terminal-container rounded-xl border border-slate-800 bg-[#020617] p-4 h-[380px] overflow-y-auto font-mono text-xs text-cyan-300 leading-relaxed shadow-inner" id="terminalLogWindow">
            <div className="log-line log-system">
              <span className="log-ts">[Ready]</span> Unified Control Center operational. Awaiting log streams...
            </div>
          </div>
        </div>

      </div>

      {/*  SUB-VIEW 3.2: CLOUDFLARE TUNNEL CONFIGURATION (Canonical Single Source of Truth)  */}
      <div id="subViewDevCloudflare" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="cardCloudflareConfig">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">☁️ Cloudflare Tunnel Configuration</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Single canonical production gateway routing. Enter your domain and prefix; all
                routes, local service ports, and dashboard mappings are system-derived.</div>
            </div>
            <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="envModeDisplayBadge">💻 LOCALHOST MODE</span>
          </div>

          {/*  Mode Segmented Switch  */}
          <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem","marginBottom":"1.5rem"}}>
            <div id="btnEnvLocalhost" onClick={(e) => { try { (new Function('e', "setEnvMode('localhost')"))(e); } catch(err) { console.error(err); } }}
              style={{"background":"#0f172a","border":"2px solid #38bdf8","borderRadius":"0.75rem","padding":"1.2rem","cursor":"pointer","transition":"all 0.2s"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.4rem"}}>
                <strong style={{"fontSize":"1rem","color":"#f1f5f9"}}>💻 Localhost Mode (Development)</strong>
                <span className="badge badge-primary" id="badgeLocalhostActive">ACTIVE</span>
              </div>
              <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","margin":"0","lineHeight":"1.4"}}>
                Routes API, Checkout, and Observers directly over local developer ports (<code>7000</code>,
                <code>6100</code>, <code>6001</code>, <code>6003</code>, <code>5000</code>).
              </p>
            </div>

            <div id="btnEnvProduction" onClick={(e) => { try { (new Function('e', "setEnvMode('production')"))(e); } catch(err) { console.error(err); } }}
              style={{"background":"#0b1120","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.2rem","cursor":"pointer","transition":"all 0.2s"}}>
              <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.4rem"}}>
                <strong style={{"fontSize":"1rem","color":"#f1f5f9"}}>🌍 Production Mode (Cloudflare Tunnel)</strong>
                <span className="badge badge-success inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20" id="badgeProductionActive" style={{"display":"none"}}>ACTIVE</span>
              </div>
              <p style={{"fontSize":"0.8rem","color":"var(--text-muted)","margin":"0","lineHeight":"1.4"}}>
                Authoritative production mode using deterministic Cloudflare public hostnames with SSL
                (<code>https://</code>).
              </p>
            </div>
          </div>

          {/*  Cloudflare Configuration Form  */}
          <div
            style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.5rem"}}>
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.75rem"}}>☁️ Cloudflare Domain
              &amp; Prefix Setup</div>
            <div
              style={{"display":"grid","gridTemplateColumns":"2fr 1fr 1.3fr","gap":"1rem","alignItems":"flex-end","marginBottom":"1rem"}}>
              <div>
                <label
                  style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.35rem"}}>1.
                  Cloudflare Domain</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingDomainTld" type="text" placeholder="example.com" defaultValue=""
                  onInput={(e) => { try { (new Function('e', "updateCloudflarePreview()"))(e); } catch(err) { console.error(err); } }} style={{"width":"100%"}} />
              </div>
              <div>
                <label
                  style={{"display":"block","fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.35rem"}}>2.
                  Deployment Prefix</label>
                <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingDomainPrefix" type="text" placeholder="pay" defaultValue="pay"
                  onInput={(e) => { try { (new Function('e', "updateCloudflarePreview()"))(e); } catch(err) { console.error(err); } }} style={{"width":"100%"}} />
              </div>
              <div>
                <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"100%","padding":"0.65rem","justifyContent":"center"}}
                  onClick={(e) => { try { (new Function('e', "saveDomainSettings()"))(e); } catch(err) { console.error(err); } }}>💾 SAVE CONFIGURATION</button>
              </div>
            </div>
          </div>

          {/*  GENERATED ROUTES LIST  */}
          <div style={{"marginBottom":"1.5rem"}}>
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.75rem"}}>
              <div>
                <div style={{"fontSize":"0.95rem","fontWeight":"800","color":"#f1f5f9"}}>🛣️ CLOUDFLARE TUNNEL ROUTES</div>
                <div style={{"fontSize":"0.78rem","color":"var(--text-muted)"}}>Exact routes to create in Cloudflare Dashboard.
                  All ports and roles are system-defined.</div>
              </div>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.75rem"}} onClick={(e) => { try { (new Function('e', "copyAllMappings()"))(e); } catch(err) { console.error(err); } }}>📋 COPY ALL
                MAPPINGS</button>
            </div>
            <div id="cloudflareRoutesContainer" style={{"display":"flex","flexDirection":"column","gap":"0.75rem"}}>
              {/*  Dynamically populated route cards  */}
            </div>
          </div>

          {/*  CLOUDFLARE DASHBOARD INSTRUCTIONS  */}
          <div style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem"}}>
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.75rem"}}>📖 EXACT CLOUDFLARE
              DASHBOARD INSTRUCTIONS</div>
            <div
              style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"0.4rem","marginBottom":"1rem","fontSize":"0.8rem","fontFamily":"monospace","background":"#020617","padding":"0.75rem","borderRadius":"0.5rem","border":"1px solid #1e293b"}}>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Cloudflare Dashboard</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Networking</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Tunnels</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Select YOUPI Tunnel</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Routes</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Add route</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Published application</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Enter Hostname</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#38bdf8","fontWeight":"700"}}>Enter Service URL</span>
              <span style={{"color":"#64748b"}}>↓</span>
              <span style={{"color":"#10b981","fontWeight":"bold"}}>Save</span>
            </div>

            <div style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.5"}}>
              <p style={{"margin":"0 0 0.5rem 0"}}>• <strong>Public Hostname:</strong> The URL users and webhooks access from
                the internet.</p>
              <p style={{"margin":"0 0 0.5rem 0"}}>• <strong>Service URL:</strong> The local service <code>cloudflared</code>
                forwards incoming traffic to on this host.</p>
              <p style={{"margin":"0 0 0.5rem 0","color":"#ef4444"}}>• <strong>DO NOT EXPOSE:</strong> SMS Observer
                (<code>localhost:6002</code>), Control Center (<code>localhost:8090</code>), and internal database
                endpoints must NEVER be published to Cloudflare.</p>
              <p style={{"margin":"0"}}>• Android SMS observer connects to <strong>Payment API</strong>
                (<code>pay-api.example.com</code> / <code>6100</code>), not directly to internal observer ports.</p>
            </div>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 3.4: WEBHOOKS & SECURITY SECRETS  */}
      <div id="subViewDevWebhooks" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">⚡ Webhook Endpoints &amp; Cryptographic Secrets</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Configure where real-time signed payment status events are dispatched via
                HMAC-SHA256.</div>
            </div>
          </div>

          <div style={{"display":"flex","flexDirection":"column","gap":"1.25rem"}}>
            <div>
              <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Webhook
                Destination URL</label>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingWebhookUrl" type="text" placeholder="https://yourstore.com/api/payment/webhook"
                style={{"width":"100%"}} />
              <span style={{"fontSize":"0.72rem","color":"var(--text-muted)","display":"block","marginTop":"0.25rem"}}>Server
                endpoint to receive instant signed transaction status notifications.</span>
            </div>

            <div>
              <label style={{"display":"block","fontSize":"0.82rem","fontWeight":"700","marginBottom":"0.35rem"}}>Webhook Secret
                (HMAC-SHA256 Signing)</label>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="settingWebhookSecret" type="text" readOnly
                style={{"width":"100%","color":"#94a3b8","fontFamily":"monospace"}} />
            </div>

            <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"width":"auto","alignSelf":"flex-start"}}
              onClick={(e) => { try { (new Function('e', "saveMerchantBrandingAndToggles()"))(e); } catch(err) { console.error(err); } }}>
              💾 Save Webhook Settings
            </button>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 3.5: ANDROID OBSERVER GATEWAY  */}
      <div id="subViewDevAndroid" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📱 Android SMS Companion App &amp; Device Pairing</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Install the APK on your bank-linked phone and scan the pairing QR code to
                auto-forward incoming bank credit SMS.</div>
            </div>
            <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="smsDevBadge">STANDBY</span>
          </div>

          <div
            style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1.25rem","textAlign":"center","marginBottom":"1.5rem"}}>
            <div style={{"fontSize":"0.85rem","fontWeight":"800","color":"#cbd5e1","marginBottom":"0.75rem"}}>1. Scan to Pair Phone
            </div>
            <div id="smsPairQrBox"
              style={{"width":"240px","height":"240px","margin":"0 auto","background":"#ffffff","borderRadius":"0.75rem","padding":"12px","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 4px 16px rgba(0,0,0,0.5)"}}>
              Loading Pairing QR...
            </div>
            <div style={{"fontSize":"0.8rem","color":"#94a3b8","margin":"0.75rem 0"}}>
              Enrollment Secret: <code id="smsTokenVal2" style={{"color":"#38bdf8","fontWeight":"700"}}>Loading...</code>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","marginLeft":"0.5rem"}}
                onClick={(e) => { try { (new Function('e', "copySmsToken()"))(e); } catch(err) { console.error(err); } }}>📋 Copy</button>
            </div>
            <div style={{"display":"flex","justifyContent":"center","gap":"0.5rem"}}>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchSmsPairQr()"))(e); } catch(err) { console.error(err); } }}>🔄 Refresh QR</button>
              <a className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" href="/youpi-sms-gateway.apk" download="youpi-sms-gateway.apk">📲 Download
                Android APK</a>
            </div>
          </div>

          <div style={{"marginBottom":"1.5rem"}}>
            <div style={{"fontSize":"0.88rem","fontWeight":"700","color":"#f1f5f9","marginBottom":"0.5rem"}}>Paired Mobile
              Observers</div>
            <div style={{"overflowX":"auto"}}>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Device Name</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Device ID</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Paired At</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody id="smsDevicesTableBody">
                  <tr>
                    <td colSpan="4" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1rem"}}>No devices paired
                    yet. Scan QR above to pair.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/*  Interactive Test Bank SMS Sender  */}
          <div style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem"}}>
            <div style={{"fontSize":"0.85rem","fontWeight":"700","color":"#38bdf8","marginBottom":"0.5rem"}}>🧪 Test Bank SMS
              Parser</div>
            <div style={{"display":"flex","gap":"0.5rem","marginBottom":"0.5rem","flexWrap":"wrap"}}>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="testSmsSender" defaultValue="HDFCBK" placeholder="Sender (e.g. HDFCBK)"
                style={{"width":"120px"}} />
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="testSmsBody"
                defaultValue="Dear Customer, A/C *1234 credited by Rs 500.00 on 30-Sep-26 by UPI/9212339720/REF987654321 - HDFC Bank"
                placeholder="SMS Body" style={{"flex":"1","minWidth":"240px"}} />
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "sendTestBankSms()"))(e); } catch(err) { console.error(err); } }}>Dispatch</button>
            </div>
            <div id="testSmsResult" style={{"fontSize":"0.78rem","color":"#94a3b8"}}></div>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 3.6: GMAIL API & WHATSAPP PROTOCOLS  */}
      <div id="subViewDevProtocols" hidden>
        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1.5rem"}}>
          {/*  Gmail Direct API  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="gmailObserverCard">
            <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📧 Google Account & Gmail Direct API</div>
                <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Official Google OAuth 2.0 automated observation for real-time UPI credit
                  notifications.</div>
              </div>
              <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="gmailConfigBadge2">NOT CONFIGURED</span>
            </div>

            {/*  Hero Action Box: Automated One-Click Google Connect  */}
            <div id="gmailConnectHeroBox"
              style={{"background":"linear-gradient(135deg, rgba(37,99,235,0.1), rgba(15,23,42,0.6))","border":"1px solid rgba(59,130,246,0.3)","borderRadius":"0.75rem","padding":"1.25rem","marginBottom":"1.25rem","display":"flex","flexDirection":"column","gap":"0.75rem"}}>
              <div
                style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","flexWrap":"wrap","gap":"0.75rem"}}>
                <div style={{"flex":"1","minWidth":"260px"}}>
                  <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.25rem"}}>
                    <span id="gmailHeroStatusDot"
                      style={{"width":"10px","height":"10px","borderRadius":"50%","background":"#ef4444","display":"inline-block"}}></span>
                    <strong id="gmailHeroStatusTitle" style={{"fontSize":"0.95rem","color":"#fff"}}>Google Account
                      Disconnected</strong>
                  </div>
                  <div id="gmailHeroStatusDesc" style={{"fontSize":"0.82rem","color":"var(--text-muted)","lineHeight":"1.4"}}>
                    Connect your bank-registered Google account with one click. When you click authorize, YouPI PG
                    handles the full OAuth flow, acquires persistent offline credentials, and activates 1-second UPI
                    credit polling.
                  </div>
                </div>

                {/*  Primary Google Action Button  */}
                <div style={{"display":"flex","gap":"0.5rem","alignItems":"center"}}>
                  <button type="button" id="btnGooglePrimaryAuth" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={(e) => { try { (new Function('e', "startAutomatedGoogleAuth()"))(e); } catch(err) { console.error(err); } }}
                    style={{"display":"inline-flex","alignItems":"center","gap":"0.6rem","padding":"0.65rem 1.25rem","fontSize":"0.9rem","fontWeight":"700","background":"#2563eb","color":"#fff","border":"none","borderRadius":"0.5rem","cursor":"pointer","boxShadow":"0 4px 14px rgba(37,99,235,0.4)"}}>
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#ffffff"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#ffffff"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#ffffff"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#ffffff"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span id="btnGooglePrimaryAuthLabel">Connect with Google (One-Click)</span>
                  </button>
                  <button type="button" id="btnGoogleDisconnect" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={(e) => { try { (new Function('e', "disconnectGmailAccount()"))(e); } catch(err) { console.error(err); } }}
                    style={{"display":"none","fontSize":"0.8rem","padding":"0.65rem 0.9rem","color":"#f87171","borderColor":"#7f1d1d"}}>
                    ❌ Disconnect
                  </button>
                </div>
              </div>

              {/*  In-progress banner when popup is active  */}
              <div id="gmailAuthInProgressBanner"
                style={{"display":"none","background":"rgba(59,130,246,0.15)","border":"1px solid #3b82f6","borderRadius":"0.4rem","padding":"0.6rem 0.85rem","fontSize":"0.82rem","color":"#93c5fd","alignItems":"center","gap":"0.5rem"}}>
                <span className="spinner"
                  style={{"width":"14px","height":"14px","border":"2px solid #3b82f6","borderTopColor":"transparent","borderRadius":"50%","display":"inline-block","animation":"spin 1s linear infinite"}}></span>
                <span>Google Authorization Window Active. Select your account and grant permissions to complete
                  automatic setup...</span>
              </div>
            </div>

            {/*  Live Connection Status Details  */}
            <div
              style={{"background":"#090d16","border":"1px solid #1e293b","borderRadius":"0.5rem","padding":"0.85rem","marginBottom":"1rem","fontSize":"0.8rem","display":"grid","gridTemplateColumns":"1fr 1fr","gap":"0.6rem"}}>
              <div><span style={{"color":"#64748b"}}>OAuth Status:</span> <strong id="gmailOAuthStatusText"
                  style={{"color":"#f87171"}}>DISCONNECTED</strong></div>
              <div><span style={{"color":"#64748b"}}>Token Status:</span> <strong id="gmailTokenStatusText"
                  style={{"color":"#64748b"}}>NOT CONFIGURED</strong></div>
              <div style={{"gridColumn":"span 2","display":"flex","alignItems":"center","gap":"0.4rem"}}>
                <span style={{"color":"#64748b"}}>Connected Account:</span>
                <strong id="gmailConnectedAccountText" style={{"color":"#38bdf8","fontFamily":"monospace"}}>No account
                  authorized</strong>
              </div>
              <div><span style={{"color":"#64748b"}}>Last Successful Poll:</span> <span id="gmailLastPollText"
                  style={{"color":"#94a3b8"}}>Never</span></div>
              <div><span style={{"color":"#64748b"}}>Observer Pipeline:</span> <span id="gmailLastSentText"
                  style={{"color":"#94a3b8"}}>Standby</span></div>
            </div>

            {/*  Secondary Actions  */}
            <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap","marginBottom":"0.75rem"}}>
              <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "testGmailConnection()"))(e); } catch(err) { console.error(err); } }}>🔑 Test Live
                Connection</button>
              <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "startAutomatedGoogleAuth()"))(e); } catch(err) { console.error(err); } }}>🔄 Re-authorize
                Account</button>
              <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "openGmailGuideModal()"))(e); } catch(err) { console.error(err); } }}>📖 Setup Guide</button>
            </div>

            <div id="gmailTestResultBox"
              style={{"display":"none","padding":"0.85rem","borderRadius":"0.5rem","fontSize":"0.82rem","marginBottom":"1rem"}}></div>

            {/*  Advanced Collapsible Configuration  */}
            <details
              style={{"background":"rgba(15,23,42,0.4)","border":"1px solid #1e293b","borderRadius":"0.5rem","padding":"0.6rem 0.85rem"}}>
              <summary style={{"cursor":"pointer","fontSize":"0.78rem","fontWeight":"700","color":"#94a3b8","userSelect":"none"}}>
                ⚙️ Advanced OAuth Credentials &amp; Manual Override (Optional)
              </summary>
              <div style={{"display":"flex","flexDirection":"column","gap":"0.75rem","marginTop":"0.85rem"}}>
                <div>
                  <label
                    style={{"display":"block","fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.2rem"}}>Google
                    OAuth Client ID</label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="gmailClientIdInput" placeholder="your-client-id.apps.googleusercontent.com"
                    style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                </div>
                <div>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.2rem"}}>
                    <label style={{"fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)"}}>Google OAuth Client
                      Secret</label>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.68rem","padding":"0.1rem 0.4rem"}}
                      onClick={(e) => { try { (new Function('e', "toggleSecretVisibility()"))(e); } catch(err) { console.error(err); } }}>👁️ Show/Hide</button>
                  </div>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="password" id="gmailClientSecretInput" placeholder="your-google-client-secret"
                    style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                </div>
                <div>
                  <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"0.2rem"}}>
                    <label style={{"fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)"}}>Exact Authorized
                      Redirect URI</label>
                    <button type="button" className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.68rem","padding":"0.1rem 0.4rem"}}
                      onClick={(e) => { try { (new Function('e', "copyGmailRedirectUri()"))(e); } catch(err) { console.error(err); } }}>📋 Copy</button>
                  </div>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="gmailRedirectUriInput" readOnly
                    style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem","background":"#020617","color":"#38bdf8"}} />
                </div>
                <div>
                  <label
                    style={{"display":"block","fontSize":"0.75rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.2rem"}}>Google
                    Refresh Token</label>
                  <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="password" id="gmailRefreshTokenInput" placeholder="your-google-refresh-token"
                    style={{"width":"100%","fontFamily":"monospace","fontSize":"0.8rem"}} />
                </div>
                <div>
                  <button type="button" className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.8rem","padding":"0.4rem 0.8rem"}}
                    onClick={(e) => { try { (new Function('e', "saveGmailCredentials()"))(e); } catch(err) { console.error(err); } }}>💾 Save Manual Credentials</button>
                </div>
              </div>
            </details>
          </div>

          {/*  WhatsApp Berry Protocol  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
            <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">💬 WhatsApp Berry Protocol</div>
                <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Automated customer login OTP delivery at checkout.</div>
              </div>
              <span className="badge badge-warning inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20" id="waHeaderBadge">CHECKING...</span>
            </div>

            <div
              style={{"background":"#090d16","border":"1px solid var(--border)","borderRadius":"0.75rem","padding":"1rem","marginBottom":"1rem"}}>
              <div id="waLiveStatusDisplay">
                <div style={{"display":"flex","alignItems":"center","gap":"0.5rem","marginBottom":"0.35rem"}}>
                  <span id="waDotIndicator" style={{"color":"#fbbf24"}}>●</span>
                  <strong id="waStateTitle" style={{"color":"#fff"}}>Pairing Standby</strong>
                </div>
                <div id="waPhoneDisplay" style={{"fontSize":"0.85rem","color":"#94a3b8","fontFamily":"monospace"}}>
                  Phone Number: Not Linked
                </div>
              </div>
            </div>

            <div id="waQrBox"
              style={{"background":"#ffffff","borderRadius":"0.75rem","padding":"1rem","display":"inline-block","margin":"0 auto 1rem auto","textAlign":"center"}}>
              <div id="waQrPlaceholder"
                style={{"width":"240px","height":"240px","display":"flex","alignItems":"center","justifyContent":"center","color":"#0f172a","fontSize":"0.85rem","textAlign":"center","padding":"1rem"}}>
                Click "Connect / Refresh QR" to pair device
              </div>
              <img id="waQrImg" src="" alt="WhatsApp Pairing QR" style={{"width":"240px","height":"240px","display":"none","imageRendering":"pixelated"}} onError={(e) => { try { (new Function('e', "e.currentTarget.style.display='none'; if(document.getElementById('waQrPlaceholder')){ document.getElementById('waQrPlaceholder').style.display='flex'; document.getElementById('waQrPlaceholder').innerText='QR preview unavailable. Click Refresh QR.'; }"))(e); } catch(err) { console.error(err); } }} />
            </div>

            <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap"}}>
              <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnWaConnect" onClick={(e) => { try { (new Function('e', "reconnectWhatsApp()"))(e); } catch(err) { console.error(err); } }}>⚡ Connect / Refresh
                QR</button>
              <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" id="btnWaDisconnect" onClick={(e) => { try { (new Function('e', "disconnectWhatsApp()"))(e); } catch(err) { console.error(err); } }}
                style={{"display":"none"}}>🔌 Disconnect</button>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchWhatsAppStatus(true)"))(e); } catch(err) { console.error(err); } }}>🔄 Check Status</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}
