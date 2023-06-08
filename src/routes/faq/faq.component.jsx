import "./faq.styles.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <div className="section-pages">
      <p className="heading-section heading-section-big">Startup FAQs</p>

      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What kind of businesses can list on Startup Z?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Startup Z is an online platform that allows startups to create
              profiles and connect with investors. While the platform is
              primarily designed for startups and early-stage companies, it is
              open to businesses from a wide range of industries and sectors.
              Any company that is seeking funding, networking, mentorship,
              corporate credits, business collaborations can create a profile on
              the platform.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does it take to get my business listed on Startup Z?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The time it takes to get your business listed on Startup Z can
              vary depending on several factors, such as the completeness of
              your application, the verification process. In general, Startup Z
              aims to review and approve applications within 24 hours. However,
              this timeline may be longer if there are issues with the
              application or additional information is required. Once your
              application is approved, your business will be listed on the
              platform.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does it take to get my business listed on Startup Z?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The time it takes to get your business listed on Startup Z can
              vary depending on several factors, such as the completeness of
              your application, the verification process. In general, Startup Z
              aims to review and approve applications within 24 hours. However,
              this timeline may be longer if there are issues with the
              application or additional information is required. Once your
              application is approved, your business will be listed on the
              platform.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does it take to get my business listed on Startup Z?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The time it takes to get your business listed on Startup Z can
              vary depending on several factors, such as the completeness of
              your application, the verification process. In general, Startup Z
              aims to review and approve applications within 24 hours. However,
              this timeline may be longer if there are issues with the
              application or additional information is required. Once your
              application is approved, your business will be listed on the
              platform.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
