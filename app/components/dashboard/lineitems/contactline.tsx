"use client";

import SubContacts from "./subcontacts";

const Contacts = () => {
  return (
    <div className="w-full gap-1 mt-5" >
      <p className="w-full h-5 font-sans text-base font-normal leading-5 text-left">
      Contacts
      </p>
      <SubContacts className="mt-4" icon="/female1.png" notification={'Andy lane'} /> 
      <SubContacts className="mt-4" icon="/kanu.png" notification={'Drew Cano'} /> 
      <SubContacts className="mt-4" icon="/andylane.png" notification={'Andy Lane'} /> 
      <SubContacts className="pt-4" icon="/koray.png" notification={'koray Okumus'}  /> 
      <SubContacts className="pt-4" icon="/kate.png" notification={'Kate Morision'} />
      {/* <SubContacts className="pt-4 " icon="/melody.png" notification={'Melody Macyy'} /> */}
    </div>
  );
};

export default Contacts;
