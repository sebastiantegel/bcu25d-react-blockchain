export const ConditionalBasic = () => {
  const age = 46;

  // Alternativ 1: Mest lättläst
  //   if (age <= 46) {
  //     return <>Du är ung</>;
  //   } else {
  //     return <>Du är gammal</>;
  //   }

  // Alternativ 2: Lite krångligare
  let html = <div>Du är gammal</div>;
  if (age <= 46) {
    html = <div>Du är ung</div>;
  }

  return html;
};
