The goal of blazingly-stable.js is to create interchangable non-dependant widgets using best practices that can always work with each other to maintain stability for a long time, outliving your best frameworks and package managers.

For example, you should be able to create a react-style and svelte-style component in the same project by using different imports. And in the future, if a third style of component were to arise that can also be added to the library in its pure VanillaJS implementation, that can also be added to the framework and imported without affect the rest of the ecosystem.

Every part of the framework should be highly documented so anyone with a basic grasp of vanillaJS should understand completely what their code is doing. No more abstractions of large 500k frameworks with magic going on underneath.

As already discussed, we aim to create a modular framework so that should a new or better way of doing things arise, we should be able to add it to the ecosystem and users should be able to implement it in their code without disrupting any thing else.