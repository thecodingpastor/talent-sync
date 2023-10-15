import classes from "./FAQs.module.scss";

const faq = [
  {
    id: "one",
    q: "How many participants can join a ClearLink video conference?",
    a: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: "two",
    q: "Can I use ClearLink on multiple devices?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas.",
  },
  {
    id: "three",
    q: "Is ClearLink compatible with other video conferencing platforms?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas.",
  },
  {
    id: "four",
    q: "How does ClearLink ensure the security of my video conferences?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: "five",
    q: "Do I need to download any software to use ClearLink?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas.",
  },
  {
    id: "six",
    q: "What kind of customer support does ClearLink provide?",
    a: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nostrum harum amet alias optio hic numquam reiciendis est cupiditate id nemo quaerat laboriosam, quidem fugiat quasi nulla voluptas nam quas.",
  },
];

const FAQs = () => {
  return (
    <section className={classes.Container}>
      <div className={classes.First}>
        <h6>Support</h6>
        <h3>FAQs</h3>

        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <ul className={classes.Second}>
        {faq.map((item, index) => (
          <li key={index}>
            <input type="checkbox" name="myAccordion" id={item.id} />
            <h5>{item.q}</h5>
            <p>{item.a}</p>
            <label htmlFor={item.id}></label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQs;
