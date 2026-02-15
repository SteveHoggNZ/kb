TODO

```bash
./packages/python/experiments/event_trigger/run.sh --title "We need to cut costs ASAP. "
```


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