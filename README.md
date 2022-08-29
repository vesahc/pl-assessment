# Protocol Labs Take Home Assessment

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
Docker image: node:14
<br>
Publish directory: docs/.vitepress/dist
<br>
Build command: yarn && yarn docs:dev
<br>
All other settings are default or blank. 
</p>