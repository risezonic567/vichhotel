import React, { useCallback, useMemo, useRef, useState } from 'react';
const API_URL = '';
const WEBSITE = '';
const SUPPORT_PHONE = '';
const CARD_TYPES = ['Master Card', 'VISA', 'Discover', 'AMEX', 'Other'];

const INITIAL_FORM = {
    bookingRefNo: '',
    toEmail: '',
    bookingDetails: '',
    cardType: '',
    holderName: '',
    cardNo: '',
    cvvNo: '',
    expMm: '',
    expYy: '',
    billingEmail: '',
    mobNo: '',
    billAddress: '',
    cnfName: '',
    cnfCmpName: '',
    price1: '',
    price2: '',
    cnfDetail: '',
    sign: '',
    agree: false,
};

const TERMS_INTRO = [
    'Tickets are Non-Refundable/Non-Transferable and name changes are not permitted.',
    'Date and routing changes will be subject to Airline Penalty and Fare Difference if any.',
    'Fares are not guaranteed until ticketed.',
    `For any modification or changes please contact our Travel Consultant on ${SUPPORT_PHONE}.`,
    'All customers are advised to verify travel documents (transit visa/entry visa) for the country through which they are transiting and/or entering. We will not be responsible if proper travel documents are not available and you are denied entry or transit into a Country. We request you to consult the embassy of the country(s) you are visiting or transiting through.',
    'We value your business and look forward to serving your travel needs in near future.',
    `For any modification or any other query please contact our Travel Consultant on ${SUPPORT_PHONE}.`,
    `These terms and conditions (“terms of use”) apply to you right the moment you access and use ${WEBSITE}: its services, products, and contents. This is a legal agreement between you and ${WEBSITE}. You must read all the information carefully as you agree to these terms and conditions while accessing or using any services or products or contents of ${WEBSITE}.`,
];

const TERMS_SECTIONS = [
    {
        title: 'Travelers Name',
        items: [
            'Traveler First name and Last name must be entered during the time of reservation exactly as it appears on your Government issued identification, be it your passport, Driving License or other acceptable forms of identification depending on your type of journey (Domestic/International). Name once entered will not be changed. Some ‘Typo Error’ (Name Correction) however, is allowed, depending on Airline Terms of Use, & charges would be applicable according as per airline policy.',
        ],
    },
    {
        title: 'Fare Policy',
        items: [
            `All Tickets are not guaranteed until ticketed. The fare may alter as revised by the Airline company or dealer anytime even after the confirmation of a reservation. ${WEBSITE} will inform you about the fare changes if made without assuming any responsibility –financial or otherwise for any such fare alters made by the supplier.`,
            `${WEBSITE} will inform you about the new fares. At that point of time you may- depending on your requirement – either purchase or cancel the product or service at the new cost. You also can cancel the booking at no cost in case there is increase in fare before ticketing and your card being charged. You’ll be charged nothing if you cancel such a booking.`,
        ],
    },
    {
        title: 'Payment Policy',
        bullets: [
            `${WEBSITE} accepts Debit Cards and Credit Cards`,
            'All prices are displayed in US$',
            `${WEBSITE} may divide your total charge into two parts: Taxes and Airline Base. But, the combined total amount will be the same as authorized and quoted by you at the time of booking.`,
            'Ticket fares doesn’t includes baggage fees of airline',
            'Tickets are guaranteed only after the ticketing is completed. The tickets will not be guaranteed upon submission of payment. In case, your credit card payment fails to proceed due to any reason, we will notify you about this within 24 hours.',
        ],
    },
    {
        title: 'Third Party and International Credit & Debit Cards Payment',
        items: [
            'In case you are using an International Debit Card or Credit while purchasing Plane Tickets for personal journey, or for somebody else, you need to have some specific documents for processing passenger E-Tickets. Documents required for the same have been mentioned below.',
        ],
        bullets: [
            'A complete ‘Credit Card Authorization Form’',
            'A copy of identity proof issued by Government with front and back side which has photograph and signatures',
            'Airline Ticket price are not guaranteed until ticketed.',
        ],
    },
    {
        title: 'Credit Card Declines',
        items: [
            'On Credit Card being declined while processing your transaction, we will alert you about this by emailing you at your valid email id within 24 to 48 hours. In this case, neither the transaction will be processed nor the fare and any other booking details will be guaranteed.',
        ],
    },
    {
        title: 'Cancellations and Exchanges',
        items: [
            `For all cancellation and exchanges, you agree to request at least 24 hours before scheduled departure. All flight tickets bought from us are 100% non-refundable. You, however, reserve the right to entertain refund or exchange if allowed by the airline fare rules associated with the ticket(s) issued to you. Your ticket (s) may be refunded or exchanged for the original purchase price after the deduction of applicable airline penalties, and any fare difference between the original fares paid and the fare associated with the new ticket(s). Furthermore, ${WEBSITE} has the right to charge a Change/Refund fees. ${WEBSITE} has no control over airline penalties associated with refunds or exchanges.`,
            'If you travel internationally, you may often be offered to travel in more than one airline. Each airline has formed its own set of fare rules. If more than one set of fare rules are applied to the total fare, the most restrictive rules will be applicable to the entire booking.',
            `Thanks for spending your valuable time and using ${WEBSITE}. For using the website, you are authorized to agree with the aforementioned ‘Terms of Use’. If you are reluctant or don’t agree with any of the conditions.`,
        ],
    },
];

