import React from "react";
import "./DeliveryMap.css";

function DeliveryMap() {
  const DeliveryMap = [
    {
      name: "Order Processing",
      text: "Once a customer places an order, the seller needs to process it. This includes verifying the order details, checking product availability, and confirming payment.",
      logo: "fa-solid fa-gear",
    },
    {
      name: "Packaging",
      text: "After processing the order, the seller prepares the products for shipping by packaging them securely. Proper packaging helps ensure that the items reach the buyer in good condition.",
      logo: "fa-solid fa-box-open",
    },
    {
      name: "Labeling",
      text: "Attach a shipping label to the package. This label includes the buyer's address, shipping method, and any other relevant details. Make sure to clearly indicate the sender's (seller's) return address as well.",
      logo: "fa-solid fa-store",
    },
    {
      name: "Choosing a Carrier",
      text: "Select a shipping carrier or courier service based on the shipping method chosen by the buyer. Factors such as cost, speed, and reliability can influence this decision.",
      logo: "fa-solid fa-truck",
    },
    {
      name: "Shipping",
      text: "Hand over the packaged items to the chosen carrier for transportation. The carrier will then take care of the actual delivery.",
      logo: "fa-solid fa-truck-fast",
    },
    {
      name: "Tracking",
      text: "Provide the buyer with a tracking number if available. This allows them to monitor the progress of their shipment and estimate the delivery date.",
      logo: "fa-solid fa-map-location-dot",
    },
    {
      name: "Delivery Confirmation",
      text: "Once the carrier delivers the package to the buyer, there should be a confirmation of delivery. Some carriers provide electronic proof of delivery, while others may require a signature.",
      logo: "fa-solid fa-people-carry-box",
    },
    {
      name: "Customer Communication",
      text: "Keep the buyer informed about the status of their order. Send shipping confirmation emails or messages, and provide any relevant tracking information.",
      logo: "fa-solid fa-people-arrows",
    },
    {
      name: "Handling Issues",
      text: "If any issues arise during shipping or if the buyer reports a problem with the delivered items, address these promptly and work towards a resolution. This may involve coordinating with the shipping carrier.",
      logo: "fa-solid fa-brain",
    },
    {
      name: "Returns and Refunds",
      text: "Establish a clear policy for returns and refunds. If the buyer needs to return the items, provide instructions on how to do so, and process refunds in a timely manner.",
      logo: "fa-solid fa-truck-ramp-box",
    },
  ];
  return (
    <div className="DeliveryMap" data-aos="fade-up">
      <div className="container">
        {DeliveryMap.map((item, index) => (
          <>
            <div
              className={index % 2 === 0 ? "map left" : "map right"}
              key={index}
            >
              <div className="logo">
                <i className={item.logo}></i>
                <h2>{item.name}</h2>
              </div>
              <p>{item.text}</p>
            </div>
            <div className="clear"></div>
          </>
        ))}
      </div>
    </div>
  );
}
export default DeliveryMap;
