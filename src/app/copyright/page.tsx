import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Copyright Policy | Abyss',
  description: 'საავტორო უფლებები და მასალის წაშლის მოთხოვნა',
}

export default function CopyrightPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">საავტორო უფლებები და მასალის წაშლის მოთხოვნა</h1>

          <p className="text-on-surface-variant text-lg">
            ჩვენ პატივს ვცემთ ავტორებისა და საავტორო უფლებების მფლობელთა ინტელექტუალური საკუთრების უფლებებს.
          </p>

          <p className="text-on-surface-variant text-lg mb-8">
            თუ თვლით, რომ ჩვენს ვებგვერდზე გამოქვეყნებული მანჰუა, კომიქსი, ილუსტრაცია, ტექსტი ან სხვა მასალა არღვევს თქვენს საავტორო უფლებებს, შეგიძლიათ გამოგვიგზავნოთ შესაბამისი შეტყობინება.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. საჩივრის წარდგენა</h2>
          <p className="text-on-surface-variant">
            საავტორო უფლებების დარღვევის შესახებ შეტყობინების გასაგზავნად დაგვიკავშირდით შემდეგ ელფოსტაზე:
          </p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>

          <p className="text-on-surface-variant mt-4 mb-2">შეტყობინება უნდა შეიცავდეს შემდეგ ინფორმაციას:</p>
          <ol className="list-decimal list-outside ml-6 space-y-2 text-on-surface-variant">
            <li>მომჩივნის სრულ სახელსა და საკონტაქტო ინფორმაციას.</li>
            <li>საავტორო უფლებებით დაცული ნაწარმოების დასახელებას ან აღწერას.</li>
            <li>ჩვენი ვებგვერდის იმ კონკრეტულ ბმულებს, რომლებზეც განთავსებულია სადავო მასალა.</li>
            <li>განმარტებას, რომ თქვენ ხართ შესაბამისი საავტორო უფლებების მფლობელი ან უფლებამოსილი ხართ იმოქმედოთ მფლობელის სახელით.</li>
            <li>განცხადებას, რომ კეთილსინდისიერად მიიჩნევთ მასალის გამოყენებას უნებართვოდ, შესაბამისი მფლობელის, მისი წარმომადგენლის ან კანონის მიერ მინიჭებული უფლების არარსებობის გამო.</li>
            <li>ინფორმაციის სიზუსტის დადასტურებას და მოთხოვნის ავტორიზაციის შესაბამის განცხადებას. თუ შეტყობინება აშშ-ის DMCA-ს ფარგლებში იგზავნება, საჭიროა ამ კანონით გათვალისწინებული შესაბამისი განცხადებები და ფიზიკური ან ელექტრონული ხელმოწერა.</li>
          </ol>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. საჩივრის განხილვა</h2>
          <p className="text-on-surface-variant">
            ჩვენ განვიხილავთ მიღებულ შეტყობინებებს და საჭიროების შემთხვევაში შეიძლება მოვითხოვოთ დამატებითი ინფორმაცია საჩივრის გადასამოწმებლად.
          </p>
          <p className="text-on-surface-variant mt-3">
            თუ დავადგენთ, რომ მასალა არღვევს საავტორო უფლებებს ან მისი გამოქვეყნების სათანადო ნებართვა არ არსებობს, მივიღებთ შესაბამის ზომებს, მათ შორის მასალის წაშლას ან მასზე წვდომის შეზღუდვას.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. არასათანადო შეტყობინებები</h2>
          <p className="text-on-surface-variant">
            გთხოვთ, მოგვაწოდოთ ზუსტი და გადამოწმებადი ინფორმაცია. ცრუ ან შეცდომაში შემყვანი საჩივრები შესაძლოა შესაბამის სამართლებრივ შედეგებს იწვევდეს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. საავტორო უფლებების პატივისცემა</h2>
          <p className="text-on-surface-variant">
            მასალის ავტორის მითითება, უფასოდ გამოქვეყნება ან სხვა ენაზე თარგმნა თავისთავად არ ნიშნავს, რომ არსებობს მისი გამოქვეყნების ნებართვა.
          </p>
          <p className="text-on-surface-variant mt-3">
            ეს პოლიტიკა არ ანიჭებს ვებგვერდს მესამე პირების ნაწარმოებების გამოყენების ან გამოქვეყნების უფლებას.
          </p>
          <p className="text-on-surface-variant mt-3">
            თუ თქვენ ხართ ავტორი, გამომცემელი ან საავტორო უფლებების მფლობელი და გაქვთ შეკითხვა ჩვენს ვებგვერდზე არსებულ მასალასთან დაკავშირებით, გთხოვთ, დაგვიკავშირდეთ ზემოთ მითითებულ ელფოსტაზე.
          </p>
        </div>
      </div>
    </div>
  )
}
