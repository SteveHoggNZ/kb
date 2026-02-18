
```bash
./packages/python/experiments/event_trigger/run.sh --title "We need to cut costs ASAP. "
```

```
/context-dump packages/go/services/amp, apps/ui, packages/python/experiments/claude_agent, packages/python/mcp_server, packages/python/agent_sdk,  
  docs/01_vision, docs/02_strategy, .ai/plans/_p0-_specialise-agents.md, output to /Users/one/Projects/amp-cloud/amp2/tmp 
```


```
We have a few things to work through here. We want to have the right balance of physics and law.  

We need to support both agents that only respond to webhooks and those that respond to SSE and any combination of the two. We might have agents that all use SSE, we might have all agents that use webhooks, and we might have a mixture. 

The channel and thread physics must be able to support both. So for example, if an agent knows that is not using SSE, then it should be responsible for setting up a timer to wake itself up again. This could be an amp timer so that an action is sent to it to wake it up, for example.

It could set that with MCP. If an agent knows that it's using SSE, it should know that it should ignore certain SSE messages coming through or take action when it gets the one it's waiting for. 

We also need to prove out this idea of agents writing to a shared to-do list. We need to see this visually in the thread when they do this. An agent should be able to assign themselves a to-do or assign another agent a to-do. When a to-do is checked off, that action should be sent to the agents that are interested. So when a to-do is created, I think we need the idea of subscribers.

So, for example, an agent could say, I'm going to set up a to-do and I want to notify this other agent when I check it off. Or an agent could say, I'm going to assign this to-do to another agent and I want to know when it gets checked off.

Agents should be able to subscribe themselves to these to-dos dynamically, unless it's already been checked off. 

The fallback needs to be that we can use mentions to accomplish this workflow. The checklist and SSE are opt-in features. 

I think we need to update our system prompts so that we can be dynamic based upon the properties of a given thread. So for example, in this stalled thread, the agent didn't do the work. So how do we deal with that? One way would be that another agent that does have SSE mention them and say, hey, can you get onto this, please, to wake them up. Or the agent should know that it can set a timer for itself so that AMP can wake them up with a timer. 

As you can see, this is quite a complex testing matrix. I think we need to enumerate all of the possible scenarios and what the approach is for each, and then we need to go through and comprehensively test this, refining our system prompts as we go. The system prompts should be modular enough so that we can change the type of agent from one to another in the future.

For example, if we enable SSE, for an agent, it dynamically includes the instruction at the agent's bootstrap time to say that you're listening for events and you can choose when is a good time to react or not. 
```




https://youtu.be/PScdHzUiBLA

TODO

* AMP main.go refactor - https://aistudio.google.com/prompts/1cPn7vRs9mCHf9GjgD3RyJ7p-8O0t1k8V
* Is this a good idea? ![[Pasted image 20260218163701.png]]![[Pasted image 20260218164443.png]]![[Pasted image 20260218192139.png]]![[Pasted image 20260218192600.png]]![[Pasted image 20260218194139.png]]![[Pasted image 20260218195445.png]]![[Pasted image 20260218204214.png]]
* Perhaps be need an action with more detail? Agents in the chat, why they're there i.e. semantic matches, etc ![[Pasted image 20260218164206.png]]
* Spit-up MCPs: communication, ui, etc



Strategy - https://aistudio.google.com/prompts/1H-0glcOe99I8qtYyZS7IEUSu3HvjhdEr

- [ ] Implement activity stream, see `feature/add-app-frame-diffs-2` branch
	- [ ] When an agent is restarted, the first message doesn't send, typing indicator, etc. 
	- [ ] 
	- [ ] Is the diff main best practice? Can we and should we improve anything? 
	- [ ] We must make sure we've got the functionality locked in with unit and/or integration tests for the changes since main. 
	- [ ] Is the change from typing indicator to tools efficient React-wise?
	- [ ] 
	- [ ] We've lost the "scroll to the bottom" link
	- [ ] New messages don't scroll into view
	- [ ] 
	- [ ] Add graphs - mermaid etc?
	- [ ] Add animations?
	- [ ] 

One NZ - Michael Smorti

> How do we, because you've sold me, I'm you know, 100% on board. This is it's been a while since I've been blown away by anything, but this is this is this is blowing me away, which is very cool.


```
We want an approach that is both efficient and best practice API wise, while also being intuitive from a user experience point of view. Perhaps that means we need an explicit way of grouping entries together as a transaction that the agent performs in one iteration. 
```


```
We are giving strategic advice to a third party coding assistant. We're not doing the work ourselves. 

I've been struggling to balance right with this new way of storing messages as entries. I'd like the API to be super efficient, but I also want the user experience to be intuitive. I want to see the moment where the UI displays I don't think is intuitive. For example, frame above bubble. When we message bubble to group together the actions an assistant is doing at any one time and I want those actions to appear in chronological intuitive order. So for example, the frame patch to create a dashboard should appear above dashboard. Frame patch to create a form should appear above that form, etc. I'd like the frames to be, patches to be treated as trace elements in the same way that thinking and tool calls are, in that the user only needs to see them some of the time when they want to see the event log changes. So in other words, when trace mode is on. I'd like them to be collapsible just like the other linking and local elements. And I'd like them to be able to show the JSON patch. So another tab within that collapsible field, render the UI change. So if for example, patch updated two elements in a dashboard, when we view, show those, switch back to the JSON, we'd see just the patch for that JSON. At the moment, the frame updates appear outside of the message bubbles, which is okay, but not ideal. Again, I want to treat these message bubbles from an agent as a set of actions they took for a given interaction. 

These interactions are somewhat complicated by the fact that these frames can have different targets. For example, a form could target a message bubble when it wants to use get human in the loop input or frame could target the main application canvas or one of its tabs or one of its layout positions. When this frame targets a message, it is an exception to the rule of showing these elements in trace mode. In other words, when trace mode is off, messages would only show frame, rendered frame elements within the appropriate bubble, showing the form or whatever element it is. When trace mode is on, all frame updates would appear in the message list. that would be collapsed by default. 

Considering all the above and all of our documentation, what is going to be the most strategically aligned approach that provides optimal API design and ideal user experience? A holistic plan that is aligned with our vision. We're in active development mode so we can make major changes if required. 

We want an approach that is both efficient and best practice API wise, while also being intuitive from a user experience point of view. Perhaps that means we need an explicit way of grouping entries together as a transaction that the agent performs in one iteration. For example, we could make it a requirement that entries have a group ID that the agent provides and can increment when it is another set of actions it's going to perform. For example, when one request comes in, it works for a minute, groups those together. Another request comes in five minutes later, it groups those together.

I'm not sure if we should require this group to come from the agent or if we could do it automatically. Ideally it would be automatic, otherwise we'd have to make this group optional but preferred. 

```