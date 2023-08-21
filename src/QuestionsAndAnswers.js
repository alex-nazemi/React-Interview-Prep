const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: [
        "React is an open-source front-end JavaScript library for building user interfaces, primarily single page applications.",
      ],
    },
    {
      question: "What are the main features of React?",
      answer: [
        "JSX",
        "Virtual DOM",
        "Server-side rendering",
        "Uni-directional data flow",
        "Components",
      ],
    },
    {
      question: "What is JSX?",
      answer: [
        "JSX stands for JavaScript XML, it allows developers to write HTML-like code within thier JavaScript, making component code more readable and easier to write. JSX is essentially syntatic sugar for the createElement() React function.",
      ],
    },
    {
      question: "What is the difference between an element and component?",
      answer: [
        "An element in React is an object which describes what you want to see on the screen. It represents an immutable snapshot at a point in time and can describe any user interface from a simple div to a user created component. React elements are created using the React.createElement() method or JSX. They are no resuable, elemnts are like an individual frame in a movie, representing the UI at a specific point in time.",
        "A component in React is a reusable function or class that given certain input (props), describes what should appear on screen by returning a React element. React components can be either stateful or stateless, that is to say they can manage their own internal state or render based only on their given props. Class components can have lifecycle methods, which run code at a specific point in the components life e.g. when it updates. Functional components can imitate lifecycle methods and manage state using hooks.",
      ],
    },
    {
      question: "What is state in React?",
      answer: [
        "State refers to the internal mutable data of a component which determines how that component renders and behaves. State is local and private to the component and changes over time. The useState hook is used to initialise and manage state. When the state of a component changes, the component re-renders to reflect those changes. React efficiently updates only the parts of the DOM that have changed due to having a virtual DOM.",
      ],
    },
    {
      question: "What are props in React?",
      answer: [
        "Props are inputs to a components, they are single values or objects that are passed to components on creation. Allows you to pass custom data to a component. Methods can also be passed down to child components allowing for child components to communicate with their parent component.",
      ],
    },
    {
      question: "What is the difference between state and props?",
      answer: [
        "Both state and props are fundamental React concepts that dictate how data flows between components and affects component rendering. Props is concerned with passing data from parent to child component and should be treated as immutable. State is concerned with the managing of the data within a component. State is mutable and updated using the setState hook.",
      ],
    },
  ];
  
  export default questionsAndAnswers;