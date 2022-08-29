# Site Down

## Situation 
Production Website Down: 
<p>A user just reached out letting you know that a critical production website is down. Describe how you would work with the user to solve the problem.</p>

## Solution

- My goal here would be to help isolate the source of the problem as quickly as possibly, or deploy a workaround if it seemed like troubleshooting the issue may take too long. I would aim to start with the most common and easily verifiable issues and work my down towards the more difficult to resolve issues. 
- My first step would be to rule out issues with the user's connection by verifying that the site is also down for me. This would also allow me to check for any corresponding error messages that might aid in the troubleshooting process.
- I would quickly gather additional information regarding the site from the user or records if it wasn't provided initially, or if I didn't already have access to it. Things such as where is it hosted, what is the IP address supposed to be, what is the configuration (traditional site, docker image, webapp, etc.), and were there any recent updates or configuration changes made would undoubtedly provide info that would dictate how I would proceed from here. 
- After having ruled out connection errors for the user, I would then proceed to trying to isolate whether it is an issue with the hosting provider, the site or dns configuration, or a server or database error. 
- If a recent update to the configuration was pushed corresponding with the outage, then I would help the user roll back to the previously known working configuration. I would then advise them test changes individually to determine what the breaking change was if it's not already clear.
- If no recent update was pushed, I would move on to checking the status and update pages with the hosting provider to see if there is a widespread outage. I would also check another site hosted with a similar configuration on the same provider.
- If there is a widespread outage, I would monitor the hosting providers status pages and connect with their support team to get an ETA to resolution. Even without a widespread outage I would likely still establish a connection with them in case I needed their help with the rest of the troubleshooting process. 
- If there is not a widespread outage then I would proceed to checking for server issues and verify that nothing has changed or expired with the dns configuration. 
- If the dns configuration still seems to be set correctly, no domains have expired, or nameservers have changed then I would likely attempt a reboot of the server or reload of the docker/container image. This is provided that there is nothing else still active running on the server, if there was I would proceed to manually verifying the critical components listed below.
- If a reboot of the server does not solve the problem, I would be likely to advise re-deploying the site to another server to allow extra time for troubleshooting server issues.
- When troubleshooting server issues, I would ensure that the webserver is running, the database is connected and not corrupted, and that there are adequate resources such as ram and free disk space.  
- I would likely be using tools such as ping, nmap, trace route, whois, df -h, htop, and telnet along the way to assist with the troubleshooting and isolation process. 
- Once server operation and the site are restored, I would set up automatic monitoring and alerting for all critical production sites under my purview to ensure that we are notified as soon as they go down in the future.
- If the cause was user error, then ensure the user has the knowledge needed to prevent the issue from re-occurring, or at least quickly resolve it in future.
- Ensure all symptoms and steps taken to resolve the incident are documented in a ticket. 
- I would check the history to see if this is a recurring issue or not. If it is a recurring issue, then I would associate all relevant incidents with a problem ticket to determine the root cause and evaluate the need and cost benefit of potential solutions such as changing providers or setting up redundant backup or fail safe hosting (ipfs if not already?) of critical sites.
- Build a knowledge base solution for the issue containing the steps to quickly resolve if it is likely that this incident may re-occur in the future.
