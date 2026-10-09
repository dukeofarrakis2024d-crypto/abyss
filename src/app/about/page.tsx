import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Abyss',
  description: 'ჩვენ შესახებ - Abyss',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/20 shadow-xl">
        <div className="prose prose-invert prose-headings:font-headline-md prose-headings:font-bold prose-h1:text-primary prose-a:text-primary hover:prose-a:text-primary-fixed max-w-none">
          <h1 className="text-3xl md:text-4xl mb-8">ჩვენ შესახებ</h1>

          <p className="text-on-surface-variant text-lg">
            კეთილი იყოს თქვენი მობრძანება <strong>abyss</strong>-ზე!
          </p>

          <p className="text-on-surface-variant text-lg mb-8">
            <strong>abyss</strong> არის ქართულენოვანი ონლაინ პლატფორმა მანჰუასა და კომიქსების მოყვარულთათვის. ჩვენი მიზანია, მკითხველებს შევთავაზოთ კომფორტული, მარტივი და სასიამოვნო სივრცე, სადაც მათ შეუძლიათ გაეცნონ სხვადასხვა ჟანრის ისტორიებსა და პერსონაჟებს.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">რას გთავაზობთ?</h2>
          <p className="text-on-surface-variant mb-4">
            ჩვენი პლატფორმის მიზანია, მკითხველებს შევთავაზოთ:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-on-surface-variant mb-8">
            <li>სხვადასხვა ჟანრის მანჰუა და კომიქსები;</li>
            <li>ახალი თავებისა და განახლებების შესახებ ინფორმაცია;</li>
            <li>მოსახერხებელი კითხვის გამოცდილება როგორც კომპიუტერზე, ისე მობილურ ტელეფონზე;</li>
            <li>მარტივი ნავიგაცია, ძიება და ჟანრების მიხედვით დალაგებული კატალოგი.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">ჩვენი მიზანი</h2>
          <p className="text-on-surface-variant">
            გვინდა, ქართულენოვან მკითხველებს ჰქონდეთ მოსახერხებელი სივრცე მანჰუასა და კომიქსების აღმოსაჩენად და წასაკითხად.
          </p>
          <p className="text-on-surface-variant mt-3 mb-8">
            ვცდილობთ, პლატფორმაზე განთავსებული მასალა იყოს წარმოდგენილი ავტორებისა და საავტორო უფლებების მფლობელთა უფლებების პატივისცემით. მასალა უნდა ქვეყნდებოდეს შესაბამისი ნებართვით ან კანონით დაშვებული საფუძვლით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">საავტორო უფლებები</h2>
          <p className="text-on-surface-variant">
            ჩვენ პატივს ვცემთ ავტორების, მხატვრების, გამომცემლებისა და სხვა უფლებამოსილი პირების ინტელექტუალურ საკუთრებას.
          </p>
          <p className="text-on-surface-variant mt-3 mb-8">
            თუ თვლით, რომ ჩვენს ვებსაიტზე განთავსებული მასალა არღვევს თქვენს უფლებებს, გთხოვთ, დაგვიკავშირდეთ ჩვენი <Link href="/copyright" className="underline">საავტორო უფლებების გვერდზე</Link> მითითებული საკონტაქტო ინფორმაციის გამოყენებით.
          </p>

          <h2 className="text-2xl mt-12 mb-4 text-on-surface">დაგვიკავშირდით</h2>
          <p className="text-on-surface-variant">
            შეკითხვების, წინადადებების ან თანამშრომლობის შეთავაზების შემთხვევაში მოგვწერეთ:
          </p>
          <p className="text-on-surface-variant font-medium text-lg my-4 bg-surface-container p-4 rounded-xl inline-block border border-outline-variant/30">
            <strong>ელფოსტა:</strong> <a href="mailto:abyssmanhua@gmail.com">abyssmanhua@gmail.com</a>
          </p>

          <p className="text-primary font-medium text-lg mt-8">
            მადლობა, რომ სტუმრობთ abyss-ს!
          </p>
        </div>
      </div>
    </div>
  )
}
