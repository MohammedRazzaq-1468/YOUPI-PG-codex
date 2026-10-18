import React from 'react';

export default function SectionOperations() {
  return (
    <>
    {/*  =========================================================================  */}
    {/*  SECTION 1: DAILY MERCHANT OPERATIONS                                       */}
    {/*  =========================================================================  */}
    <div id="sectionOperations">

      {/*  KPI Summary Cards  */}
      <div className="kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6">
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Today's Volume</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiVol" style={{"color":"var(--kpi-vol-color)"}}>₹0.00</div>
        </div>
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Successful Payments</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiSuccessCount" style={{"color":"var(--kpi-success-color)"}}>0</div>
        </div>
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">In Waiting Queue</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiQueueCount" style={{"color":"var(--kpi-queue-color)"}}>0</div>
        </div>
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pending Counter Payments</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiPendingCounterCount" style={{"color":"var(--kpi-pending-color)"}}>0</div>
        </div>
      </div>

      {/*  Verification Standards Metric Row (2-Layer Engine: SMS + Gmail)  */}
      <div className="kpi-row grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 mb-6" style={{"marginTop":"-0.5rem","marginBottom":"1.5rem"}}>
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Single Verified (1 Source)</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiSingleVerify" style={{"color":"var(--info)","fontSize":"1.5rem"}}>0</div>
        </div>
        <div className="kpi-box rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="kpi-title text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Dual Verified (2 Sources: SMS + Gmail)</div>
          <div className="kpi-value text-3xl font-black mt-1 tracking-tight text-slate-900 dark:text-white" id="kpiDualVerify" style={{"color":"var(--success)","fontSize":"1.5rem"}}>0</div>
        </div>
      </div>

      {/*  SUB-VIEW 1.1: LIVE QUEUE & SLOTS  */}
      <div id="subViewOpsLive">
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🔴 Real-Time Receiving Account Slot Ownership (UPI Invariant)</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Guarantees zero payment collision by rotating dynamic slots per receiving UPI
                VPA.</div>
            </div>
            <div style={{"display":"flex","gap":"0.5rem"}}>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchLiveData()"))(e); } catch(err) { console.error(err); } }}>Force Refresh</button>
              <button className="btn btn-danger inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-red-600 hover:bg-red-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "promptClearAllQueue()"))(e); } catch(err) { console.error(err); } }}>Clear Waiting Queue</button>
            </div>
          </div>

          <div className="queue-grid grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5 mb-6">
            {/*  Active 5:00 Slot  */}
            <div className="slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all" id="slotActiveBox">
              <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","textTransform":"uppercase"}}>
                Active Slot (5-Minute Window)</div>
              <div id="slotActiveContent" style={{"padding":"1rem 0","color":"var(--text-muted)"}}>
                No customer actively checking out right now.
              </div>
            </div>

            {/*  Processing 30s Slot  */}
            <div className="slot-card rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-5 text-center bg-slate-50 dark:bg-slate-950 transition-all" id="slotProcBox">
              <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","textTransform":"uppercase"}}>
                Processing Slot (30s Verification Window)</div>
              <div id="slotProcContent" style={{"padding":"1rem 0","color":"var(--text-muted)"}}>
                No payment in verification window.
              </div>
            </div>
          </div>

          {/*  Waiting Queue Table  */}
          <div style={{"marginTop":"1.5rem"}}>
            <div style={{"fontSize":"0.92rem","fontWeight":"700","marginBottom":"0.75rem","color":"var(--text-heading)"}}>
              ⏳ Waiting Customer Queue
            </div>
            <div style={{"overflowX":"auto"}}>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Queue #</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                    <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Enqueued At</th>
                  </tr>
                </thead>
                <tbody id="queueTableBody">
                  <tr>
                    <td colSpan="5" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1rem"}}>Waiting queue is
                      empty.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 1.2: COUNTER DESK (CASHIER POS)  */}
      <div id="subViewOpsCounter" hidden>
        {/*  Mode Card: Cash/Card Counter Desk (Offline)  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="counterDeskOfflineCard">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">🏪 Cash &amp; Card Billing Counter Desk (Live Counter Payment Requests)</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Real-time incoming payment requests from checkout screens. Verify banknotes or
                POS slips and approve immediately.</div>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"0.6rem"}}>
              <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="operatorDisplay">Cashier Desk #1</span>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchCounterPayments()"))(e); } catch(err) { console.error(err); } }}>Refresh</button>
            </div>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Counter Method</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Requested At</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Cashier Actions</th>
                </tr>
              </thead>
              <tbody id="counterTableBody">
                <tr>
                  <td colSpan="6" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>No pending counter
                    payments right now.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*  Mode Card: COD Orders (Online)  */}
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" id="counterDeskCodCard" style={{"display":"none"}}>
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📦 Cash on Delivery (COD) Verified Orders</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Orders placed with Cash on Delivery payment confirmation. Ready for fulfillment
                and dispatch.</div>
            </div>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchCodOrders()"))(e); } catch(err) { console.error(err); } }}>Refresh Orders</button>
          </div>

          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment Ref</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Customer Name</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Phone</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Placed At</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody id="codOrdersTableBody">
                <tr>
                  <td colSpan="7" style={{"textAlign":"center","color":"var(--text-muted)","padding":"1.5rem"}}>No COD orders
                    placed yet.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 1.3: TRANSACTIONS LEDGER  */}
      <div id="subViewOpsTransactions" hidden>
        <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm">
          <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
            <div>
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">💳 Payment Transactions Ledger</div>
              <div className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Comprehensive transaction audit history with automated bank observer attribution
                &amp; verification tiers.</div>
            </div>
            <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "fetchPaymentsLedger()"))(e); } catch(err) { console.error(err); } }}>Refresh</button>
          </div>
          <div style={{"overflowX":"auto"}}>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Order ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Payment ID</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Amount</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Method</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Status</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Verification Tier</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Channel Sources</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Created At</th>
                  <th className="text-left py-3 px-4 font-extrabold uppercase text-xs tracking-wider border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Completed At</th>
                </tr>
              </thead>
              <tbody id="paymentsLedgerTbody">
                <tr>
                  <td colSpan="9" style={{"textAlign":"center","padding":"1.5rem"}}>Loading transactions...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/*  SUB-VIEW 1.4: PAYMENT OBSERVERS LIVE STATUS  */}
      <div id="subViewOpsObservers" hidden>
        <div
          style={{"fontSize":"1.15rem","fontWeight":"800","color":"var(--text-heading)","marginBottom":"1rem","display":"flex","alignItems":"center","gap":"0.5rem"}}>
          <span>📡</span> Payment Observers (SMS & Gmail)
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1.5rem"}}>
          {/*  Android Companion Card  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"marginBottom":"0"}}>
            <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📱 Android SMS Gateway</div>
              <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="smsGatewayBadge">STANDBY</span>
            </div>
            <p className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" style={{"marginBottom":"1rem"}}>
              Native Android observer app captures credit SMS notifications in real-time from bank-linked handsets.
            </p>
            <div
              style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem","marginBottom":"1rem"}}>
              <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--text-muted)","marginBottom":"0.4rem"}}>Enrollment
                Secret:</div>
              <code id="smsTokenVal" style={{"color":"var(--info)","fontWeight":"700","fontSize":"0.85rem"}}>Loading...</code>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" style={{"fontSize":"0.7rem","padding":"0.2rem 0.5rem","marginLeft":"0.5rem"}}
                onClick={(e) => { try { (new Function('e', "copySmsToken()"))(e); } catch(err) { console.error(err); } }}>📋 Copy</button>
            </div>
            <div style={{"display":"flex","gap":"0.5rem"}}>
              <a className="btn btn-success inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" href="/youpi-sms-gateway.apk" download="youpi-sms-gateway.apk">📲 Download
                Companion APK</a>
              <button className="btn btn-secondary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "switchSection('developerHub', 'subTabAndroid')"))(e); } catch(err) { console.error(err); } }}>Configure
                Pairing ↗</button>
            </div>
          </div>

          {/*  Gmail Direct API Card  */}
          <div className="card rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 mb-6 shadow-sm" style={{"marginBottom":"0"}}>
            <div className="card-header flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="card-heading text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">📧 Gmail Direct API</div>
              <span className="badge badge-info inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" id="gmailConfigBadge">NOT CONFIGURED</span>
            </div>
            <p className="card-subtext text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed" style={{"marginBottom":"1rem"}}>
              Direct Google Cloud OAuth poller reading transaction credit alerts directly from your merchant inbox.
            </p>
            <div
              style={{"background":"var(--bg-surface)","border":"1px solid var(--border)","borderRadius":"0.5rem","padding":"1rem","marginBottom":"1rem"}}>
              <div style={{"fontSize":"0.8rem","color":"var(--text-muted)","lineHeight":"1.5"}}>
                Dual-verification engine matches transactions across both SMS and Gmail channels for 100% fraud
                immunity.
              </div>
            </div>
            <button className="btn btn-primary inline-flex items-center gap-2 font-bold rounded-lg cursor-pointer text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed" onClick={(e) => { try { (new Function('e', "switchSection('developerHub', 'subTabGmail')"))(e); } catch(err) { console.error(err); } }}>Configure Gmail API
              ↗</button>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}
