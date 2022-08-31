# Protocol Labs Take Home Assessment

## Deliverables

Github respository: https://github.com/vesahc/pl-assessment<br>
Live site URL: https://snowy-bar-5232.on.fleek.co<br>
IPFS CID: Qmf2riezFsmuG2REYyMWgH2FmwuvHcR1ejehUD4nrF3vaT <br>


## To build and deploy locally: 

<p>
Clone this repository using: 
<br>
<code>git clone https://github.com/vesahc/pl-assessment.git</code>
<br>
Build dependencies:
<br>
<code>yarn</code>
<br>
Run on local server:
<br>
<code>yarn docs:dev</code>
</p>

## To deploy on Fleek:
<p>
Docker image: <code>node:14</code>
<br>
Publish directory: <code>docs/.vitepress/dist</code>
<br>
Build command: <code>yarn && yarn docs:build</code>
<br>
All other settings are default or blank. 
</p>