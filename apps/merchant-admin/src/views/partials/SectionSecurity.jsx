import React from 'react';

export default function SectionSecurity() {
  return (
    <>
    {/*  =========================================================================  */}
    {/*  SECTION 4: SECURITY & BAN MANAGEMENT (Sections 4, 5, 6, 7, 9)               */}
    {/*  =========================================================================  */}
    <div id="sectionSecurity" hidden>

      {/*  SUB-VIEW 4.1: BANNED USERS  */}
      <div id="subViewSecBanned">
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3" style={{"flexWrap":"wrap","gap":"1rem"}}>
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🚫 Banned Customer Identities</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Server-enforced access blocking. Positive identification of fraudulent payment
                injection or manual administrative bans.</div>
            </div>
            <div style={{"display":"flex","gap":"0.5rem","flexWrap":"wrap","alignItems":"center"}}>
              <input className="rounded-lg text-sm py-2 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" type="text" id="bannedSearchInput" placeholder="Search by name, email, or phone..."
                style={{"width":"240px","fontSize":"0.82rem","padding":"0.45rem 0.75rem"}}
                onInput={(e) => { try { (new Function('e', "filterBannedUsers(e.currentTarget.value)"))(e); } catch(err) { console.error(err); } }} />
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchBannedUsers()"))(e); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
              <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "openManualBanModal()"))(e); } catch(err) { console.error(err); } }}>➕ Ban User</button>
            </div>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Name</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Email</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Phone</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Status</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Timestamp</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ban Reason</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment Session</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Last Device</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Source</th>
                  <th style={{"textAlign":"right"}}>Actions</th>
                </tr>
              </thead>
              <tbody id="bannedUsersTableBody">
                <tr>
                  <td colSpan="10" style={{"textAlign":"center","color":"var(--text-muted)","padding":"2rem"}}>
                    Loading banned users...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 4.2: SECURITY EVENTS  */}
      <div id="subViewSecEvents" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🚨 Security &amp; Forensic Events Log</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Real-time immutable security event records preserved with exact raw evidence
                verbatim.</div>
            </div>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchSecurityEvents()"))(e); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Timestamp</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Event Type</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Customer</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Source</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Sender</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Fraud Reason</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Raw Evidence (Verbatim)</th>
                  <th style={{"textAlign":"right"}}>Action</th>
                </tr>
              </thead>
              <tbody id="securityEventsTableBody">
                <tr>
                  <td colSpan="8" style={{"textAlign":"center","color":"var(--text-muted)","padding":"2rem"}}>
                    Loading security events...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 4.3: BAN HISTORY  */}
      <div id="subViewSecHistory" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📜 Ban &amp; Unban History Audit Trail</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Historical chronological audit trail of all automatic bans, unbans, manual bans,
                and re-bans.</div>
            </div>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchSecurityHistory()"))(e); } catch(err) { console.error(err); } }}>🔄 Refresh</button>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Timestamp</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Action</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Actor</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Customer Identity</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Details &amp; Transitions</th>
                </tr>
              </thead>
              <tbody id="securityHistoryTableBody">
                <tr>
                  <td colSpan="5" style={{"textAlign":"center","color":"var(--text-muted)","padding":"2rem"}}>
                    Loading ban history...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}
