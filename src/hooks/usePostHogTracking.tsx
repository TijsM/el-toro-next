import { usePostHog } from "posthog-js/react";

export const usePostHogTracking = () => {
  const posthog = usePostHog();

  const trackButtonClick = (
    buttonName: string,
    additionalProperties?: Record<string, any>
  ) => {
    // console.log("button_clicked", buttonName, additionalProperties);
    posthog?.capture("button_clicked", {
      button_name: buttonName,
      ...additionalProperties,
    });
  };

  const trackInputChange = (
    inputName: string,
    inputType: string,
    additionalProperties?: Record<string, any>
  ) => {
    // console.log("input_changed", inputName, inputType, additionalProperties);
    posthog?.capture("input_changed", {
      input_name: inputName,
      input_type: inputType,
      ...additionalProperties,
    });
  };

  const trackFormSubmission = (
    formName: string,
    additionalProperties?: Record<string, any>
  ) => {
    // console.log("form_submitted", formName, additionalProperties);
    posthog?.capture("form_submitted", {
      form_name: formName,
      ...additionalProperties,
    });
  };

  return {
    trackButtonClick,
    trackInputChange,
    trackFormSubmission,
  };
};
