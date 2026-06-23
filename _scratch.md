
Stats NZ - Next steps
* Governance - prevent user using all the tokens
* SDLC help
* Token Economics
	* How do you measure bang-for-buck?



* How does self-service work? "Landing zone"
	* e.g. Terraform Cloud form or ServiceNow or GitHub direct etc.
	* Provision within a hour at high standard is better than self-service
	* How do we enforce a naming pattern and/or custom attributes?
* Operations
	* How do we give people access to a set of repos, or just one repo?
* How do we limit mistakes, but allow self-service?
	* Lightweight where it can be, strict where is should be
* How do we have sane defaults?
	* Tier 1 production, must use PR etc
* 
* Prototype 1 vs 2 orgs
* What to do about external party access?
* What about agent access to repos, how does RBAC work for agents? Does this get impacted if we use 1 or 2 orgs?





RBNZ 2 archetypes
* Code
* Data - no pipelines, so maybe multi-org makes sense? Avoid reliance on tagging correctly
	* Will not separate from day one
	* No different from ADO repos, so is there any issue using GitHub repos instead?


AI working group will be steering group



* P3 pricing
	* Consumption

agent commit units - ACU vs AI credit




```
Due to the desire to use the internal project budget, the most practical path is probably a hybrid of EA and Azure PAYG.

   - EA for GitHub Enterprise: satisfies the budget commitment mechanism, locks in the GHE spend formally
   - Azure PAYG for Copilot Enterprise: the only available route until Jenelle confirms whether Copilot is on the EA pricebook

If Copilot Enterprise can be added to the EA, a full EA approach may satisfy both goals. If not, the hybrid is the answer.

Question for Jenelle: Can Copilot Enterprise be added to the EA, and does it count against our EA commitment?
```


claude --resume 812304bb-1fc0-416b-9c60-7eae9e3c73bb

https://www.youtube.com/watch?v=zVZotTk6ZWU

```
	{
        "key": "shift+enter",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\n"
        },
        "when": "terminalFocus"
    }
```