/* ---------------------------------- Helpers ----------------------------------- */

const digitsOnly = (v) => v.replace(/\D/g, '');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formatCardNo = (digits, isAmex) =>
    isAmex
        ? [digits.slice(0, 4), digits.slice(4, 10), digits.slice(10, 15)].filter(Boolean).join(' ')
        : digits.replace(/(.{4})/g, '$1 ').trim();

const detectCardType = (d) => {
    if (/^4/.test(d)) return 'VISA';
    if (/^(5[1-5]|2(2[2-9][1-9]|2[3-9]|[3-6]|7[01]|720))/.test(d)) return 'Master Card';
    if (/^3[47]/.test(d)) return 'AMEX';
    if (/^(6011|65|64[4-9])/.test(d)) return 'Discover';
    return '';
};

const passesLuhn = (d) => {
    let sum = 0;
    let alt = false;
    for (let i = d.length - 1; i >= 0; i--) {
        let n = Number(d[i]);
        if (alt) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        sum += n;
        alt = !alt;
    }
    return d.length > 0 && sum % 10 === 0;
};

const toAmount = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
};

const newPassenger = () => ({ id: crypto.randomUUID?.() ?? String(Math.random()), name: '' });

function validate(form, passengers) {
    const e = {};
    const card = digitsOnly(form.cardNo);
    const isAmex = form.cardType === 'AMEX';

    if (!form.bookingRefNo.trim()) e.bookingRefNo = 'Booking reference number is required.';
    if (!EMAIL_RE.test(form.toEmail)) e.toEmail = 'Enter a valid customer email.';
    if (!passengers.some((p) => p.name.trim())) e.passengers = 'Add at least one passenger name.';
    if (!form.cardType) e.cardType = 'Select a card type.';
    if (!form.holderName.trim()) e.holderName = 'Cardholder name is required.';
    if (card.length < (isAmex ? 15 : 13) || !passesLuhn(card)) e.cardNo = 'Enter a valid card number.';
    if (digitsOnly(form.cvvNo).length !== (isAmex ? 4 : 3)) e.cvvNo = `CVV must be ${isAmex ? 4 : 3} digits.`;

    const mm = Number(form.expMm);
    const yy = Number(form.expYy);
    if (form.expMm.length !== 2 || mm < 1 || mm > 12 || form.expYy.length !== 2) {
        e.exp = 'Enter expiry as MM / YY.';
    } else {
        const now = new Date();
        const curYY = now.getFullYear() % 100;
        const curMM = now.getMonth() + 1;
        if (yy < curYY || (yy === curYY && mm < curMM)) e.exp = 'This card has expired.';
    }

    if (!EMAIL_RE.test(form.billingEmail)) e.billingEmail = 'Enter a valid billing email.';
    if (digitsOnly(form.mobNo).length < 7) e.mobNo = 'Enter a valid contact number.';
    if (!form.billAddress.trim()) e.billAddress = 'Billing address is required.';

    if (!form.cnfName.trim()) e.cnfName = 'Name is required.';
    if (!form.cnfCmpName.trim()) e.cnfCmpName = 'Company name is required.';
    if (toAmount(form.price1) + toAmount(form.price2) <= 0) e.amount = 'Enter an amount greater than 0.';
    if (!form.cnfDetail.trim()) e.cnfDetail = 'Charge details are required.';
    if (!form.sign.trim()) e.sign = 'Customer signature is required.';

    if (!form.agree) e.agree = 'Please agree to the Terms & Conditions to continue.';
    return e;
}

