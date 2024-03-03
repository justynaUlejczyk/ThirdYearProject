import 'package:companysite/desktop/desktop-footer.dart';
import 'package:companysite/desktop/desktop-header.dart';
import 'package:companysite/desktop/desktop-points.dart';
import 'package:companysite/desktop/desktop-projects.dart';
import 'package:companysite/desktop/desktop-services.dart';
import 'package:companysite/desktop/desktop-who-are-we.dart';
import 'package:companysite/ipad/tablet-5-points.dart';
import 'package:companysite/ipad/tablet-footer.dart';
import 'package:companysite/ipad/tablet-services.dart';
import 'package:companysite/ipad/tablet-who-we-are.dart';
import 'package:companysite/mobile/mobile-footer.dart';
import 'package:companysite/mobile/mobile-header.dart';
import 'package:companysite/mobile/mobile-points.dart';
import 'package:companysite/mobile/mobile-service.dart';
import 'package:companysite/mobile/mobile-who.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'BitByBit',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth >= 1200) {
            // Desktop layout
            return buildDesktopLayout(context);
          } else if (constraints.maxWidth >= 600) {
            // Tablet (iPad) layout
            return buildTabletLayout(context);
          } else {
            // Mobile layout
            return buildMobileLayout(context);
          }
        },
      ),
    );
  }

  Widget buildDesktopLayout(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double containerWidth = screenWidth * 0.8;
    return ListView(children: [
      const desktop_header(),
      const desktop_who_are_we(),
      const desktop_5points(),
      const desktop_services(),
      desktop_projects(containerWidth: containerWidth),
      const desktop_footer(),
    ]);
  }

  Widget buildTabletLayout(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double containerWidth = screenWidth * 0.8;
    return ListView(children: [
      const desktop_header(),
      const tablet_who_are_we(),
      const tablet_5points(),
      const tablet_services(),
      desktop_projects(containerWidth: containerWidth),
      const tablet_footer(),
    ]);
  }

  Widget buildMobileLayout(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double containerWidth = screenWidth * 0.8;
    return ListView(children: [
      const mobile_header(),
      const mobile_who(),
      const mobile_5points(),
      const mobile_services(),
      desktop_projects(containerWidth: containerWidth),
      const mobile_footer(),
    ]);
  }
}
