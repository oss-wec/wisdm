<template lang="html">

  <div class="modal" :class="{ 'is-active': visible }">
    <div class="modal-background"></div>

    <div class="modal-card">

      <header class="modal-card-head">
        <p class="modal-card-title md-title">Select Data Entry Modules</p>
        <span class="tag is-light">
          Back To Form
          <button class="delete is-small" @click="toggle()"></button>
        </span>
      </header>

      <section class="modal-card-body">
        <div class="columns is-mobile is-multiline">

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('marks')" :class="{ selected: moduleSelection.marks }">
              <svg class="icon">
                <use xlink:href="#tool" />
              </svg>
              <h2 class="is-size-4">Marks</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('devices')" :class="{ selected: moduleSelection.devices }">
              <svg class="icon">
                <use xlink:href="#worldwide" />
              </svg>
              <h2 class="is-size-4">Devices</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('biometrics')" :class="{ selected: moduleSelection.biometrics }">
              <svg class="icon">
                <use xlink:href="#construction" />
              </svg>
              <h2 class="is-size-4">Biometrics</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('vitals')" :class="{ selected: moduleSelection.vitals }">
              <svg class="icon">
                <use xlink:href="#stethoscope" />
              </svg>
              <h2 class="is-size-4">Vitals</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('samples')" :class="{ selected: moduleSelection.samples }">
              <svg class="icon">
                <use xlink:href="#blood-test" />
              </svg>
              <h2 class="is-size-4">Samples</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('injuries')" :class="{ selected: moduleSelection.injuries }">
              <svg class="icon">
                <use xlink:href="#bandage" />
              </svg>
              <h2 class="is-size-4">Injuries</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('medications')" :class="{ selected: moduleSelection.medications }">
              <svg class="icon">
                <use xlink:href="#syringe" />
              </svg>
              <h2 class="is-size-4">Medications</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('mortality')" :class="{ selected: moduleSelection.mortality }">
              <svg class="icon">
                <use xlink:href="#warning" />
              </svg>
              <h2 class="is-size-4">Mortality</h2>
            </div>
          </div>

          <div class="column is-4 has-text-centered">
            <div class="module-selector hoverable" @click="selectModule('necropsy')" :class="{ selected: moduleSelection.necropsy }">
              <svg class="icon">
                <use xlink:href="#scalpel" />
              </svg>
              <h2 class="is-size-4">Necropsy</h2>
            </div>
          </div>
        </div>

        <section class="section">
          <h3 class="md-title is-size-4">Common Form Configurations</h3>
          <ul>
            <li class="config"><a @click="configForm('bigGameCapture')">Big Game Capture</a></li>
            <li class="config"><a @click="configForm('incidentalObs')">Indcidental Observation</a></li>
            <li class="config"><a @click="configForm('droppedCollar')">Dropped Collar</a></li>
          </ul>
        </section>
      
      </section>
      
      <footer class="modal-card-foot">
        <p>Select a module by clicking on its icon</p>
      </footer>
    
    </div>

    <div class="svg-pack">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="construction" viewBox="0 0 511.787 511.787"><title>construction</title><path d="M505.027,408.173L103.107,6.253c-9.387-9.387-26.453-9.387-35.84,0L6.68,66.84c-10.24,9.387-10.24,25.6,0,35.84 L24.6,120.6l0,0l0,0l48.64,48.64c0,0,0,0,0,0s0,0,0,0l47.786,47.786c0,0,0,0,0,0s0,0,0,0l24.746,24.746c0,0,0,0,0,0c0,0,0,0,0,0 l23.893,23.893c0,0,0,0,0,0c0,0,0,0,0,0l23.893,23.893c0,0,0,0,0,0s0,0,0,0l72.532,72.532c0,0,0,0,0,0c0,0,0,0,0.001,0.001 l23.892,23.892c0,0,0,0,0,0c0,0,0,0,0.001,0.001L408.6,504.6c4.267,4.267,9.387,5.973,14.507,5.973s10.24-1.707,13.653-5.973 l68.267-68.267C512.707,428.653,512.707,415.853,505.027,408.173z M493.08,424.387l-68.267,68.267 c-1.707,1.707-2.56,1.707-4.267,0l-88.32-88.32l30.293-30.293c3.413-3.413,3.413-8.533,0-11.947 c-3.413-3.413-8.533-3.413-11.947,0l-30.293,30.293l-12.373-12.373l17.92-17.92c3.413-3.413,3.413-8.533,0-11.947 c-3.413-3.413-8.533-3.413-11.947,0l-17.92,17.92l-11.947-11.947l29.867-29.867c3.413-3.413,3.413-8.533,0-11.947 c-3.413-3.413-8.533-3.413-11.947,0l-29.867,29.867l-11.947-11.947l17.92-17.92c3.413-3.413,3.413-8.533,0-11.947 s-8.533-3.413-11.947,0l-17.92,17.92L235.8,307.907l30.293-30.293c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0 l-30.293,30.293l-12.373-12.373l17.92-17.92c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-17.92,17.92 l-11.947-11.947l29.867-29.867c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-29.867,29.867L163.693,235.8 l17.92-17.92c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-17.92,17.92l-12.8-12.8l29.867-29.867 c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0L127,199.107l-11.947-11.947l17.92-17.92 c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-17.92,17.92L91.16,163.267l29.867-29.867 c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0L79.213,151.32L66.84,138.947L85.187,120.6 c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0L54.893,127L42.52,114.627L72.387,84.76 c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0L30.573,102.68L18.627,90.733c-1.707-1.707-2.56-3.413-2.56-5.973 c0-2.56,0.853-4.267,2.56-5.973L79.213,18.2c1.707-1.707,3.413-2.56,5.973-2.56s4.267,0.853,5.973,2.56l401.92,401.92 C493.933,420.973,493.933,423.533,493.08,424.387z"/><path d="M399.213,397.933c-13.653,12.8-13.653,34.133,0,47.787c6.827,6.827,15.36,10.24,23.893,10.24s17.067-2.56,23.893-10.24 c13.653-12.8,12.8-34.133,0-47.787C434.2,384.28,412.867,385.133,399.213,397.933z M435.053,434.627 c-6.827,6.827-17.067,6.827-23.893,0s-6.827-17.067,0-23.893c3.413-3.413,7.68-5.12,11.947-5.12s8.533,1.707,11.947,5.12 C441.88,417.56,441.88,427.8,435.053,434.627z"/></symbol><symbol id="tool" viewBox="0 0 516.375 516.375"><title>tool</title><path d="M162.562,76.5c-26.775,0-47.812,21.038-47.812,47.812s21.038,47.812,47.812,47.812s47.812-21.038,47.812-47.812 S189.337,76.5,162.562,76.5z M162.562,153c-15.3,0-28.688-13.388-28.688-28.688s13.388-28.688,28.688-28.688 s28.688,13.388,28.688,28.688S177.862,153,162.562,153z"/><path d="M504.9,275.4L248.625,19.125h-153c-13.388,0-26.775,7.65-32.513,19.125H38.25C17.212,38.25,0,55.462,0,76.5v153 l256.275,256.275c15.3,15.3,40.162,15.3,53.55,0l13.388-13.388c15.3,7.649,32.512,5.737,43.987-5.737l137.7-137.7 C520.2,313.65,520.2,290.7,504.9,275.4z M296.438,472.388c-7.65,7.649-19.125,7.649-26.775,0L19.125,219.938V76.5 c0-11.475,9.562-19.125,19.125-19.125h19.125v153l250.537,250.537L296.438,472.388z M491.513,315.562l-137.7,137.7 c-7.65,7.649-19.125,7.649-26.775,0L76.5,200.812V57.375c0-11.475,9.562-19.125,19.125-19.125h143.438l252.45,250.537 C499.162,294.525,499.162,307.912,491.513,315.562z"/></symbol><symbol id="worldwide" viewBox="0 0 512 512"><title>worldwide</title><g> <g> <path d="M472.318,205.163h-19.816c-13.125-37.176-36.317-69.637-66.295-94.089v-1.36h-1.688 c-36.318-29.015-82.321-46.39-132.314-46.39c-5.451,0-10.926,0.227-16.363,0.641c-3.451-22.607-23.024-39.981-46.58-39.981 c-25.983,0-47.12,21.138-47.12,47.12c0,5.621,2.061,12.521,5.262,19.851c-28.984,16.482-53.799,39.67-72.268,67.52H39.685v15.562 h26.042c-5.465,10.013-10.097,20.42-13.86,31.125H39.685v15.562h7.372c-4.755,17.801-7.198,36.257-7.198,54.944 c0,35.083,8.559,68.2,23.688,97.388v5.366h2.885c9.525,17.152,21.35,32.856,35.066,46.687H63.547v15.562h54.987v-0.141 c36.526,29.672,83.054,47.484,133.671,47.484c50.769,0,97.426-17.917,134.001-47.75v0.408h62.249V425.11h-45.545 c13.716-13.831,25.541-29.535,35.066-46.687h10.479v-15.562h-2.64c12.033-26.616,18.736-56.135,18.736-87.191 c0-2.767-0.071-5.516-0.175-8.257h7.943V251.85h-9.11c-1.192-10.63-3.171-21.025-5.878-31.125h14.99V205.163z M189.261,39.547 c17.401,0,31.558,14.158,31.558,31.558c0,12.013-17.442,39.248-31.558,58.093c-14.116-18.845-31.558-46.08-31.558-58.093 C157.703,53.704,171.859,39.547,189.261,39.547z M197.216,165.519c0,4.386-3.568,7.954-7.954,7.954s-7.954-3.568-7.954-7.954 s3.568-7.954,7.954-7.954S197.216,161.132,197.216,165.519z M428.58,362.86h-42.375v15.562h33.758 c-34.649,56.362-96.884,94.029-167.758,94.029c-19.188,0-37.74-2.773-55.287-7.918h31.589v-15.562h-69.446 c-30.646-16.538-56.43-40.967-74.616-70.549h56.913V362.86H75.828c-12.032-24.24-19.208-51.292-20.257-79.886h15.239v-15.562H55.6 c1.376-33.073,10.995-65.122,28.066-93.374h57.693v-15.562H94.123c16.194-21.805,36.766-40.097,60.323-53.61 c9.138,16.156,20.905,31.866,26.256,38.756c-6.589,2.585-11.739,8.056-13.877,14.854h-17.165v15.562h17.689 c3.421,8.767,11.95,14.998,21.913,14.998c12.968,0,23.517-10.55,23.517-23.517c0-9.947-6.211-18.466-14.956-21.897 c8.241-10.612,31.707-42.147,37.336-64.007c5.653-0.484,11.366-0.729,17.047-0.729c38.849,0,75.102,11.319,105.64,30.828H338.48 v15.562h40.476c37.069,31.293,62.455,76.004,68.584,126.573h-68.16c-8.196-13.927-23.335-23.301-40.632-23.301 c-17.296,0-32.436,9.374-40.632,23.301h-172.32v15.562h166.572c-0.476,2.683-0.74,5.44-0.74,8.257 c0,21.152,29.169,60.422,38.56,72.517c-8.745,3.431-14.956,11.95-14.956,21.897c0,12.968,10.549,23.517,23.517,23.517 c10.031,0,18.61-6.315,21.984-15.177h18.209V362.86h-17.815c-2.172-6.715-7.286-12.113-13.817-14.674 c9.391-12.095,38.56-51.365,38.56-72.517c0-2.818-0.263-5.574-0.74-8.257h63.669c0.114,2.74,0.186,5.49,0.186,8.257 C448.986,306.961,441.631,336.565,428.58,362.86z M338.75,333.763c-14.117-18.845-31.558-46.081-31.558-58.093 c0-17.402,14.158-31.558,31.558-31.558c17.401,0,31.558,14.156,31.558,31.558C370.309,287.683,352.866,314.918,338.75,333.763z M346.705,370.084c0,4.386-3.568,7.954-7.954,7.954c-4.386,0-7.954-3.568-7.954-7.954c0-4.388,3.568-7.955,7.954-7.955 C343.137,362.129,346.705,365.697,346.705,370.084z"/> </g> </g><g> <g> <path d="M189.261,47.589c-12.968,0-23.517,10.55-23.517,23.517c0,12.968,10.549,23.517,23.517,23.517s23.517-10.55,23.517-23.517 S202.229,47.589,189.261,47.589z M189.261,79.06c-4.386,0-7.954-3.569-7.954-7.954c0-4.386,3.568-7.954,7.954-7.954 s7.954,3.568,7.954,7.954S193.648,79.06,189.261,79.06z"/> </g> </g><g> <g> <path d="M338.75,252.152c-12.967,0-23.517,10.549-23.517,23.517s10.549,23.517,23.517,23.517 c12.968,0,23.517-10.549,23.517-23.517C362.267,262.702,351.718,252.152,338.75,252.152z M338.75,283.623 c-4.386,0-7.954-3.568-7.954-7.954s3.568-7.954,7.954-7.954c4.387,0,7.954,3.568,7.954,7.954 C346.705,280.055,343.136,283.623,338.75,283.623z"/> </g> </g><g> <g> <path d="M31.385,173.3v-15.562C14.785,157.739,0,171.817,0,189.123c0,17.306,14.785,31.385,31.385,31.385v-15.562 c-8.3,0-15.823-7.098-15.823-15.823C15.562,180.398,23.085,173.3,31.385,173.3z"/> </g> </g><g> <g> <path d="M55.247,377.864v-15.562c-21.787,0-39.253,17.609-39.253,39.252c0,21.644,17.466,39.253,39.253,39.253v-15.562 c-12.45,0-23.691-10.628-23.691-23.691S42.797,377.864,55.247,377.864z"/> </g> </g><g> <g> <path d="M149.658,315.095v15.562c9.337,0,15.822,7.097,15.822,15.822c0,8.725-6.484,15.823-15.822,15.823v15.562 c17.637,0,31.384-14.079,31.384-31.385C181.042,329.174,167.296,315.095,149.658,315.095z"/> </g> </g><g> <g> <path d="M118.534,267.714v-15.562c-21.787,0-39.252,17.609-39.252,39.252c0,21.644,17.465,39.252,39.252,39.252v-15.562 c-13.487,0-23.69-10.628-23.69-23.69C94.844,278.342,105.046,267.714,118.534,267.714z"/> </g> </g><g> <g> <path d="M480.616,204.945v15.562c8.3,0,15.822,7.097,15.822,15.823c0,8.725-7.522,15.823-15.822,15.823v15.562 c16.6,0,31.384-14.079,31.384-31.385C512,219.024,497.216,204.945,480.616,204.945z"/> </g> </g><g> <g> <path d="M456.754,362.302v15.562c13.487,0,23.69,10.627,23.69,23.69c0,13.063-10.203,23.691-23.69,23.691v15.562 c21.787,0,39.252-17.609,39.252-39.253C496.006,379.911,478.541,362.302,456.754,362.302z"/> </g> </g><g> <g> <rect x="259.631" y="109.714" width="63.287" height="15.562"/> </g> </g><g> <g> <rect x="236.806" y="158.475" width="117.236" height="15.562"/> </g> </g><g> <g> <rect x="110.233" y="205.162" width="133.836" height="15.562"/> </g> </g><g> <g> <rect x="267.931" y="205.162" width="23.862" height="15.562"/> </g> </g><g> <g> <rect x="363.379" y="205.162" width="38.387" height="15.562"/> </g> </g><g> <g> <rect x="141.357" y="282.974" width="102.711" height="15.562"/> </g> </g><g> <g> <rect x="228.506" y="330.698" width="54.987" height="15.562"/> </g> </g><g> <g> <rect x="181.819" y="362.86" width="31.125" height="15.562"/> </g> </g><g> <g> <rect x="190.119" y="417.847" width="140.061" height="15.562"/> </g> </g><g> <g> <rect x="125.795" y="315.136" width="15.562" height="15.562"/> </g> </g></symbol><symbol id="blood-test" viewBox="0 0 512 512"><title>blood-test</title><g> <g> <path d="M0,456.355v39.723h512v-39.723H0z M496.292,480.37H15.708v-8.306h480.583V480.37z"/> </g> </g><g> <g> <polygon points="16.232,232.7 16.232,448.43 31.941,448.43 31.941,248.408 56.027,248.408 56.027,232.7 "/> </g> </g><g> <g> <polygon points="456.07,232.7 456.07,248.408 480.157,248.408 480.157,448.43 495.865,448.43 495.865,232.7 "/> </g> </g><g> <g> <rect x="111.53" y="320.663" width="16.756" height="15.709"/> </g> </g><g> <g> <rect x="135.617" y="320.663" width="16.756" height="15.709"/> </g> </g><g> <g> <rect x="383.811" y="320.663" width="16.756" height="15.709"/> </g> </g><g> <g> <rect x="359.725" y="320.663" width="16.756" height="15.709"/> </g> </g><g> <g> <rect x="119.908" y="40.004" width="15.709" height="15.708"/> </g> </g><g> <g> <polygon points="80.113,15.922 80.113,64.095 104.2,64.095 104.2,48.386 95.822,48.386 95.822,31.631 104.2,31.631 104.2,40.009 119.908,40.009 119.908,31.631 159.703,31.631 159.703,48.386 152.373,48.386 152.373,64.095 175.412,64.095 175.412,15.922 "/> </g> </g><g> <g> <polygon points="207.876,15.922 207.876,64.095 223.584,64.095 223.584,40.009 231.962,40.009 231.962,31.631 264.427,31.631 264.427,40.009 280.135,40.009 280.135,31.631 288.513,31.631 288.513,48.386 280.135,48.386 280.135,64.095 304.221,64.095 304.221,15.922 "/> </g> </g><g> <g> <rect x="247.671" y="40.004" width="16.756" height="15.708"/> </g> </g><g> <g> <polygon points="336.686,15.922 336.686,64.095 344.016,64.095 352.394,64.095 359.725,64.095 359.725,48.386 352.394,48.386 352.394,31.631 360.772,31.631 360.772,40.009 376.481,40.009 376.481,31.631 392.189,31.631 392.189,40.009 407.898,40.009 407.898,31.631 416.276,31.631 416.276,48.386 407.898,48.386 407.898,64.095 416.276,64.095 423.606,64.095 431.984,64.095 431.984,15.922 "/> </g> </g><g> <g> <rect x="376.481" y="48.382" width="15.708" height="15.708"/> </g> </g><g> <g> <rect x="231.962" y="296.577" width="48.173" height="15.708"/> </g> </g><g> <g> <rect x="247.671" y="320.663" width="16.756" height="15.709"/> </g> </g><g> <g> <path d="M431.954,232.7V88.181h8.408V72.473H328.308v15.708h7.89V232.7h-32.32V88.181h7.674V72.473H199.498v15.708h8.624V232.7 h-32.32V88.181h7.987V72.473H71.736v15.708h8.311V232.7H64.405v15.708h15.641v127.75c0,26.4,21.478,47.877,47.877,47.877 s47.878-21.478,47.878-47.877v-127.75h32.32v127.751c0,26.4,21.478,47.877,47.877,47.877c26.401,0,47.877-21.478,47.877-47.877 V248.408h32.32v127.751c0,26.4,21.478,47.877,47.877,47.877c26.4,0,47.878-21.478,47.878-47.877V248.408h15.74V232.7H431.954z M160.094,376.159c0,17.738-14.431,32.169-32.17,32.169c-17.738,0-32.169-14.431-32.169-32.169v-8.366h64.339V376.159z M160.094,352.084H95.755v-15.708h8.445v-15.708h-8.445v-8.378h39.862v-15.708H95.755v-16.756h64.339V352.084z M160.094,264.117 H95.755v-15.708h64.339V264.117z M160.094,232.7H95.755v-64.929h64.339V232.7z M160.094,152.063H95.755V88.181h64.339V152.063z M223.831,88.181L223.831,88.181h64.338v79.59h-64.338V88.181z M223.831,183.48L223.831,183.48h64.338v49.22h-64.338V183.48z M223.831,248.408L223.831,248.408h64.338v15.708h-64.338V248.408z M288.168,376.159c0,17.738-14.431,32.169-32.169,32.169 s-32.169-14.431-32.169-32.169v-8.366h0h64.338V376.159z M288.169,352.084h-64.338v-15.708h16.509v-15.708h-16.51v-40.842h64.338 v40.842h-16.411v15.708h16.412V352.084z M351.906,88.181h64.338v39.795h-64.338V88.181z M351.906,143.685h64.338V232.7h-64.338 V143.685z M351.906,248.408h64.338v15.708h-64.338V248.408z M416.244,376.159c0,17.738-14.431,32.169-32.17,32.169 c-17.738,0-32.169-14.431-32.169-32.169v-8.366h0.001h64.338V376.159z M416.245,320.667h-8.347v15.708h8.347v15.708h-64.338 v-72.259h64.337v16.756h-39.763v15.708h39.765V320.667z"/> </g> </g></symbol><symbol id="bandage" viewBox="0 0 512 512"><title>bandage</title><g> <g> <path d="M475.792,36.197C452.449,12.856,421.414,0,388.404,0c-33.011,0-64.045,12.856-87.388,36.197L36.208,301.006 c-48.184,48.184-48.184,126.587,0,174.773c11.582,11.579,25.066,20.602,40.078,26.814c5.742,2.371,12.306-0.354,14.677-6.086 c2.373-5.733-0.352-12.304-6.085-14.677c-12.273-5.077-23.301-12.459-32.78-21.939c-19.099-19.099-29.617-44.492-29.617-71.499 c0-27.007,10.519-52.399,29.617-71.497L316.907,52.086c19.098-19.099,44.489-29.617,71.497-29.617 c27.009,0,52.399,10.517,71.499,29.617c19.099,19.098,29.617,44.492,29.617,71.499s-10.519,52.399-29.617,71.497l-264.81,264.809 c-22.479,22.479-53.476,32.942-85.016,28.713c-6.145-0.83-11.806,3.492-12.63,9.643c-0.824,6.149,3.493,11.803,9.643,12.628 c5.622,0.752,11.233,1.125,16.795,1.125c32.584,0,63.631-12.754,87.099-36.221L475.792,210.97 C523.976,162.786,523.976,84.383,475.792,36.197z"/> </g> </g><g> <g> <path d="M343.389,221.562l-52.961-52.961c-16.063-16.058-42.198-16.06-58.258,0l-63.556,63.555 c-16.061,16.061-16.061,42.195,0,58.258l52.961,52.961c2.195,2.195,5.071,3.291,7.945,3.291s5.751-1.098,7.945-3.291 c4.388-4.386,4.388-11.5,0-15.888l-52.961-52.961c-7.301-7.301-7.301-19.18,0-26.481l63.555-63.555 c7.301-7.303,19.18-7.3,26.481,0l52.96,52.961c7.301,7.301,7.301,19.18,0,26.481l-63.555,63.555c-4.388,4.386-4.388,11.5,0,15.888 c4.388,4.388,11.5,4.388,15.889,0l63.555-63.555C359.45,263.757,359.45,237.623,343.389,221.562z"/> </g> </g><g> <g> <circle cx="123.599" cy="293.065" r="11.235"/> </g> </g><g> <g> <circle cx="155.373" cy="324.838" r="11.235"/> </g> </g><g> <g> <circle cx="187.158" cy="356.61" r="11.235"/> </g> </g><g> <g> <circle cx="293.08" cy="123.584" r="11.235"/> </g> </g><g> <g> <circle cx="324.85" cy="155.361" r="11.235"/> </g> </g><g> <g> <circle cx="356.625" cy="187.143" r="11.235"/> </g> </g><g> <g> <circle cx="388.412" cy="218.915" r="11.235"/> </g> </g><g> <g> <circle cx="324.853" cy="91.811" r="11.235"/> </g> </g><g> <g> <circle cx="356.625" cy="123.584" r="11.235"/> </g> </g><g> <g> <circle cx="388.405" cy="155.361" r="11.235"/> </g> </g><g> <g> <circle cx="420.182" cy="187.138" r="11.235"/> </g> </g><g> <g> <circle cx="356.627" cy="60.031" r="11.235"/> </g> </g><g> <g> <circle cx="388.412" cy="91.811" r="11.235"/> </g> </g><g> <g> <circle cx="420.182" cy="123.584" r="11.235"/> </g> </g><g> <g> <circle cx="451.959" cy="155.361" r="11.235"/> </g> </g><g> <g> <circle cx="60.039" cy="356.61" r="11.235"/> </g> </g><g> <g> <circle cx="91.82" cy="388.392" r="11.235"/> </g> </g><g> <g> <circle cx="123.599" cy="420.169" r="11.235"/> </g> </g><g> <g> <circle cx="155.371" cy="451.941" r="11.235"/> </g> </g><g> <g> <circle cx="60.039" cy="420.169" r="11.235"/> </g> </g><g> <g> <circle cx="91.82" cy="451.947" r="11.235"/> </g> </g><g> <g> <circle cx="91.818" cy="324.838" r="11.235"/> </g> </g><g> <g> <circle cx="123.599" cy="356.61" r="11.235"/> </g> </g><g> <g> <circle cx="155.371" cy="388.397" r="11.235"/> </g> </g><g> <g> <circle cx="187.158" cy="420.169" r="11.235"/> </g> </g><g> <g> <circle cx="420.182" cy="60.031" r="11.235"/> </g> </g><g> <g> <circle cx="451.956" cy="91.811" r="11.235"/> </g> </g><g> <g> <circle cx="218.93" cy="388.397" r="11.235"/> </g> </g></symbol><symbol id="warning" viewBox="0 0 294.951 294.951"><title>warning</title><path d="m147.475,103.102c-5.22,0-8.701,3.48-8.701,8.701v62.644c0,5.22 3.48,8.701 8.701,8.701 5.22,0 8.701-3.48 8.701-8.701v-62.644c0-5.221-3.481-8.701-8.701-8.701z"/><path d="m152.695,212.73c-3.48-3.48-8.701-3.48-12.181,0-1.74,1.74-1.74,5.22-1.74,6.96 0,3.48 0,5.22 1.74,6.96 1.74,1.74 5.22,1.74 6.96,1.74 1.74,0 5.22,0 3.48-1.74 1.74-1.74 3.48-5.22 3.48-6.96 0.002-3.48 0.002-5.22-1.739-6.96z"/><path d="m288.425,214.47l-102.667-179.232c-6.96-13.921-22.621-22.621-38.283-22.621-15.661,0-29.582,8.701-38.283,22.621l-102.667,179.232c-8.701,13.921-8.701,31.322-5.32907e-15,45.243 6.96,13.921 22.621,22.621 38.283,22.621h205.334c17.401,0 31.322-8.701 38.283-22.621 8.701-13.921 8.701-31.322 0-45.243zm-13.921,38.283c-3.48,8.701-12.181,13.921-22.621,13.921h-207.075c-8.701,0-17.401-5.22-22.621-13.921-5.22-8.701-5.22-19.141 0-27.842l102.667-179.233c3.48-8.701 12.181-13.921 22.621-13.921 10.441,0 19.141,5.22 24.362,13.921l102.667,179.232c5.221,8.701 5.221,19.142 0,27.843z"/></symbol><symbol id="stethoscope" viewBox="0 0 60 60"><title>stethoscope</title><path d="M46.5,31c-4.072,0-7.436,3.06-7.931,7H27.5v-6.125c1.04-0.259,1.939-0.918,2.506-1.873l12.92-21.851 c0.756-1.275,0.769-2.806,0.035-4.094S40.904,2,39.421,2h-2.272C36.585,0.822,35.391,0,34,0c-1.596,0-5.5,1.227-5.5,3.5 S32.404,7,34,7c1.758,0,3.204-1.308,3.449-3h1.971c0.755,0,1.429,0.392,1.802,1.048c0.374,0.655,0.367,1.435-0.018,2.085 l-12.92,21.851C27.907,29.62,27.24,30,26.5,30s-1.407-0.38-1.791-1.026L11.428,7.132c-0.385-0.649-0.392-1.429-0.018-2.084 C11.784,4.392,12.458,4,13.212,4h2.338C15.796,5.692,17.242,7,19,7c1.596,0,5.5-1.227,5.5-3.5S20.596,0,19,0 c-1.391,0-2.585,0.822-3.149,2h-2.639c-1.483,0-2.806,0.77-3.54,2.058S8.951,6.876,9.713,8.161l13.282,21.842 c0.566,0.955,1.465,1.613,2.505,1.872V38h-9c-6.065,0-11,4.935-11,11s4.935,11,11,11s11-4.935,11-11v-9h11.069 c0.495,3.94,3.859,7,7.931,7c4.411,0,8-3.589,8-8S50.911,31,46.5,31z M34,5c-1.234,0-3.358-0.989-3.498-1.5 C30.642,2.989,32.766,2,34,2c0.827,0,1.5,0.673,1.5,1.5S34.827,5,34,5z M19,2c1.234,0,3.358,0.989,3.498,1.5 C22.358,4.011,20.234,5,19,5c-0.827,0-1.5-0.673-1.5-1.5S18.173,2,19,2z M25.5,49c0,4.963-4.038,9-9,9s-9-4.037-9-9s4.038-9,9-9h9 V49z M46.5,45c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S49.809,45,46.5,45z"/><path d="M46.5,35c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S48.706,35,46.5,35z M46.5,41c-1.103,0-2-0.897-2-2s0.897-2,2-2 s2,0.897,2,2S47.603,41,46.5,41z"/></symbol><symbol id="scalpel" viewBox="0 0 59.413 59.413"><title>scalpel</title><path d="M59.413,6.229c0-1.246-0.485-2.417-1.366-3.297c-1.818-1.819-4.776-1.817-6.595,0L18.127,36.258 c-0.509,0.509-0.724,1.223-0.63,1.924L0.293,55.386c-0.239,0.239-0.342,0.583-0.271,0.915s0.304,0.604,0.619,0.726 c0.164,0.063,2.188,0.818,4.924,0.818c2.709,0,6.115-0.742,9.095-3.635l7.123-7.124c0.236-0.236,0.339-0.575,0.273-0.903 l-0.542-2.713l2.305-2.306l0.354,0.082c0.245,0.057,0.492,0.084,0.736,0.084c0.849,0,1.667-0.333,2.285-0.951L54.19,13.384 c0-0.001,0.001-0.001,0.001-0.001l3.856-3.856C58.928,8.646,59.413,7.475,59.413,6.229z M49.883,14.863l-2.354-5.179l2.375-2.376 l2.354,5.179L49.883,14.863z M45.997,18.749l-2.354-5.179l2.375-2.375l2.354,5.179L45.997,18.749z M21.522,40.634l-1.801,1.8 c-0.236,0.236-0.339,0.575-0.273,0.903l0.542,2.713l-6.733,6.735c-3.621,3.515-8.03,3.262-10.333,2.799l15.708-15.708 c0.006,0.003,0.013,0.004,0.019,0.007c0.18,0.098,0.375,0.174,0.58,0.222L21.522,40.634z M25.781,38.965 c-0.304,0.305-0.734,0.43-1.158,0.332l-4.942-1.141c-0.052-0.012-0.083-0.038-0.114-0.064c-0.022-0.019-0.045-0.039-0.065-0.074 c-0.011-0.021-0.028-0.043-0.034-0.063c-0.021-0.074-0.026-0.184,0.073-0.284L42.132,15.08l2.354,5.179L25.781,38.965z M56.633,8.113l-2.865,2.865l-2.354-5.179l1.453-1.453c0.52-0.519,1.201-0.778,1.884-0.778c0.682,0,1.363,0.259,1.883,0.778 c0.503,0.503,0.78,1.172,0.78,1.883S57.136,7.61,56.633,8.113z"/><path d="M12.759,47.859l-2,2c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l2-2 c0.391-0.391,0.391-1.023,0-1.414S13.15,47.468,12.759,47.859z"/><path d="M8.753,51.856c-0.18,0.19-0.29,0.45-0.29,0.71c0,0.26,0.11,0.52,0.29,0.71c0.19,0.18,0.45,0.29,0.71,0.29 c0.27,0,0.52-0.11,0.71-0.29c0.19-0.19,0.29-0.45,0.29-0.71c0-0.26-0.1-0.52-0.29-0.71C9.803,51.486,9.133,51.486,8.753,51.856z"/></symbol><symbol id="syringe" viewBox="0 0 58.45 58.45"><title>syringe</title><path d="M58.157,56.743l-5.614-5.614c0.304-0.304,0.38-0.769,0.188-1.154l-2.539-5.078c1.457-1.935,1.325-4.694-0.436-6.455 l-4.699-4.699l0,0L20.016,8.702l2.121-2.121c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2.121,2.121l-2.829,2.829 L9.485,3.828l2.121-2.121c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-9.899,9.899c-0.391,0.391-0.391,1.023,0,1.414 C0.488,11.802,0.744,11.899,1,11.899s0.512-0.098,0.707-0.293l2.121-2.121l6.288,6.288l-2.829,2.829l-2.121,2.121 c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l2.121-2.121l29.74,29.739 c0.963,0.963,2.229,1.445,3.495,1.445c1.047,0,2.084-0.349,2.96-1.009l5.078,2.539c0.142,0.071,0.295,0.105,0.447,0.105 c0.26,0,0.516-0.101,0.708-0.293l5.614,5.614c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C58.547,57.766,58.547,57.133,58.157,56.743z M24.328,32.814l2.829-2.828c0.391-0.39,0.391-1.023,0-1.414s-1.023-0.391-1.414,0 L22.914,31.4L21.5,29.985l2.828-2.829c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.023-0.391-1.414,0l-2.828,2.829 l-1.808-1.808l1.414-1.414l0,0l5.657-5.657l0,0l1.414-1.414L41.935,33.45H24.964L24.328,32.814z M19.692,22.521l-6.748-6.748 l2.829-2.829l6.748,6.748L19.692,22.521z M18.602,10.116l6.748,6.748l-1.414,1.414l-6.748-6.748L18.602,10.116z M5.253,8.082 l2.829-2.829l6.277,6.277l-2.829,2.829L5.253,8.082z M11.53,17.187l6.748,6.748l-1.414,1.414l-6.748-6.748L11.53,17.187z M39.855,48.341L26.964,35.45h16.971l4.406,4.406c1.147,1.147,1.147,3.014,0,4.161l-0.04,0.04L48.3,44.057L44.057,48.3 c-0.001,0.001-0.001,0.002-0.001,0.002l-0.039,0.039C42.869,49.488,41.003,49.488,39.855,48.341z M46.452,48.733l2.281-2.281 l1.886,3.772l-0.395,0.395L46.452,48.733z"/><circle cx="36.45" cy="39.45" r="1"/><circle cx="41.45" cy="45.45" r="1"/><circle cx="43.45" cy="40.45" r="1"/></symbol></svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalContents',

  props: ['visible'],

  methods: {
    toggle () {
      this.$emit('visible')
    },

    selectModule (module) {
      this.$store.commit('encounterEntry/toggleModuleSelection', module)
    },

    configForm (config) {
      const configs = {
        bigGameCapture: {
          marks: true,
          devices: true,
          biometrics: true,
          vitals: true,
          samples: true,
          injuries: true,
          medications: true,
          mortality: false,
          necropsy: false
        },
        incidentalObs: {
          marks: false,
          devices: false,
          biometrics: false,
          vitals: false,
          samples: false,
          injuries: false,
          medications: false,
          mortality: false,
          necropsy: false
        },
        droppedCollar: {
          marks: true,
          devices: true,
          biometrics: false,
          vitals: false,
          samples: false,
          injuries: false,
          medications: false,
          mortality: false,
          necropsy: false
        }
      }

      this.$store.commit('encounterEntry/preConfigForm', configs[config])
    }
  },

  computed: {
    ...mapState('encounterEntry', ['moduleSelection'])
  }
}
</script>

<style lang="css" scoped>
  .column {
    padding: 7px;
  }

  .modal-card-head {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background-color: #fff;
    border-color: #868787;
  }

  .modal-card-foot {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #fff;
    border-color: #868787;
  }

  .module-selector {
    padding: 15px 0;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 2px;
  }

  svg {
    fill: #269E7F;
    width: 84px;
    height: 84px;
  }
  
  h2 {
    margin-top: 5px;
    color: #868787;
  }

  div.hoverable:hover {
    background-color: rgba(38,158,127,.08);
    fill: #269E7F;
    color: #868787;
  }

  div.hoverable:hover svg {
    fill: #269E7F;
  }

  div.hoverable:hover h2 {
    color: #868787
  }

  .selected {
    background-color: #269E7F;
    color: #fff;
    fill: #fff;
  }

  .selected svg {
    fill: #fff;
  }

  .selected h2 {
    color: #fff;
  }

  section.section {
    border-top: 1px solid #868787;
    padding: 15px 5px 5px 5px;
    margin-top: 40px;
  }

  .md-title {
    color: #175d49;
  }

  li.config > a {
    color: #269E7F;
  }

  footer > p {
    color: #868787
  }
</style>
