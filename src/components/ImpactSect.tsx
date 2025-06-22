import {
  CardContent,
  //   CardDescription,
  //   CardHeader,
  //   CardTitle,
  Card,
} from "../ui/card";

const ImpactSect = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from the lives we've touched and the communities we've
            transformed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Success story"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Fatima's Story
                  </h4>
                  <p className="text-gray-600">Widow Empowerment Program</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "After losing my husband, I thought my life was over. The
                Adeyemi Relief Initiative gave me hope and skills to start my
                own tailoring business. Today, I can support my three children
                and even employ two other women."
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Success story"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ahmed's Journey
                  </h4>
                  <p className="text-gray-600">Education Support Program</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "I had dropped out of school to help my family. Thanks to ARI's
                scholarship program, I'm now in my final year of secondary
                school and dream of becoming a doctor to help others like they
                helped me."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSect;
