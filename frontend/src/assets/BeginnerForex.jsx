import React from 'react'

function BeginnerForex() {
    const lessons = [
  {
    title: 'Forex 101: Lesson 1 of 7',
    desc: 'In this lesson, we explore: Overview of the foreign exchange market, Understanding currency pairs, and Key terms and concepts in forex trading...',
    img: '../public/images/background.png',
  },
  {
    title: 'Forex 101: Lesson 2 of 7',
    desc: 'In this lesson, we explore: Understanding charts, Understanding technical indicators, and Using technical analysis to make trading decisions...',
    img: '../public/images/background.png',
  },
  {
    title: 'Forex 101: Lesson 3 of 7',
    desc: 'In this lesson, we explore: Understanding economic reports and their impact on currency prices, Analyzing news and events to predict...',
    img: '../public/images/background.png',
  },
  {
    title: 'Forex 101: Lesson 4 of 7',
    desc: 'In this lesson, we explore: Understanding the risks involved in forex trading, Implementing risk management strategies, and Using stop-loss and...',
    img: '../public/images/background.png',
  },
];
  return (
    <div>     <div className="container-fluid bg-dark text-white py-5">
      <div className="container">
        <h2 className="fw-bold bg-dark text-white text-center mb-5">Beginner Forex Tutorial</h2>

        <div className="row border-top border-primary pt-4">
          <div className="col-lg-6 mb-4">
            <div className="d-flex flex-column bg-dark text-white" style={{ height: '400px' }}>
              <div className="position-relative flex-fill">
                <img
                  src={lessons[0].img}
                  className="img-fluid w-100 h-100"
                  alt="Lesson 1"
                  style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center px-3">
                  <h3 className="fw-bold">{lessons[0].title}</h3>
                </div>
              </div>
              <div className="bg-dark text-white p-3" style={{ height: '150px' }}>
                <h5 className="fw-bold">{lessons[0].title}</h5>
                <p className="mb-0">{lessons[0].desc}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {lessons.slice(1).map((lesson, index) => (
              <div
                key={index}
                className="d-flex bg-dark text-white mb-4 border-bottom border-primary"
                style={{ height: '180px' }}
              >
                <div className="flex-shrink-0" style={{ width: '180px', height: '100%' }}>
                  <img
                    src={lesson.img}
                    alt={lesson.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="ms-3 d-flex flex-column justify-content-center" style={{ flex: 1 }}>
                  <h6 className="fw-bold mb-2">{lesson.title}</h6>
                  <p className="mb-0">{lesson.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BeginnerForex