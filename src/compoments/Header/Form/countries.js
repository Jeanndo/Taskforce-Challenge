import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export const Countries = ()=>{
  const [selected, setSelected] = useState('');
   return(
     <ReactFlagsSelect
      selected={selected}
      onSelect={code => setSelected(code)}
     />

   )
}


// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js