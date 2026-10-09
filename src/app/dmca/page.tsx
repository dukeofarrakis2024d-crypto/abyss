import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA | Abyss',
  description: 'DMCA და საავტორო უფლებების საჩივრები - Abyss',
}

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">DMCA და საავტორო უფლებების საჩივრები</h1>

          <p className="text-on-surface-variant text-lg">
            <strong>abyss</strong> პატივს სცემს ინტელექტუალური საკუთრების უფლებებს და სერიოზულად ეკიდება საავტორო უფლებების დარღვევასთან დაკავშირებულ შეტყობინებებს.
          </p>
          <p className="text-on-surface-variant text-lg mb-8">
            თუ თვლით, რომ ჩვენს ვებსაიტზე განთავსებული მასალა არღვევს თქვენს საავტორო უფლებებს, შეგიძლიათ გამოგვიგზავნოთ საჩივარი ქვემოთ მოცემული პროცედურის შესაბამისად.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">1. საჩივრის გაგზავნა</h2>
          <p className="text-on-surface-variant mb-3">
            საავტორო უფლებების დარღვევის შესახებ შეტყობინება გამოგვიგზავნეთ შემდეგ მისამართზე:
          </p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>
          <p className="text-on-surface-variant mt-4 mb-3">შეტყობინება უნდა შეიცავდეს:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-8">
            <li>თქვენი სახელისა და საკონტაქტო მონაცემების მითითებას;</li>
            <li>დაცული ნაწარმოების აღწერას;</li>
            <li>ჩვენი ვებსაიტის ზუსტ ბმულს, რომელზეც განთავსებულია სადავო მასალა;</li>
            <li>განმარტებას, თუ რატომ თვლით, რომ მასალა არღვევს თქვენს უფლებებს;</li>
            <li>დასტურს, რომ თქვენ ხართ უფლებების მფლობელი ან უფლებამოსილი ხართ იმოქმედოთ მის სახელით.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">2. DMCA-ს ფარგლებში წარდგენილი შეტყობინებები</h2>
          <p className="text-on-surface-variant mb-3">
            თუ შეტყობინება წარდგენილია აშშ-ის Digital Millennium Copyright Act-ის (DMCA) ფარგლებში და შესაბამისი პროცედურა გამოიყენება, მასში შესაძლოა საჭირო იყოს კანონით განსაზღვრული დამატებითი ინფორმაცია, მათ შორის:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-4">
            <li>უფლებების მფლობელის ან უფლებამოსილი წარმომადგენლის ფიზიკური ან ელექტრონული ხელმოწერა;</li>
            <li>ნაწარმოების იდენტიფიცირება;</li>
            <li>სადავო მასალისა და მისი ადგილმდებარეობის ზუსტი მითითება;</li>
            <li>საკონტაქტო ინფორმაცია;</li>
            <li>კეთილსინდისიერი განცხადება, რომ მასალის გამოყენება არ არის ავტორის, უფლებამოსილი წარმომადგენლის ან კანონის მიერ ნებადართული;</li>
            <li>განცხადება, რომ შეტყობინებაში მოცემული ინფორმაცია ზუსტია და მომჩივანი უფლებამოსილია იმოქმედოს უფლებების მფლობელის სახელით, კანონით მოთხოვნილი პასუხისმგებლობის გათვალისწინებით.</li>
          </ul>
          <p className="text-on-surface-variant mb-8">
            თუ შეტყობინება არასრულია, შეიძლება საჭირო გახდეს დამატებითი ინფორმაციის მიწოდება.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">3. საჩივრის განხილვა</h2>
          <p className="text-on-surface-variant mb-3">
            შეტყობინების მიღების შემდეგ განვიხილავთ მის შინაარსს და, საჭიროების შემთხვევაში, მოვითხოვთ დამატებით ინფორმაციას.
          </p>
          <p className="text-on-surface-variant mb-3">
            თუ შესაბამისი გარემოებები ამას მოითხოვს, შეიძლება დროებით შევზღუდოთ მასალაზე წვდომა ან წავშალოთ ის.
          </p>
          <p className="text-on-surface-variant mb-8">
            ყველა მოთხოვნა განიხილება კონკრეტული გარემოებებისა და მოქმედი კანონმდებლობის გათვალისწინებით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">4. საჩივარზე პასუხი</h2>
          <p className="text-on-surface-variant mb-3">
            შესაძლებლობის ფარგლებში, საჩივრის ავტორს ვაცნობებთ მის განხილვასთან დაკავშირებულ შესაბამის გადაწყვეტილებას.
          </p>
          <p className="text-on-surface-variant mb-8">
            საჩივრის განხილვის ვადა შეიძლება განსხვავდებოდეს მოთხოვნის სირთულისა და საჭირო ინფორმაციის მიხედვით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">5. საწინააღმდეგო შეტყობინებები</h2>
          <p className="text-on-surface-variant mb-3">
            თუ მასალა წაიშალა ან მასზე წვდომა შეიზღუდა და თვლით, რომ ეს შეცდომით მოხდა, დაგვიკავშირდით შესაბამისი განმარტებითა და დამადასტურებელი ინფორმაციით.
          </p>
          <p className="text-on-surface-variant mb-3">
            თუ კონკრეტულ შემთხვევაში გამოიყენება აშშ-ის DMCA-ს საწინააღმდეგო შეტყობინების პროცედურა, შესაძლოა საჭირო იყოს კანონით დადგენილი ფორმალური მოთხოვნების შესრულება.
          </p>
          <p className="text-on-surface-variant mb-8">
            საწინააღმდეგო შეტყობინების გაგზავნამდე რეკომენდებულია სამართლებრივი კონსულტაციის მიღება.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">6. განმეორებითი დარღვევები</h2>
          <p className="text-on-surface-variant mb-8">
            თუ გამოვლინდება საავტორო უფლებების განმეორებითი დარღვევები, შესაძლოა მივიღოთ შესაბამისი ზომები მოქმედი კანონმდებლობისა და კონკრეტული გარემოებების გათვალისწინებით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">7. საკონტაქტო ინფორმაცია</h2>
          <p className="text-on-surface-variant mb-3">საავტორო უფლებების საჩივრებისთვის:</p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>
          <p className="text-on-surface-variant/80 text-sm mt-8 border-t border-outline-variant/20 pt-6">
            ეს გვერდი წარმოადგენს საჩივრების მიღების პროცედურის აღწერას და თავისთავად არ ნიშნავს, რომ ვებსაიტი აკმაყოფილებს აშშ-ის DMCA-ს ყველა მოთხოვნას ან სარგებლობს კანონით გათვალისწინებული რაიმე კონკრეტული დაცვით.
          </p>
        </div>
      </div>
    </div>
  )
}