/* ------------------------------------ Styles ---------------------------------- */

const CSS = `
.cca{font-family:Roboto,"Segoe UI",Arial,sans-serif;color:#212529;font-size:17px;line-height:1.5;
  max-width:1000px;margin:80px auto 40px;background:#fff;border:1px solid #dfe3e6}
.cca *{box-sizing:border-box}
.cca-title{text-align:center;font-size:36px;font-weight:600;margin:0;padding:20px 12px 40px;border-bottom:1px solid #e6e9eb}
.cca-notice{padding:16px 24px;font-size:16px;border-bottom:1px solid #e6e9eb;margin:0}
.cca-sec{padding:6px 28px 26px;border-bottom:1px solid #e3e6e8}
.cca-h{font-size:28px;font-weight:600;margin:0 0 26px;padding:24px 8px 12px;border-bottom:2px solid #bfc3c7}
.cca-h.plain{font-weight:500;border-bottom:0;padding-bottom:4px;margin-bottom:14px}
.cca-lbl{font-size:17px;margin-right:6px;white-space:nowrap}
.cca-lbl small{color:#0d6efd;font-size:13px}

.cca-box{width:100%;border:1px solid #ced4da;border-radius:6px;padding:14px 16px;font:inherit;background:#fff}
.cca-box:focus,.cca-ta:focus{outline:0;border-color:#86b7fe;box-shadow:0 0 0 3px rgba(13,110,253,.15)}
.cca-box.err{border-color:#dc3545}

.u{border:0;border-bottom:2px solid #c4c8cc;background:transparent;font:inherit;padding:6px 6px;border-radius:0;min-width:0}
.u:focus{outline:0;border-bottom-color:#0d6efd}
.u.err{border-bottom-color:#dc3545}
.u[readonly]{color:#212529;font-weight:600;border-bottom-style:dashed}

.f{margin-bottom:28px}
.f-row{display:flex;flex-wrap:wrap;align-items:flex-end;gap:10px 8px}
.f-err{color:#dc3545;font-size:14px;margin-top:6px}

.pax{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px}
.pax .cca-box{width:300px;max-width:100%}
.pax-x{border:1px solid #dc3545;color:#dc3545;background:#fff;border-radius:50%;width:34px;height:34px;font-size:20px;line-height:1;cursor:pointer}
.pax-x:hover{background:#dc3545;color:#fff}
.btn-add{border:1px solid #28a745;color:#28a745;background:#fff;border-radius:6px;padding:9px 20px;font:inherit;cursor:pointer}
.btn-add:hover{background:#28a745;color:#fff}

.editor{border:1px solid #e3e6e8;border-radius:4px;background:#fff}
.editor-strip{height:22px;background:#fafbfb}
.editor-strip:first-child{border-bottom:1px solid #eceef0}
.editor-strip:last-child{border-top:1px solid #eceef0}
.cca-ta{display:block;width:100%;min-height:260px;border:0;padding:14px 16px;font:inherit;resize:vertical}

.radios{display:flex;flex-wrap:wrap;gap:8px 28px;margin-top:6px}
.radios label{display:inline-flex;align-items:center;gap:8px;cursor:pointer}
.radios input{width:20px;height:20px;accent-color:#0d6efd}

.auth{line-height:3;margin:0 0 8px}
.auth .u{margin:0 4px}
.auth-note{margin-top:8px}

.send{display:block;margin:28px auto 24px;background:#0d6efd;color:#fff;border:0;border-radius:8px;
  font:inherit;font-weight:700;font-size:19px;letter-spacing:.5px;padding:15px 64px;cursor:pointer}
.send:hover{background:#0b5ed7}
.send:disabled{opacity:.65;cursor:not-allowed}

.cca-status{margin:18px 28px 0;padding:14px 18px;border-radius:6px;font-size:16px}
.cca-status.ok{background:#d1e7dd;color:#0f5132}
.cca-status.bad{background:#f8d7da;color:#842029}

.terms{padding:8px 28px 34px;font-size:14px;color:#444}
.terms h3{font-size:24px;font-weight:600;color:#212529;margin:22px 0 12px}
.terms h4{font-size:16px;font-weight:600;color:#212529;margin:18px 0 6px}
.terms p{margin:0 0 10px}
.terms .b{padding-left:6px}

.overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:2000}
.overlay-card{background:#fff;border-radius:10px;padding:28px 40px;text-align:center}
.spin{width:34px;height:34px;border:4px solid #cfe0ff;border-top-color:#0d6efd;border-radius:50%;margin:0 auto 12px;animation:r .8s linear infinite}
@keyframes r{to{transform:rotate(360deg)}}

@media(max-width:640px){
  .cca{margin-top:70px;font-size:16px}
  .cca-title{font-size:26px;padding-bottom:26px}
  .cca-h{font-size:23px}
  .cca-sec{padding:4px 16px 22px}
  .f-row .u,.u.full{width:100%!important}
  .auth .u{width:100%!important;margin:0 0 6px}
  .auth{line-height:1.8}
  .terms{padding:8px 16px 28px}
}

.agree-wrap{padding:22px 28px 0;text-align:center}
.agree{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-size:17px}
.agree input{width:22px;height:22px;accent-color:#0d6efd}
.agree.err span{color:#dc3545}
.agree a{color:#0d6efd}

`;

