import "./cancellation.styles.scss";

function Cancellation() {
  return (
    <div className="section-pages">
      <p className="heading-section heading-section-big">
        Cancellation & Refund
      </p>
      <p className="section-page-para">
        At Startup Z, we strive to provide our users with the best possible
        experience on our platform. However, we understand that there may be
        situations where our users need to cancel their subscriptions or request
        a refund. This policy outlines our guidelines and procedures for
        cancellations and refunds.
      </p>

      <p className="community-list-heading">Cancellation Policy:</p>
      <ul className="community-list-item">
        <li>
          Users can cancel their subscription to our platform at any time by
          contacting our customer support team. Our team will guide them through
          the cancellation process and assist them with any questions or
          concerns they may have.
        </li>
        <li>
          If a user cancels their subscription before the end of the current
          billing cycle, they will not be charged for the following cycle.
          However, no refunds will be issued for any unused portion of the
          current billing cycle.
        </li>
        <li>
          If a user cancels their subscription after the start of the new
          billing cycle, they will be charged for that billing cycle and their
          subscription will remain active until the end of that cycle. No
          refunds will be issued for any unused portion of the current billing
          cycle.
        </li>
      </ul>

      <p className="community-list-heading">Refund Policy:</p>
      <ul className="community-list-item">
        <li>
          There is no refund provided once user purchases subscription for any
          period of time, once the cancellation is done users will not be
          charged for the next billing cycle.
        </li>
      </ul>

      <p className="community-list-heading">Exceptions:</p>
      <ul className="community-list-item">
        <li>
          In certain circumstances, we may make exceptions to our refund policy.
          These exceptions will be made on a case-by-case basis and will be at
          the discretion of our customer support team.
        </li>
        <li>
          In cases where there is a dispute between a user and a third-party
          service provider, we will not be responsible for issuing refunds.
          Users should contact the third-party service provider directly to
          resolve any issues related to their purchase.
        </li>
      </ul>
    </div>
  );
}

export default Cancellation;
