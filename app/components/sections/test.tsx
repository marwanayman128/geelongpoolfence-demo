import * as React from "react";

interface EmailTemplateProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    address: string;
    inspection: string;
    message: string;
  };
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ formData }) => (
  <div>
    <h1>Message from {formData.name}</h1>
    <p>
      <strong>Email:</strong> {formData.email}
    </p>
    <p>
      <strong>Phone:</strong> {formData.phone}
    </p>
    <p>
      <strong>Address:</strong> {formData.address}
    </p>
    <p>
      <strong>Inspection:</strong> {formData.inspection}
    </p>
    <p>
      <strong>Message:</strong> {formData.message}
    </p>
  </div>
);
