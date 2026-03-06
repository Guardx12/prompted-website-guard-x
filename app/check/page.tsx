
"use client";
import { useState } from "react";

type Step =
  | "intro"
  | "reviews"
  | "customers"
  | "insight"
  | "guardx"
  | "benefits"
  | "trial"
  | "price"
  | "cta"
  | "form"
  | "done";

export default function Page(){
  const [step,setStep]=useState<Step>("intro");
  const [form,setForm]=useState({
    businessName:"",
    email:"",
    website:"",
    address:"",
    city:"",
    postcode:"",
    method:"Email + SMS"
  });

  function next(s:Step){ setStep(s); }

  return (
  <div style={{maxWidth:720,margin:"40px auto",fontFamily:"system-ui"}}>
    {step==="intro" && (
      <div>
        <h2>Quick question</h2>
        <p>
        When customers find your business on Google they usually compare a few local businesses.
        Do you feel your business stands out as the most trusted option when they do that?
        </p>
        <button onClick={()=>next("reviews")}>Yes</button>
        <button onClick={()=>next("reviews")}>Not always</button>
        <button onClick={()=>next("reviews")}>Not sure</button>
      </div>
    )}

    {step==="reviews" && (
      <div>
        <h3>Roughly how many Google reviews do you have?</h3>
        <button onClick={()=>next("customers")}>0‑20</button>
        <button onClick={()=>next("customers")}>20‑50</button>
        <button onClick={()=>next("customers")}>50‑100</button>
        <button onClick={()=>next("customers")}>100+</button>
        <button onClick={()=>next("customers")}>Not sure</button>
      </div>
    )}

    {step==="customers" && (
      <div>
        <h3>Roughly how many customers do you serve each month?</h3>
        <button onClick={()=>next("insight")}>1‑25</button>
        <button onClick={()=>next("insight")}>25‑50</button>
        <button onClick={()=>next("insight")}>50‑100</button>
        <button onClick={()=>next("insight")}>100+</button>
      </div>
    )}

    {step==="insight" && (
      <div>
        <p>
        When people search on Google they usually compare 3‑4 businesses.
        The ones with the most recent reviews and active responses often appear
        more trusted and tend to get the enquiry first.
        </p>
        <p>
        Even if 100 customers search in a month, losing just a small portion
        because competitors look more active could mean missed enquiries.
        </p>
        <button onClick={()=>next("guardx")}>Continue</button>
      </div>
    )}

    {step==="guardx" && (
      <div>
        <h3>Introducing GuardX</h3>
        <p>
        GuardX is a fully managed Google review system designed to keep your
        business looking active, trusted and competitive.
        </p>
        <button onClick={()=>next("benefits")}>Continue</button>
      </div>
    )}

    {step==="benefits" && (
      <div>
        <p>With GuardX we help you:</p>
        <ul>
          <li>Generate genuine Google reviews</li>
          <li>Send branded review requests to customers</li>
          <li>Reply to reviews on your behalf</li>
          <li>Keep your profile active and professional</li>
        </ul>
        <button onClick={()=>next("trial")}>Continue</button>
      </div>
    )}

    {step==="trial" && (
      <div>
        <h3>30‑Day Free Trial</h3>
        <p>
        You can try the full system completely free for 30 days
        to see how it works for your business.
        </p>
        <button onClick={()=>next("price")}>Continue</button>
      </div>
    )}

    {step==="price" && (
      <div>
        <p>
        After the trial, most businesses invest about <strong>£25 per week</strong>
        for the fully managed system.
        </p>
        <button onClick={()=>next("cta")}>Continue</button>
      </div>
    )}

    {step==="cta" && (
      <div>
        <h3>Ready to start your 30‑day free trial?</h3>
        <button onClick={()=>next("form")}>Start Free Trial</button>
      </div>
    )}

    {step==="form" && (
      <form action="/api/contact" method="POST">
        <h3>Setup details</h3>

        <input name="businessName" placeholder="Business name"
          value={form.businessName}
          onChange={e=>setForm({...form,businessName:e.target.value})}/>

        <input name="email" placeholder="Business email"
          value={form.email}
          onChange={e=>setForm({...form,email:e.target.value})}/>

        <input name="website" placeholder="Website URL"
          value={form.website}
          onChange={e=>setForm({...form,website:e.target.value})}/>

        <input name="address" placeholder="Street address"
          value={form.address}
          onChange={e=>setForm({...form,address:e.target.value})}/>

        <input name="city" placeholder="City"
          value={form.city}
          onChange={e=>setForm({...form,city:e.target.value})}/>

        <input name="postcode" placeholder="Postcode"
          value={form.postcode}
          onChange={e=>setForm({...form,postcode:e.target.value})}/>

        <select name="method">
          <option>Email + SMS</option>
          <option>SMS only</option>
          <option>Email only</option>
          <option>Not sure yet</option>
        </select>

        <button type="submit">Start 30‑Day Free Trial</button>
      </form>
    )}

    {step==="done" && (
      <p>Thanks — we'll contact you shortly.</p>
    )}
  </div>
  );
}