/* ---------------------------------- Component --------------------------------- */

export default function CreditCardAuthForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [passengers, setPassengers] = useState([newPassenger()]);
    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // { ok: boolean, msg: string }
    const statusRef = useRef(null);

    const errors = useMemo(() => validate(form, passengers), [form, passengers]);
    const total = useMemo(() => (toAmount(form.price1) + toAmount(form.price2)).toFixed(2), [form.price1, form.price2]);
    const isAmex = form.cardType === 'AMEX';

    const show = (n) => ((touched[n] || submitted) && errors[n]) || '';
    const touch = (n) => () => setTouched((t) => (t[n] ? t : { ...t, [n]: true }));
    const cls = (base, n) => `${base}${show(n) ? ' err' : ''}`;

    const set = useCallback((n, v) => setForm((f) => ({ ...f, [n]: v })), []);
    const onChange = (e) => set(e.target.name, e.target.value);
    const onCheck = (e) => set(e.target.name, e.target.checked);
    const onDigits = (n, max) => (e) => set(n, digitsOnly(e.target.value).slice(0, max));
    const onAmount = (n) => (e) => {
        const v = e.target.value.replace(/[^\d.]/g, '');
        if ((v.match(/\./g) || []).length <= 1) set(n, v);
    };
    const onCardNo = (e) => {
        const digits = digitsOnly(e.target.value).slice(0, 16);
        const detected = detectCardType(digits);
        setForm((f) => ({ ...f, cardNo: digits, cardType: detected || f.cardType }));
    };

    const changePassenger = (id, name) => setPassengers((l) => l.map((p) => (p.id === id ? { ...p, name } : p)));
    const addPassenger = () => setPassengers((l) => [...l, newPassenger()]);
    const removePassenger = (id) => setPassengers((l) => l.filter((p) => p.id !== id));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setSubmitted(true);
        setStatus(null);

        if (Object.keys(errors).length) {
            setStatus({ ok: false, msg: 'Please fix the highlighted fields and try again.' });
            statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        const payload = {
            ref_no: form.bookingRefNo.trim(),
            cust_mail: form.toEmail.trim(),
            card_type: form.cardType,
            CC_holder: form.holderName.trim(),
            card_no: digitsOnly(form.cardNo),
            cvv: form.cvvNo,
            exp_MM: form.expMm,
            exp_YY: form.expYy,
            amount: `${toAmount(form.price1)}+${toAmount(form.price2)}=${total}`,
            billing_add: form.billAddress.trim(),
            cust_name: form.cnfName.trim(),
            cust_info: form.cnfCmpName.trim(),
            filespath: form.cnfDetail.trim(),
            cust_sign: form.sign.trim(),
            BillingEmail: form.billingEmail.trim(),
            pass_name_list: passengers.map((p) => p.name.trim()).filter(Boolean).join(','),
            website: WEBSITE,
            contact_no: form.mobNo.trim(),
            BookingDetails: [{ field1: form.bookingDetails.trim() }],
        };

        setIsLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();

            if (data === true) {
                setStatus({ ok: true, msg: 'Authorization mail sent to the customer.' });
                setForm(INITIAL_FORM); // wipe card data from memory
                setPassengers([newPassenger()]);
                setTouched({});
                setSubmitted(false);
            } else {
                setStatus({ ok: false, msg: 'Mail could not be sent. Please try again.' });
            }
        } catch {
        
            setStatus({ ok: false, msg: 'Network or server error. Please try again.' });
        } finally {
            setIsLoading(false);
            statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const authErrors = ['cnfName', 'cnfCmpName', 'amount', 'cnfDetail'].map(show).filter(Boolean);

    return (
        <div
            style={{
                backgroundImage: 'url(/cca/Banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                minHeight: '100vh',
            }}
        >
            <style>{CSS}</style>

            <form className="cca" onSubmit={handleSubmit} noValidate autoComplete="off">
                <h1 className="cca-title">Credit Card Authorization Form</h1>

                <p className="cca-notice">
                    Please complete all fields. Changes and cancellations are subject to airline policies. In the event of a
                    cancellation or refund, Standard fee may apply.
                </p>

                <div ref={statusRef}>
                    {status && (
                        <div className={`cca-status ${status.ok ? 'ok' : 'bad'}`} role={status.ok ? 'status' : 'alert'}>
                            {status.msg}
                        </div>
                    )}
                </div>

                {/* ---------------- Traveler Information ---------------- */}
                <section className="cca-sec">
                    <h2 className="cca-h">Traveler Information</h2>

                    <div className="f">
                        <input
                            name="bookingRefNo"
                            className={cls('cca-box', 'bookingRefNo')}
                            placeholder="Please Enter bookingRefNo"
                            aria-label="Booking reference number"
                            value={form.bookingRefNo}
                            onChange={onChange}
                            onBlur={touch('bookingRefNo')}
                        />
                        {show('bookingRefNo') && <div className="f-err">{show('bookingRefNo')}</div>}
                    </div>

                    <div className="f">
                        <input
                            name="toEmail"
                            type="email"
                            inputMode="email"
                            className={cls('cca-box', 'toEmail')}
                            placeholder="Please Enter Customer Email"
                            aria-label="Customer email"
                            value={form.toEmail}
                            onChange={onChange}
                            onBlur={touch('toEmail')}
                        />
                        {show('toEmail') && <div className="f-err">{show('toEmail')}</div>}
                    </div>

                    {passengers.map((p, i) => (
                        <div className="pax" key={p.id}>
                            <label className="cca-lbl" htmlFor={`pax-${p.id}`}>Passenger&apos;s Name</label>
                            <input
                                id={`pax-${p.id}`}
                                className="cca-box"
                                placeholder="Name"
                                value={p.name}
                                onChange={(e) => changePassenger(p.id, e.target.value)}
                                onBlur={touch('passengers')}
                            />
                            {i > 0 && (
                                <button type="button" className="pax-x" aria-label={`Remove passenger ${i + 1}`} onClick={() => removePassenger(p.id)}>
                                    &times;
                                </button>
                            )}
                        </div>
                    ))}
                    {show('passengers') && <div className="f-err" style={{ marginBottom: 10 }}>{show('passengers')}</div>}

                    <button type="button" className="btn-add" onClick={addPassenger}>Add More</button>
                </section>

                <section className="cca-sec">
                    <h2 className="cca-h plain">Booking Details</h2>
                    <div className="editor">
                        <div className="editor-strip" />
                        <textarea
                            name="bookingDetails"
                            className="cca-ta"
                            aria-label="Booking details"
                            rows={4}
                            value={form.bookingDetails}
                            onChange={onChange}
                        />
                        <div className="editor-strip" />
                    </div>
                </section>

                {/* ---------------- Credit card Information ---------------- */}
                <section className="cca-sec">
                    <h2 className="cca-h">Credit card Information</h2>

                    <div className="f">
                        <div className="cca-lbl">Card Type :</div>
                        <div className="radios">
                            {CARD_TYPES.map((t) => (
                                <label key={t}>
                                    <input
                                        type="radio"
                                        name="cardType"
                                        value={t}
                                        checked={form.cardType === t}
                                        onChange={onChange}
                                        onBlur={touch('cardType')}
                                    />
                                    {t}
                                </label>
                            ))}
                        </div>
                        {show('cardType') && <div className="f-err">{show('cardType')}</div>}
                    </div>

                    <div className="f">
                        <div className="f-row">
                            <label className="cca-lbl" htmlFor="holderName">
                                Cardholder Name <small>(as shown on card)</small>:
                            </label>
                            <input
                                id="holderName"
                                name="holderName"
                                autoComplete="cc-name"
                                className={cls('u', 'holderName')}
                                style={{ width: 320, maxWidth: '100%' }}
                                value={form.holderName}
                                onChange={onChange}
                                onBlur={touch('holderName')}
                            />
                        </div>
                        {show('holderName') && <div className="f-err">{show('holderName')}</div>}
                    </div>

                    <div className="f">
                        <div className="f-row">
                            <label className="cca-lbl" htmlFor="cardNo">Card Number:</label>
                            <input
                                id="cardNo"
                                inputMode="numeric"
                                autoComplete="cc-number"
                                className={cls('u', 'cardNo')}
                                style={{ width: 280, maxWidth: '100%', letterSpacing: 1 }}
                                value={formatCardNo(form.cardNo, isAmex)}
                                onChange={onCardNo}
                                onBlur={touch('cardNo')}
                            />
                        </div>
                        {show('cardNo') && <div className="f-err">{show('cardNo')}</div>}
                    </div>

                    <div className="f">
                        <div className="f-row">
                            <label className="cca-lbl" htmlFor="cvvNo">CVV Number:</label>
                            <input
                                id="cvvNo"
                                type="password"
                                inputMode="numeric"
                                autoComplete="cc-csc"
                                className={cls('u', 'cvvNo')}
                                style={{ width: 180, maxWidth: '100%' }}
                                value={form.cvvNo}
                                onChange={onDigits('cvvNo', isAmex ? 4 : 3)}
                                onBlur={touch('cvvNo')}
                            />
                        </div>
                        {show('cvvNo') && <div className="f-err">{show('cvvNo')}</div>}
                    </div>

                    <div className="f" style={{ marginBottom: 12 }}>
                        <div className="f-row">
                            <span className="cca-lbl">Expiration Date (MM/YY):</span>
                            <input
                                inputMode="numeric"
                                autoComplete="cc-exp-month"
                                placeholder="MM"
                                aria-label="Expiry month"
                                className={cls('u', 'exp')}
                                style={{ width: 64, textAlign: 'center' }}
                                value={form.expMm}
                                onChange={onDigits('expMm', 2)}
                                onBlur={touch('exp')}
                            />
                            <span>/</span>
                            <input
                                inputMode="numeric"
                                autoComplete="cc-exp-year"
                                placeholder="YY"
                                aria-label="Expiry year"
                                className={cls('u', 'exp')}
                                style={{ width: 64, textAlign: 'center' }}
                                value={form.expYy}
                                onChange={onDigits('expYy', 2)}
                                onBlur={touch('exp')}
                            />
                        </div>
                        {show('exp') && <div className="f-err">{show('exp')}</div>}
                    </div>
                </section>

                {/* ---------------- Billing Information ---------------- */}
                <section className="cca-sec">
                    <h2 className="cca-h">Billing Information</h2>

                    <div className="f">
                        <div className="f-row">
                            <label className="cca-lbl" htmlFor="billingEmail">Billing Email :</label>
                            <input
                                id="billingEmail"
                                name="billingEmail"
                                type="email"
                                inputMode="email"
                                className={cls('u', 'billingEmail')}
                                style={{ width: 340, maxWidth: '100%' }}
                                value={form.billingEmail}
                                onChange={onChange}
                                onBlur={touch('billingEmail')}
                            />
                        </div>
                        {show('billingEmail') && <div className="f-err">{show('billingEmail')}</div>}
                    </div>

                    <div className="f">
                        <div className="f-row">
                            <label className="cca-lbl" htmlFor="mobNo">Contact No:</label>
                            <input
                                id="mobNo"
                                type="tel"
                                inputMode="tel"
                                maxLength={15}
                                className={cls('u', 'mobNo')}
                                style={{ width: 260, maxWidth: '100%' }}
                                value={form.mobNo}
                                onChange={(e) => set('mobNo', e.target.value.replace(/[^\d+\-\s()]/g, ''))}
                                onBlur={touch('mobNo')}
                            />
                        </div>
                        {show('mobNo') && <div className="f-err">{show('mobNo')}</div>}
                    </div>

                    <div className="f" style={{ marginBottom: 12 }}>
                        <label className="cca-lbl" htmlFor="billAddress" style={{ display: 'block', marginBottom: 8 }}>Address:</label>
                        <textarea
                            id="billAddress"
                            name="billAddress"
                            rows={3}
                            autoComplete="street-address"
                            className={cls('cca-box', 'billAddress')}
                            value={form.billAddress}
                            onChange={onChange}
                            onBlur={touch('billAddress')}
                        />
                        {show('billAddress') && <div className="f-err">{show('billAddress')}</div>}
                    </div>
                </section>

                {/* ---------------- Authorization statement ---------------- */}
                <section className="cca-sec" style={{ paddingTop: 26 }}>
                    <p className="auth">
                        As per our telephonic conversation and as agreed I,
                        <input
                            name="cnfName"
                            aria-label="Customer name"
                            className={cls('u', 'cnfName')}
                            style={{ width: 200 }}
                            value={form.cnfName}
                            onChange={onChange}
                            onBlur={touch('cnfName')}
                        />
                        , authorize
                        <input
                            name="cnfCmpName"
                            aria-label="Company name"
                            className={cls('u', 'cnfCmpName')}
                            style={{ width: 220 }}
                            value={form.cnfCmpName}
                            onChange={onChange}
                            onBlur={touch('cnfCmpName')}
                        />
                        to charge my above card for USD
                        <input
                            inputMode="decimal"
                            aria-label="Amount 1"
                            className={cls('u', 'amount')}
                            style={{ width: 90 }}
                            value={form.price1}
                            onChange={onAmount('price1')}
                            onBlur={touch('amount')}
                        />
                        +
                        <input
                            inputMode="decimal"
                            aria-label="Amount 2"
                            className={cls('u', 'amount')}
                            style={{ width: 90 }}
                            value={form.price2}
                            onChange={onAmount('price2')}
                            onBlur={touch('amount')}
                        />
                        =
                        <input
                            readOnly
                            tabIndex={-1}
                            aria-label="Total amount (calculated)"
                            className="u"
                            style={{ width: 100 }}
                            value={total}
                        />
                        as per given details for
                        <input
                            name="cnfDetail"
                            aria-label="Charge details"
                            className={cls('u', 'cnfDetail')}
                            style={{ width: 260 }}
                            value={form.cnfDetail}
                            onChange={onChange}
                            onBlur={touch('cnfDetail')}
                        />
                        . I understand that this charge is non-refundable. (You may see above charges in split, however total remains
                        same) Booking purchased are non-transferable. Name changes are not permitted. Date/Route/Time change may in
                        occur penalty plus difference in fare.
                    </p>
                    {authErrors.map((m) => (
                        <div className="f-err" key={m}>{m}</div>
                    ))}

                    <div className="f-row" style={{ marginTop: 26 }}>
                        <label className="cca-lbl" htmlFor="sign">Customer Signature</label>
                        <input
                            id="sign"
                            name="sign"
                            className={cls('u full', 'sign')}
                            style={{ width: 320, maxWidth: '100%' }}
                            value={form.sign}
                            onChange={onChange}
                            onBlur={touch('sign')}
                        />
                    </div>
                    {show('sign') && <div className="f-err">{show('sign')}</div>}
                </section>

                <div className="agree-wrap">
                    <label className={`agree${show('agree') ? ' err' : ''}`}>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={onCheck}
                            onBlur={touch('agree')}
                        />
                        <span>
                            I agree to the <a href="#terms">Terms &amp; Conditions</a> and authorize this charge.
                        </span>
                    </label>
                    {show('agree') && <div className="f-err">{show('agree')}</div>}
                </div>

               <button type="submit" className="send" disabled={isLoading || !form.agree}>
                    {isLoading ? 'SENDING...' : 'SEND NOW'}
                </button>

                {/* ---------------- Terms & Conditions ---------------- */}
                <div className="terms">
                    <h3>Terms &amp; Conditions</h3>
                    {TERMS_INTRO.map((t, i) => (
                        <p key={i}>{t}</p>
                    ))}
                    {TERMS_SECTIONS.map((s) => (
                        <div key={s.title}>
                            <h4>{s.title}</h4>
                            {s.items?.map((t, i) => (
                                <p key={`i${i}`}>{t}</p>
                            ))}
                            {s.bullets?.map((t, i) => (
                                <p key={`b${i}`} className="b">• {t}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </form>

            {isLoading && (
                <div className="overlay" role="dialog" aria-modal="true" aria-label="Sending">
                    <div className="overlay-card">
                        <div className="spin" />
                        <div>Sending authorization mail...</div>
                    </div>
                </div>
            )}
        </div>
    );
}
