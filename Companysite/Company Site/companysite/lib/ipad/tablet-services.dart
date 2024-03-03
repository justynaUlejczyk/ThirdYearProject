import 'package:companysite/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class tablet_services extends StatelessWidget {
  const tablet_services({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double cardWidth = MediaQuery.of(context).size.width < 1000 ? 350 : 450;
    double cardHeight = MediaQuery.of(context).size.width < 800 ? 350 : 300;

    return Container(
      height: 1200,
      width: double.infinity,
      decoration: BoxDecoration(
        color: const Color(0xFFe0c3fc).withOpacity(0.4),
      ),
      child: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth > 1000) {
            // Desktop layout
            return Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Animate(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Container(
                        width: cardWidth,
                        height: 600,
                        decoration: BoxDecoration(
                          color: const Color(0xFF4B426D),
                          borderRadius: BorderRadius.circular(25),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.grey.withOpacity(0.5),
                              spreadRadius: 5,
                              blurRadius: 10,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: const Column(
                          children: [
                            SizedBox(
                              height: 50,
                            ),
                            MyCustomText(
                                text: 'Full-Stack Development', fontSize: 24),
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.symmetric(horizontal: 25),
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: [
                                    MyCustomText(
                                      text:
                                          'Description: End-to-end development services covering both front-end and back-end aspects of a software application',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          'Process: This service involves designing and implementing the user interface (UI), developing server-side logic, managing databases, and integrating third-party services. Full-stack developers are proficient in a range of technologies and can handle the entire software development process',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          'Key Deliverables: Fully functional and integrated software applications with a seamless user experience',
                                      fontSize: 14,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                      // Mobile
                      Container(
                        width: cardWidth,
                        height: 600,
                        decoration: BoxDecoration(
                          color: const Color(0xFF4B426D),
                          borderRadius: BorderRadius.circular(25),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.grey.withOpacity(0.5),
                              spreadRadius: 5,
                              blurRadius: 10,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: const Column(
                          children: [
                            SizedBox(
                              height: 50,
                            ),
                            MyCustomText(
                                text: 'Mobile App Development', fontSize: 24),
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.symmetric(horizontal: 25),
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: [
                                    MyCustomText(
                                      text:
                                          'Description: Creating custom mobile applications for various platforms, such as iOS and Android',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          'Process: This service includes requirements analysis, UI/UX design, mobile app development, testing, and deployment. Mobile app developers are familiar with platform-specific technologies and design guidelines',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          'Key Deliverables: Native or cross-platform mobile applications that meet client specifications and adhere to industry standards',
                                      fontSize: 14,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                      // web dev
                    ],
                  ),
                )
                    .slideY(
                      begin: 0.1,
                      delay: const Duration(milliseconds: 750),
                      duration: const Duration(milliseconds: 500),
                    )
                    .fadeIn(
                      duration: const Duration(milliseconds: 500),
                      delay: const Duration(milliseconds: 500),
                    ),
                Animate(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 100),
                    child: Container(
                      width: double.infinity,
                      height: cardHeight,
                      decoration: BoxDecoration(
                        color: const Color(0xFF4B426D),
                        borderRadius: BorderRadius.circular(25),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 5,
                            blurRadius: 10,
                            offset: const Offset(0, 3),
                          ),
                        ],
                      ),
                      child: const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            MyCustomText(
                                text: 'Custom Web Development', fontSize: 24),
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.symmetric(horizontal: 25),
                                child: Column(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: [
                                    MyCustomText(
                                      text:
                                          'Description: Building tailored web applications and websites to address specific business needs',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          'Process: Custom web development involves front-end development for user interfaces, back-end development for server-side logic, and database integration. Web developers use a variety of programming languages, frameworks, and tools to create scalable and responsive web applications',
                                      fontSize: 14,
                                    ),
                                    MyCustomText(
                                      text:
                                          "Key Deliverables: Custom websites and web applications that are secure, performant, and aligned with the client's objectives",
                                      fontSize: 14,
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                )
                    .slideY(
                      begin: 0.1,
                      delay: const Duration(milliseconds: 750),
                      duration: const Duration(milliseconds: 500),
                    )
                    .fadeIn(
                      duration: const Duration(milliseconds: 500),
                      delay: const Duration(milliseconds: 500),
                    ),
              ],
            );
          } else {
            // <800 layout
            return Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                // full stack < 800
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 75),
                  child: Container(
                    width: double.infinity,
                    height: cardHeight,
                    decoration: BoxDecoration(
                      color: const Color(0xFF4B426D),
                      borderRadius: BorderRadius.circular(25),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey.withOpacity(0.5),
                          spreadRadius: 5,
                          blurRadius: 10,
                          offset: const Offset(0, 3),
                        ),
                      ],
                    ),
                    child: const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          MyCustomText(
                              text: 'Full-Stack Development', fontSize: 24),
                          Expanded(
                            child: Padding(
                              padding: EdgeInsets.symmetric(horizontal: 25),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  MyCustomText(
                                    text:
                                        'Description: End-to-end development services covering both front-end and back-end aspects of a software application',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        'Process: This service involves designing and implementing the user interface (UI), developing server-side logic, managing databases, and integrating third-party services. Full-stack developers are proficient in a range of technologies and can handle the entire software development process',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        "Key Deliverables: Fully functional and integrated software applications with a seamless user experience",
                                    fontSize: 14,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                // mobile < 800
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 75),
                  child: Container(
                    width: double.infinity,
                    height: cardHeight,
                    decoration: BoxDecoration(
                      color: const Color(0xFF4B426D),
                      borderRadius: BorderRadius.circular(25),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey.withOpacity(0.5),
                          spreadRadius: 5,
                          blurRadius: 10,
                          offset: const Offset(0, 3),
                        ),
                      ],
                    ),
                    child: const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          MyCustomText(
                              text: 'Mobile App Development', fontSize: 24),
                          Expanded(
                            child: Padding(
                              padding: EdgeInsets.symmetric(horizontal: 25),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  MyCustomText(
                                    text:
                                        'Description: Creating custom mobile applications for various platforms, such as iOS and Android',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        'Process: This service includes requirements analysis, UI/UX design, mobile app development, testing, and deployment. Mobile app developers are familiar with platform-specific technologies and design guidelines',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        "Key Deliverables: Native or cross-platform mobile applications that meet client specifications and adhere to industry standards",
                                    fontSize: 14,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                // web < 800
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 75),
                  child: Container(
                    width: double.infinity,
                    height: cardHeight,
                    decoration: BoxDecoration(
                      color: const Color(0xFF4B426D),
                      borderRadius: BorderRadius.circular(25),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey.withOpacity(0.5),
                          spreadRadius: 5,
                          blurRadius: 10,
                          offset: const Offset(0, 3),
                        ),
                      ],
                    ),
                    child: const Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          MyCustomText(
                              text: 'Custom Web Development', fontSize: 24),
                          Expanded(
                            child: Padding(
                              padding: EdgeInsets.symmetric(horizontal: 25),
                              child: Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  MyCustomText(
                                    text:
                                        'Description: Building tailored web applications and websites to address specific business needs',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        'Process: Custom web development involves front-end development for user interfaces, back-end development for server-side logic, and database integration. Web developers use a variety of programming languages, frameworks, and tools to create scalable and responsive web applications',
                                    fontSize: 14,
                                  ),
                                  MyCustomText(
                                    text:
                                        "Key Deliverables: Custom websites and web applications that are secure, performant, and aligned with the client's objectives",
                                    fontSize: 14,
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            );
          }
        },
      ),
    );
  }
}
