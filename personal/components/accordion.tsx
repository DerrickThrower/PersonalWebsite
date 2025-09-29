export function Accordion() {
  return (
    <div className="w-full h-screen flex flex-col justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
      <div className="join join-vertical bg-inherit">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            Whats 2 + 2 
          </div>
          <div className="collapse-content text-sm">
            4
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            What are your other hobbies?
          </div>
          <div className="collapse-content text-sm">
            I am a avid lifter and I love to play sports like basketball!
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            What is your life goal?
          </div>
          <div className="collapse-content text-sm">
            I want to help people with software!
          </div>
        </div>
      </div>
    </div>
  );
}
