import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Abyss',
  description: 'გამოყენების პირობები - Abyss',
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">გამოყენების პირობები</h1>

          <p className="text-on-surface-variant text-lg">
            მოგესალმებით <strong>abyss</strong>-ზე.
          </p>
          <p className="text-on-surface-variant text-lg">
            ეს გამოყენების პირობები განსაზღვრავს ჩვენი ვებსაიტის გამოყენების ძირითად წესებს.
          </p>
          <p className="text-on-surface-variant text-lg mb-8">
            ვებსაიტზე შესვლითა და მისი გამოყენებით თქვენ ვალდებული ხართ დაიცვათ მოქმედი კანონმდებლობა და ქვემოთ აღწერილი წესები.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. ვებსაიტის შესახებ</h2>
          <p className="text-on-surface-variant mb-3">
            <strong>abyss</strong> არის ქართულენოვანი პლატფორმა, რომელიც მიზნად ისახავს მანჰუასა და კომიქსებთან დაკავშირებული მასალისა და ინფორმაციის ხელმისაწვდომობას.
          </p>
          <p className="text-on-surface-variant mb-8">
            ვებსაიტის ზოგიერთი ფუნქცია ან მომსახურება შეიძლება შეიცვალოს ან დაემატოს მომავალში.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. ვებსაიტის გამოყენების წესები</h2>
          <p className="text-on-surface-variant mb-3">
            ვებსაიტის გამოყენებისას აკრძალულია:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-8">
            <li>ვებსაიტის გამოყენება უკანონო მიზნებისთვის;</li>
            <li>ჩვენი ვებსაიტის ან მისი ინფრასტრუქტურის მუშაობაში განზრახ ჩარევა;</li>
            <li>უსაფრთხოების სისტემების გვერდის ავლის მცდელობა;</li>
            <li>სხვა პირების უფლებების დარღვევა;</li>
            <li>ვებსაიტზე მავნე კოდის ან სხვა საზიანო მასალის განთავსების მცდელობა;</li>
            <li>ვებსაიტის შინაარსის მასობრივი ავტომატური შეგროვება ან ხელახლა გამოქვეყნება სათანადო ნებართვის გარეშე.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. საავტორო უფლებები</h2>
          <p className="text-on-surface-variant mb-3">
            მანჰუა, კომიქსები, ილუსტრაციები, ტექსტები, ლოგოები და სხვა მასალა შეიძლება დაცული იყოს საავტორო ან სხვა ინტელექტუალური საკუთრების უფლებებით.
          </p>
          <p className="text-on-surface-variant mb-3">
            ვებსაიტზე მასალის ხელმისაწვდომობა არ ნიშნავს, რომ მომხმარებელს ეძლევა მისი კოპირების, თარგმნის, გავრცელების, შეცვლის ან კომერციული გამოყენების უფლება.
          </p>
          <p className="text-on-surface-variant mb-3">
            ასეთი გამოყენებისთვის შესაძლოა საჭირო იყოს შესაბამისი უფლებების მფლობელის ნებართვა.
          </p>
          <p className="text-on-surface-variant mb-3">
            ვებსაიტის მომხმარებელი ვალდებულია პატივი სცეს მესამე პირების უფლებებს.
          </p>
          <p className="text-on-surface-variant mb-8">
            თუ თვლით, რომ ვებსაიტზე განთავსებული მასალა არღვევს თქვენს უფლებებს, გაეცანით ჩვენს საავტორო უფლებების პოლიტიკას ან დაგვიკავშირდით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. რეკლამები</h2>
          <p className="text-on-surface-variant mb-3">
            ვებსაიტზე შესაძლოა განთავსდეს მესამე მხარის რეკლამები, მათ შორის Google AdSense-ის რეკლამები.
          </p>
          <p className="text-on-surface-variant mb-3">
            რეკლამებისა და შესაბამისი სერვისების გამოყენება ექვემდებარება შესაბამისი სერვისის მიმწოდებლის პირობებსა და პოლიტიკებს.
          </p>
          <p className="text-on-surface-variant mb-8">
            ჩვენი ვებსაიტის მომხმარებლებს ვთხოვთ, არ დააწკაპუნონ რეკლამებზე ხელოვნურად ან მხოლოდ საიტის მხარდასაჭერად.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">5. მესამე მხარის ვებსაიტები</h2>
          <p className="text-on-surface-variant mb-3">
            ჩვენს ვებსაიტზე შესაძლოა განთავსდეს მესამე მხარის ვებსაიტების ბმულები.
          </p>
          <p className="text-on-surface-variant mb-3">
            ასეთი ბმულები შეიძლება გამიზნული იყოს დამატებითი ინფორმაციის მისაწოდებლად.
          </p>
          <p className="text-on-surface-variant mb-3">
            ჩვენ არ ვაკონტროლებთ ყველა გარე ვებსაიტს და მათი შინაარსის, უსაფრთხოების ან კონფიდენციალურობის პრაქტიკის შესახებ გარანტიას არ ვაძლევთ.
          </p>
          <p className="text-on-surface-variant mb-8">
            გარე ვებსაიტის გამოყენებამდე გაეცანით მის პირობებსა და პოლიტიკებს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">6. მომსახურების ხელმისაწვდომობა</h2>
          <p className="text-on-surface-variant mb-3">
            ვცდილობთ, ვებსაიტი ხელმისაწვდომი იყოს მომხმარებლებისთვის, თუმცა არ ვიძლევით გარანტიას, რომ ის ყოველთვის იმუშავებს შეფერხებების გარეშე.
          </p>
          <p className="text-on-surface-variant mb-8">
            ტექნიკური სამუშაოების, განახლებების ან სხვა გარემოებების გამო ზოგიერთი ფუნქცია შეიძლება დროებით მიუწვდომელი გახდეს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">7. პირობების ცვლილება</h2>
          <p className="text-on-surface-variant mb-3">
            შესაძლოა დროდადრო განვაახლოთ ეს პირობები.
          </p>
          <p className="text-on-surface-variant mb-8">
            ცვლილებული ვერსია გამოქვეყნდება ამავე გვერდზე. განახლების თარიღი მითითებული იქნება დოკუმენტის დასაწყისში.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">8. მოქმედი კანონმდებლობა</h2>
          <p className="text-on-surface-variant mb-3">
            ეს პირობები განიმარტება შესაბამისი მოქმედი კანონმდებლობის გათვალისწინებით.
          </p>
          <p className="text-on-surface-variant mb-8">
            პირობების არც ერთი დებულება არ ზღუდავს ისეთ უფლებებს, რომელთა შეზღუდვაც მოქმედი კანონმდებლობით დაუშვებელია.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">9. საკონტაქტო ინფორმაცია</h2>
          <p className="text-on-surface-variant mb-3">
            გამოყენების პირობებთან დაკავშირებული შეკითხვების შემთხვევაში დაგვიკავშირდით:
          </p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
