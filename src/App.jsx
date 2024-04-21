import { useState } from "react";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import botLogo from "./assets/bot-logo.png";
import uploadFileIcon from "./assets/uploadFileIcon.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <span className="brand">Counsel.ai</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query currentChat">
              <img src={msgIcon} alt="Query" className="msgIcon" />
              Indian trademark
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" className="msgIcon" />
              Rent regulations
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              What are the legal requirements for obtaining a trademark
              registration in India?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={botLogo} alt="" />
            <p className="txt">
              To obtain a trademark registration in India, several key legal
              requirements must be fulfilled.
              <br />
              <br /> Firstly, the trademark must be capable of being represented
              graphically and must be distinctive in nature, meaning it should
              not be generic or descriptive of the goods or services it
              represents. Additionally, the trademark must not be identical or
              similar to any existing trademarks in the same class of goods or
              services.
              <br />
              <br /> Secondly, the applicant must determine the class or classes
              of goods or services for which the trademark will be used and file
              the application accordingly under the appropriate classes as per
              the Nice Classification system.
              <br />
              <br /> Thirdly, the applicant must conduct a comprehensive
              trademark search to ensure that the proposed trademark is not
              already registered or pending registration for similar goods or
              services. This search helps in avoiding potential conflicts with
              existing trademarks and strengthens the chances of successful
              registration.
              <br />
              <br /> Fourthly, the application must be filed with the Trademarks
              Registry office either electronically or through physical
              submission, along with the prescribed fees. The application should
              include details such as the name and address of the applicant, a
              clear representation of the trademark, a list of goods or services
              covered by the trademark, and any priority claims if applicable.
              <br />
              <br /> Fifthly, after filing the application, it undergoes a
              formal examination by the Trademarks Registry to ensure compliance
              with all legal requirements. If any deficiencies are found, the
              applicant is given an opportunity to rectify them within the
              stipulated time.
              <br />
              <br /> Sixthly, if the trademark application meets all the
              requirements and no objections are raised during examination, it
              is published in the Trademarks Journal for public notice. During
              this period, third parties have an opportunity to oppose the
              registration if they believe it infringes on their existing
              rights.
              <br />
              <br /> Seventhly, if no oppositions are filed within the specified
              period or if any oppositions are successfully overcome, the
              trademark proceeds to registration. The Registrar issues a
              Certificate of Registration, granting exclusive rights to use the
              trademark in connection with the specified goods or services for a
              period of ten years, renewable indefinitely upon payment of
              renewal fees.
              <br />
              <br /> Overall, obtaining a trademark registration in India
              involves a systematic process that requires careful consideration
              of legal requirements, diligent preparation of the application,
              and compliance with procedural formalities. Seeking guidance from
              a qualified trademark attorney can be invaluable in navigating
              this process effectively and securing robust protection for your
              intellectual property rights.
              <br />
            </p>
          </div>
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              What are the responsibilities of landlords and tenants regarding
              rent in India?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={botLogo} alt="" />
            <p className="txt">
              In India, the relationship between landlords and tenants is
              governed by various laws and regulations, including the Rent
              Control Acts enacted by different states. The rights and
              responsibilities of both parties regarding rent are outlined as
              follows:
              <br />
              <br />
              1. Rent Payment: Tenants are obligated to pay rent to the landlord
              within the specified time frame as mentioned in the rental
              agreement. Landlords, in turn, are responsible for providing
              tenants with a receipt for the rent paid.
              <br />
              <br />
              2. Rent Increase: Landlords can only increase the rent after
              providing proper notice as per the terms of the rental agreement
              or as stipulated by local rent control laws. Tenants have the
              right to challenge unreasonable rent increases.
              <br />
              <br />
              3. Security Deposit: Landlords may require tenants to pay a
              security deposit, which should be refunded to the tenant upon the
              termination of the lease, subject to deductions for any damages or
              outstanding rent.
              <br />
              <br />
              4. Maintenance and Repairs: Landlords are responsible for
              maintaining the rented premises in a habitable condition and
              making necessary repairs. However, tenants are also expected to
              maintain the property in a reasonable manner and report any
              damages or maintenance issues to the landlord in a timely manner.
              <br />
              <br />
              5. Eviction: Landlords can initiate eviction proceedings against
              tenants for non-payment of rent, violation of terms of the rental
              agreement, or other valid reasons as per the law. However,
              landlords must follow the legal process for eviction, which
              typically involves providing notice to the tenant and obtaining a
              court order.
              <br />
              <br />
              6. Subletting: Tenants may not sublet the rented premises without
              the landlord's consent, unless otherwise specified in the rental
              agreement.
              <br />
              <br />
              7. Legal Recourse: Both landlords and tenants have the right to
              seek legal recourse in case of disputes related to rent, eviction,
              or other tenancy issues. This may involve filing a complaint with
              the appropriate Rent Control Authority or seeking redressal
              through civil courts.
              <br />
              <br />
              It's essential for both landlords and tenants to familiarize
              themselves with the relevant laws and regulations governing rent
              and tenancy in their respective states to ensure a fair and lawful
              rental arrangement. Consulting with a legal professional can also
              provide clarity on specific rights and obligations under the law.
              <br />
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <button className="uploadFileBtn">
              <img src={uploadFileIcon} alt="" />
            </button>
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            The answers provided by Counsel.ai is only for immediate reference.
            Please contact an authorised lawyer for more accurate information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
