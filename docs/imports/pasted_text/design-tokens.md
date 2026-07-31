APPENDIX A 
Design Token System 
A.1 Introduction 
Design Tokens are the single source of truth for all visual properties in CycloneGuard. 
They ensure consistency across Figma, React components, CSS variables, and future 
mobile applications. 
Every visual attribute should be referenced through tokens rather than hard-coded 
values. 
A.2 Color Tokens 
Brand 
Token 
Value 
Usage 
color.primary.900 #0B2545 Sidebar, Header 
color.primary.700 #1479FF Primary Buttons 
color.primary.500 #3B82F6 Links 
color.accent.cyan #2DD4BF AI Widgets 
Status Colors 
Token 
status.success 
status.warning 
status.error 
status.info 
status.oAline 
Value 
Meaning 
#10B981 Operational 
#F59E0B Pending 
#EF4444 Critical 
#3B82F6 Information 
#6B7280 OAline 
status.maintenance #8B5CF6 Maintenance 
Background 
Token 
Value 
bg.primary 
#F8FAFC 
bg.secondary #FFFFFF 
bg.surface 
bg.dark 
bg.overlay 
#FFFFFF 
#07111E 
rgba(0,0,0,.45) 
A.3 Typography Tokens 
Font Families 
font.primary 
Inter 
font.fallback 
Segoe UI, Roboto, Arial 
Font Sizes 
Token 
text.xs 
text.sm 
Value 
12 px 
14 px 
text.base 16 px 
text.lg 
text.xl 
text.2xl 
text.3xl 
18 px 
20 px 
24 px 
30 px 
Token 
Value 
text.4xl 
36 px 
text.display 48 px 
Font Weights 
Token 
Value 
weight.regular 400 
weight.medium 500 
weight.semibold 600 
weight.bold 
700 
A.4 Spacing Tokens 
Based on an 8-point grid. 
Token Value 
space.1 4 
space.2 8 
space.3 12 
space.4 16 
space.5 24 
space.6 32 
space.7 40 
space.8 48 
space.9 64 
space.10 80 
space.11 96 
A.5 Radius Tokens 
Token 
Value 
radius.sm 8 px 
radius.md 10 px 
radius.lg 16 px 
radius.xl 20 px 
radius.full 999 px 
A.6 Shadow Tokens 
Token 
Usage 
shadow.0 None 
shadow.1 Cards 
shadow.2 Hover 
shadow.3 Dropdown 
shadow.4 Modal 
shadow.5 Emergency Dialog 
A.7 Motion Tokens 
Token 
motion.fast 
motion.normal 
motion.slow 
Value 
100 ms 
200 ms 
250 ms 
motion.emergency 80 ms 
A.8 Z-Index Tokens 
Layer 
Value 
Base 
Header 
Sidebar 
Drawer 
Modal 
Toast 
1 
100 
200 
400 
600 
800 
Emergency Banner 1000 
A.9 Breakpoint Tokens 
Token 
mobile 
tablet 
laptop 
desktop 
Width 
480 px 
768 px 
1024 px 
1440 px 
command-center 1920 px 
A.10 Icon Tokens 
Default 
24 px 
Dashboard 
32 px 
KPI 
40 px 
Large Empty State 
64 px 
APPENDIX B 
Component Inventory Matrix 
This appendix catalogs every reusable UI component in the design system. 
B.1 Foundation Components 
Component Variants 
Button 
States 
Primary, Secondary, Ghost, Danger Default, Hover, Disabled, Loading 
Typography Display–Caption 
Icon 
Divider 
Filled, Outline 
Horizontal, Vertical 
N/A 
Default 
Default 
B.2 Navigation Components 
Component 
Sidebar 
Header 
Breadcrumb 
Tabs 
Variants 
Expanded, Collapsed 
Standard, Emergency 
Standard 
Fixed, Scrollable 
Command Palette Global 
B.3 Data Display 
Component Variants 
KPI Card 
12 
Asset Card 8 
Alert Card 
5 
Component Variants 
Statistic Card 6 
Timeline 
Vertical 
Status Chip 10 
Badge 
Filled, Outline 
B.4 Data Entry 
Component Variants 
Text Field 
Search 
Dropdown 
Date Picker 
File Upload 
Default, Error 
Global, Inline 
Single, Multi 
Single, Range 
Drag, Browse 
Camera Upload Mobile 
B.5 Tables 
Component Variants 
Data Table Compact 
Data Table Comfortable 
Data Table Dense 
Row Actions Menu 
Pagination Standard 
B.6 Maps 
Component Variants 
GIS Map 
GIS Map 
GIS Map 
GIS Map 
City 
Zone 
Ward 
Asset 
Layer Switch Floating 
Marker Popup Standard 
B.7 Feedback 
Component Variants 
Toast 
Toast 
Toast 
Toast 
Banner 
Banner 
Dialog 
Dialog 
Success 
Error 
Warning 
Info 
Emergency 
OAline 
Confirmation 
Error 
B.8 AI Components 
Component 
AI Card 
Variants 
Recommendation 
Confidence Gauge Percentage 
Risk Widget 
Prediction Card 
Heat 
Asset 
B.9 Weather Components 
Component Variants 
Weather Card Compact 
Weather Panel Detailed 
Cyclone Widget Full 
B.10 Reports 
Component Variants 
Report Header Executive 
KPI Summary Standard 
Export Dialog Multi-format 
B.11 Screen Mapping 
Component Used In 
KPI Card 
Asset Card 
Alert Card 
Timeline 
GIS Map 
Data Table 
AI Card 
Dashboard 
Assets 
Alerts 
Assets, Alerts 
Dashboard, GIS 
Assets, Reports 
Dashboard, Analytics 
Weather Widget Dashboard 
APPENDIX C 
Design Do's & Don'ts 
This appendix establishes mandatory design rules to preserve visual consistency across 
all current and future modules. 
C.1 Layout 
Do 
 Align all content to the grid.  
 Use consistent spacing tokens.  
 Keep page headers consistent.  
 Maintain balanced whitespace.  
Don't 
 Place components outside the grid.  
 Mix arbitrary spacing values.  
 Create inconsistent page layouts.  
 Overcrowd dashboards.  
C.2 Color Usage 
Do 
 Use semantic colors for operational status.  
 Reserve brand colors for navigation and primary actions.  
 Maintain suAicient contrast.  
Don't 
 Use random accent colors.  
 Encode status by color alone.  
 Overuse red for non-critical information.  
C.3 Typography 
Do 
 Use the defined type scale.  
 Keep headings concise.  
 Use tabular numbers for KPIs.  
Don't 
 Introduce new font families.  
 Mix inconsistent font sizes.  
 Use all caps for long labels.  
C.4 Buttons 
Do 
 Provide one clear primary action per view.  
 Use destructive styles only for destructive actions.  
 Include loading states.  
Don't 
 Place multiple primary buttons together.  
 Hide important actions in ambiguous menus.  
 Disable buttons without explanation.  
C.5 Forms 
Do 
 Group related fields.  
 Validate inline.  
 Preserve entered data after errors.  
Don't 
 Rely on placeholders as labels.  
 Display technical validation messages.  
 Clear forms after failed submissions.  
C.6 Tables 
Do 
 Enable sorting and filtering.  
 Keep row heights consistent.  
 Use sticky headers for large datasets.  
Don't 
 Force horizontal scrolling on common resolutions.  
 Hide key identifiers.  
 Mix unrelated data in the same table.  
C.7 Maps 
Do 
 Use consistent marker icons.  
 Cluster dense markers.  
 Display contextual information in side panels.  
Don't 
 Overlap unreadable markers.  
 Use inconsistent color legends.  
 Hide critical map controls.  
C.8 Dashboards 
Do 
 Place KPIs above detailed analytics.  
 Keep the GIS map prominently visible.  
 Surface unresolved alerts near the top.  
Don't 
 Bury critical alerts below the fold.  
 Use decorative graphics in operational areas.  
 Overload users with excessive charts.  
C.9 Motion 
Do 
 Animate to communicate state changes.  
 Keep transitions brief and consistent.  
 Respect reduced-motion preferences.  
Don't 
 Use flashy animations.  
 Delay critical actions with long transitions.  
 Animate without purpose.  
C.10 Accessibility 
Do 
 Provide visible focus states.  
 Meet WCAG 2.2 AA contrast.  
 Support keyboard navigation.  
 Include meaningful labels.  
Don't 
 Depend on color alone.  
 Remove focus outlines without replacement.  
 Use tiny touch targets.  
C.11 Security UX 
Do 
 Confirm destructive actions.  
 Display audit information.  
 Clearly indicate data freshness.  
Don't 
 Expose technical system details in error messages.  
 Show unauthorized actions without explanation.  
 Hide session status for privileged users.  
C.12 Overall Experience 
Do 
 Design for decision-making under pressure.  
 Prioritize operational clarity.  
 Keep interactions predictable.  
 Reuse approved components.  
 Maintain consistency across modules.  
Don't 
 Introduce one-oA UI patterns.  
 Optimize for aesthetics over usability.  
 Change terminology between screens.  
 Sacrifice readability for visual eAects.  
DOCUMENT 2 
Screen-by-Screen UI & UX Design Specification 
Project 
CycloneGuard GVMC 
Version 
1.0 
Document Purpose 
This document provides the detailed visual and interaction specification for every 
screen of the CycloneGuard GVMC platform. 
Each screen includes: 
 Purpose  
 Users  
 Layout  
 Sections  
 Components  
 Widgets  
 Navigation  
 Interactions  
 States  
 Responsive behaviour  
 Accessibility  
 API dependencies  
 AI behaviour  
 Map behaviour  
 Loading states  
 Empty states  
 Error states  
The objective is to provide enough detail that Figma AI can generate production-ready 
enterprise interfaces without requiring design assumptions. 
Table of Contents 
PART 1 
Authentication 
1. Splash Screen  
2. Login  
3. Forgot Password  
4. OTP Verification  
5. Reset Password  
PART 2 
Executive Dashboards 
6. Commissioner Dashboard  
7. Disaster Head Dashboard  
8. Zone Supervisor Dashboard  
9. Field OAicer Dashboard  
10. Command Center Dashboard  
PART 3 
GIS 
11. City Map  
12. Zone Map  
13. Ward Map  
14. Asset Map  
15. Weather Map  
PART 4 
Assets 
16. Asset Registry  
17. Asset Details  
18. Asset Timeline  
19. Maintenance  
20. Asset Analytics  
PART 5 
Preparedness 
21. Checklist List  
22. Checklist Details  
23. Inspection Form  
24. Approval Queue  
25. OAline Queue  
PART 6 
Alerts 
26. Alert Center  
27. Alert Details  
28. Broadcast  
29. Escalation  
PART 7 
Resources 
30. Resource Dashboard  
31. Pumps  
32. Generators  
33. Vehicles  
34. StaA 
35. Transfer  
PART 8 
Teams 
36. Users  
37. Departments  
38. Attendance  
39. Activity  
PART 9 
Analytics 
40. Readiness  
41. Trends  
42. Predictions  
43. AI Insights  
PART 10 
Reports 
44. Executive Report  
45. Operational Report  
46. Export Center  
PART 11 
Administration 
47. User Management  
48. Roles  
49. Zone Management  
50. Settings  
PART 12 
Mobile 
51. My Tasks  
52. Mobile Checklist  
53. Camera Upload  
54. OAline Sync  
55. Profile  
PART 13 
System 
56. Notifications  
57. Search  
58. Audit Log  
59. Help  
60. Error Pages  
Screen Specification Format 
Every screen will follow exactly the same structure. 
Screen Metadata 
Screen Name 
Purpose 
Users 
Priority 
Navigation Path 
Permissions 
Devices 
Layout 
Overall Layout 
Grid 
Sections 
Spacing 
Responsive Behaviour 
Components 
Cards 
Buttons 
Tables 
Maps 
Forms 
Charts 
Dialogs 
Drawers 
Widgets 
Interaction 
Hover 
Click 
Keyboard 
Touch 
Navigation 
Animations 
Data 
Displayed Information 
API 
Real-time Updates 
Caching 
OAline Behaviour 
States 
Loading 
Empty 
Error 
OAline 
Success 
Warning 
Critical 
Accessibility 
Keyboard 
Screen Reader 
Contrast 
Focus 
Touch Targets 
Future Expansion 
SCREEN 1 
Splash Screen 
Screen Purpose 
The Splash Screen is the application's initial loading experience. It verifies 
authentication, initializes essential services, loads user preferences, and prepares the 
application before routing users to the appropriate dashboard. 
It should reinforce trust, professionalism, and reliability without unnecessarily delaying 
access. 
Users 
 All authenticated users  
 First-time users  
 Returning users  
Devices 
 Desktop  
 Tablet  
 Mobile  
Display Duration 
 1–2 seconds when initialization completes successfully.  
 Skip immediately if resources are already cached.  
 Never exceed 3 seconds unless waiting for a critical backend response.  
Primary Objectives 
 Display CycloneGuard branding.  
 Verify authentication token.  
 Load user profile.  
 Load role and permissions.  
 Establish real-time connection.  
 Check oAline status.  
 Determine landing page.  
Layout 
Desktop 
+-----------------------------------------------------------+ 
GVMC LOGO 
               CycloneGuard 
 
 Cyclone Preparedness & Asset Readiness Platform 
 
                 [Animated Loader] 
 
          Initializing Secure Session... 
 
               Version 1.0.0 
 ------------------------------------------------------------- 
 
Mobile 
+----------------------+ 
 
GVMC Logo 
 
CycloneGuard 
 
Loader 
 
Initializing... 
 
Version 
 
+----------------------+ 
 
Components 
Branding 
Top-center 
Contains 
 GVMC Logo  
 CycloneGuard Logo  
 Product Name  
Loader 
Preferred 
Animated circular progress indicator or subtle pulse animation. 
Avoid large decorative animations. 
Status Message 
Examples 
Initializing Services... 
Loading Dashboard... 
Connecting to Live Updates... 
Preparing GIS Engine... 
Synchronizing Preferences... 
Messages should change dynamically based on initialization progress. 
Version Information 
Bottom-center 
Example 
Version 1.0.0 
Build 2026.07.31 
Environment 
Production 
 
Initialization Workflow 
Open App 
      ↓ 
Display Splash 
      ↓ 
Validate Token 
      ↓ 
Load User 
      ↓ 
Load Permissions 
      ↓ 
Initialize APIs 
      ↓ 
Connect WebSocket 
      ↓ 
Check OAline Queue 
      ↓ 
Determine User Role 
      ↓ 
Navigate Dashboard 
 
Routing Logic 
Role Landing Screen 
Commissioner Commissioner Dashboard 
Disaster Head Operations Dashboard 
Supervisor Zone Dashboard 
Role 
Landing Screen 
Field OAicer My Tasks 
Administrator Admin Dashboard 
Loading States 
State 1 
Initializing 
State 2 
Loading Profile 
State 3 
Connecting Live Services 
State 4 
Preparing Dashboard 
Error States 
Authentication Failed 
Show: 
Session expired. Please sign in again. 
Button 
Go to Login 
Server Unavailable 
Show: 
Unable to contact CycloneGuard services. 
Buttons 
Retry 
OAline Mode (if supported) 
OAline Behaviour 
If cached authentication is valid: 
 Continue in oAline mode.  
 Queue synchronization.  
 Display oAline banner after dashboard loads.  
If no valid authentication exists: 
 Redirect to Login.  
Accessibility 
 Loader announced to screen readers.  
 Status messages exposed via ARIA live regions.  
 High contrast logo.  
 No flashing animations.  
 Reduced-motion mode supported.  
Performance Requirements 
 Initial render < 500 ms.  
 Authentication verification begins immediately.  
 Transition to destination screen without visible flicker.  
 Maintain 60 FPS for loader animation.  
API Dependencies 
 Authentication service.  
 User profile service.  
 Permissions service.  
 Configuration service.  
 Notification service.  
 WebSocket gateway.  
 OAline storage manager.  
Figma Notes 
The splash screen should feel oAicial and trustworthy, using generous whitespace, 
centered branding, and subtle motion. It should avoid marketing-style visuals and 
instead communicate that the platform is securely preparing a mission-critical 
environment. 
SCREEN 2 
Login Screen 
Screen Metadata 
Property 
Value 
Screen Name Login 
Module 
Users 
Priority 
Entry Point 
Devices 
Authentication 
All Users 
Critical 
Web Application 
Desktop, Tablet, Mobile 
Authentication No 
Theme 
Light (Default), Dark Supported 
Screen Purpose 
The Login Screen is the secure gateway into the CycloneGuard platform. 
It should immediately communicate: 
 Government credibility  
 Operational readiness  
 Security  
 Simplicity  
 Professionalism  
Unlike consumer applications, the interface should avoid excessive illustrations or 
marketing content. The emphasis is on trust, clarity, and rapid authentication. 
UX Goals 
Within 5 seconds, users should be able to: 
 Identify the application.  
 Understand its purpose.  
 Enter credentials.  
 Access the system securely.  
 Recover from login issues if necessary.  
Information Hierarchy 
Priority order: 
1. CycloneGuard Branding  
2. Login Form  
3. Primary Login Button  
4. Security Notice  
5. Support Information  
6. Footer  
The login form should remain the visual focal point. 
Desktop Layout (1440 px) 
The desktop interface uses a 12-column responsive grid with a 40/60 split. 
+--------------------------------------------------------------------------------------+ 
| GVMC Header (optional slim strip)                                                    | 
+--------------------------------------------------------------------------------------+ 
|                                      |                                               | 
|  LEFT PANEL (40%)                    | RIGHT PANEL (60%)                             | 
|                                      |                                               | 
|  CycloneGuard Logo                   |             Login Card                        | 
|                                      |                                               | 
|  Mission Statement                   |        Username / Email                       | 
|                                      |        Password                               | 
|  Cyclone Illustration                |        Remember Me                            | 
|                                      |        Forgot Password                        | 
|  Preparedness Quote                  |        Login Button                           | 
|                                      |        Security Notice                        | 
|                                      |                                               | 
+--------------------------------------------------------------------------------------+ 
| Footer: Privacy • Terms • Version • Help                                             | 
+--------------------------------------------------------------------------------------+ 
 
Mobile Layout 
The mobile interface prioritizes speed and readability. 
+---------------------------+ 
|        GVMC Logo          | 
|                           | 
|     CycloneGuard          | 
|                           | 
|   Login Card              | 
|                           | 
| Username                  
| 
| Password                  
| Remember Me               
| Login                     
| Forgot Password           
|                           
| 
| Security Notice           
| 
| 
| 
| 
| 
+---------------------------+ 
Only essential content should be displayed initially. Secondary information is placed 
below the fold. 
Visual Style 
Background 
Use a clean, subtle gradient based on the primary brand colors. 
 Light theme: White → Soft Blue  
 Dark theme: Navy → Deep Slate  
Avoid decorative patterns that distract from the login form. 
Hero Panel (Desktop) 
The left panel should reinforce the platform's mission. 
Suggested content: 
 Simplified map silhouette of GVMC  
 Cyclone preparedness illustration  
 Emergency operations center imagery  
 GIS-inspired abstract graphics  
Do not use stock photography or generic oAice images. 
Login Card 
The login card should appear as a centered elevated surface. 
Recommended dimensions: 
 Width: 420–460 px  
 Corner Radius: 16 px  
 Padding: 32 px  
 Elevation: Medium shadow  
 Background: White (Light) / Dark Surface (Dark)  
Login Card Structure ---------------------------------------- 
GVMC Logo 
CycloneGuard 
Cyclone Preparedness & 
Asset Readiness Platform ---------------------------------------- 
Username 
Password 
Remember Me 
Forgot Password 
---------------------------------------- 
LOGIN ---------------------------------------- 
Security Notice ---------------------------------------- 
Branding 
Top section: 
 GVMC Logo  
 CycloneGuard Logo (optional if combined)  
 Product Name  
 Short tagline  
Example: 
CycloneGuard 
Real-Time Cyclone Preparedness & Asset Readiness Platform 
Form Fields 
Username / Email 
Label: 
Username or OAicial Email 
Placeholder: 
Enter your username 
Features: 
 Auto-focus on page load  
 Clear button after input  
 Keyboard navigation  
 Paste enabled  
 Browser autocomplete (where appropriate)  
Validation: 
 Required  
 Trim whitespace  
 Maximum length: 100 characters  
Password 
Label: 
Password 
Placeholder: 
Enter your password 
Features: 
 Hidden by default  
 Show/Hide toggle  
 Password manager support  
 Caps Lock indicator  
 Paste enabled  
Validation: 
 Required  
 Minimum length enforced by backend policy  
 Do not expose password rules until necessary  
Remember Me 
Checkbox 
Purpose: 
Maintain authenticated session on trusted devices (subject to organizational security 
policies). 
Default: 
Unchecked 
Forgot Password 
Position: 
Right-aligned below the password field. 
Behavior: 
Navigate to the Forgot Password screen. 
Hover state: 
Primary brand color with underline. 
Primary Button 
Label: 
Sign In 
States: 
 Default  
 Hover  
 Pressed  
 Loading  
 Disabled  
Loading state: 
[ Spinner ] Signing In... 
The button remains disabled while the authentication request is in progress to prevent 
duplicate submissions. 
Security Notice 
Displayed beneath the login button. 
Example: 
Authorized access only. All activities are monitored and logged. Unauthorized access is 
prohibited. 
This notice should be visually subtle but clearly readable. 
Validation Rules 
Field 
Rule 
Username Empty 
Username Invalid format (if email 
expected) 
Password Empty 
Credentials Invalid 
Validation should occur: 
 On blur  
 On submit  
 Inline without shifting the layout  
Message 
Username is required. 
Enter a valid email address. 
Password is required. 
Invalid username or password. Please try 
again. 
Error States 
Invalid Credentials 
Display an inline alert above the form. 
⚠ Authentication Failed 
The username or password is incorrect. 
Please verify your credentials and try again. 
The password field should be cleared, while the username remains populated. 
Account Locked 
Your account has been temporarily locked due to multiple unsuccessful login attempts. 
Please contact your administrator or try again later. 
Server Error 
Unable to reach authentication services. 
Please check your connection or try again later. 
Actions: 
 Retry  
 Contact Support  
Success Flow 
Upon successful authentication: 
1. Show loading state.  
2. Retrieve user profile.  
3. Load permissions.  
4. Initialize application services.  
5. Redirect based on role.  
6. Fade transition (200 ms) to the destination dashboard.  
Keyboard Navigation 
Key 
Tab 
Action 
Next field 
Shift + Tab Previous field 
Enter 
Submit form 
Key 
Action 
Esc 
Clear inline alerts (if dismissible) 
The focus order should follow the visual layout. 
Accessibility 
 All form controls must have associated labels.  
 Error messages should be announced through ARIA live regions.  
 Password visibility toggle should expose its state to assistive technologies.  
 Color must not be the sole indicator of errors.  
 Minimum touch target: 44 × 44 px.  
 Maintain WCAG 2.2 AA contrast ratios.  
Responsive Behavior 
Desktop (≥1440 px) 
 Two-column layout.  
 Hero panel visible.  
 Login card centered vertically.  
Laptop (1024–1439 px) 
 Hero panel reduced in width.  
 Login card unchanged.  
Tablet (768–1023 px) 
 Hero panel simplified or hidden.  
 Login card centered.  
Mobile (<768 px) 
 Single-column layout.  
 Hero content moved below the form or omitted.  
 Footer condensed.  
Performance Requirements 
 Initial render under 1 second on a standard broadband connection.  
 Authentication request initiated immediately upon submission.  
 Form interactions should remain responsive at 60 FPS.  
 Assets required for the login page should be optimized to minimize load time.  
API Dependencies 
 Authentication API  
 User Profile API  
 Role & Permissions API  
 Session Management Service  
 Configuration Service  
Analytics Events 
Capture the following events for operational monitoring: 
 Login page viewed  
 Login attempt  
 Login success  
 Login failure  
 Forgot password selected  
 Password visibility toggled  
No sensitive credential information should ever be logged. 
Figma Design Notes 
The login page should convey the feeling of entering a secure government command 
platform rather than a consumer application. Use restrained branding, clean 
typography, balanced whitespace, and a clear visual hierarchy. The interface should 
inspire confidence through simplicity, precision, and consistency. 
SCREEN 3 
Forgot Password 
Screen Metadata 
Property 
Value 
Screen Name Forgot Password 
Module 
Users 
Priority 
Entry Point 
Devices 
Authentication 
All Users 
High 
Login Screen 
Desktop, Tablet, Mobile 
Authentication No 
Theme 
Light & Dark 
Screen Purpose 
The Forgot Password screen enables users to securely begin the account recovery 
process when they cannot access their account. 
The experience should be: 
 Fast  
 Secure  
 Easy to understand  
 Resistant to account enumeration attacks  
 Accessible for all users  
The interface should reassure users without revealing whether a username or email 
exists in the system. 
UX Objectives 
Users should be able to: 
 Identify themselves using their registered username or oAicial email.  
 Request a One-Time Password (OTP).  
 Receive clear next-step guidance.  
 Return to the login page if they remember their password.  
The recovery flow should be completable in under 2 minutes under normal network 
conditions. 
 
User Flow 
Login 
   │ 
Forgot Password 
   │ 
Enter Username / Email 
   │ 
Validate Request 
   │ 
Generate OTP 
   │ 
Send OTP 
   │ 
Navigate to OTP Verification 
 
Desktop Layout 
A clean, centered layout is preferred to maintain user focus. 
+--------------------------------------------------------------------------+ 
 
                           GVMC Logo 
 
                        CycloneGuard 
 
                 Recover Your Account 
 
     Enter your registered username or oAicial email. 
 ---------------------------------------------------------- 
 
 Username / Email 
 ---------------------------------------------------------- 
 
              [ Send Verification Code ] 
 ---------------------------------------------------------- 
 
← Back to Login 
 
Security Information 
 --------------------------------------------------------------------------- 
 
Mobile Layout 
+-----------------------------+ 
 
GVMC Logo 
 
Recover Account 
Username / Email 
Send Verification Code 
Back to Login 
+-----------------------------+ 
The mobile layout removes unnecessary decorative elements and emphasizes a 
straightforward recovery flow. 
Information Hierarchy 
Priority: 
1. Screen Title  
2. Recovery Instructions  
3. Username/Email Field  
4. Primary Action  
5. Back to Login  
6. Security Notice  
Components 
Header 
Contains: 
 GVMC Logo  
 CycloneGuard  
 Screen Title  
Title 
Recover Your Account 
Description 
Example: 
Enter your registered username or oAicial email address. If the information matches an 
existing account, a verification code will be sent to you. 
This wording prevents revealing whether an account exists. 
Input Field 
Label 
Username or OAicial Email 
Placeholder 
Enter your username or oAicial email 
Features 
 Autofocus  
 Paste supported  
 Clear button  
 Keyboard navigation  
 Autocomplete enabled where appropriate  
Validation 
 Required  
 Trim whitespace  
 Maximum 100 characters  
Primary Button 
Label 
Send Verification Code 
States 
 Default  
 Hover  
 Disabled  
 Loading  
 Success  
Loading Example 
[ Spinner ] 
Sending Verification Code... 
Secondary Action 
← Back to Login 
This should always remain visible. 
Security Notice 
Example 
For your security, we do not disclose whether an account exists. If the submitted 
information matches a registered account, a verification code will be sent. 
Validation Rules 
Input 
Empty 
Rule 
Message 
Required Username or email is required. 
Invalid Email Format 
Too Long 
Enter a valid email address. 
Max Length Maximum length exceeded. 
Successful Submission 
After submission: 
 Show loading indicator.  
 Validate request.  
 Generate OTP.  
 Send OTP.  
 Redirect to OTP Verification.  
Success Message 
If the information provided matches an existing account, a verification code has been 
sent. 
Please check your registered email or mobile device. 
Notice that the message remains identical regardless of whether the account exists. 
Error States 
Network Failure 
Unable to contact recovery service. 
Please check your connection and try again. 
Buttons 
 Retry  
 Back  
Server Error 
Recovery service is temporarily unavailable. 
Please try again later. 
Too Many Requests 
Too many recovery attempts have been detected. 
Please wait before requesting another verification code. 
Display a countdown timer if rate limiting is applied. 
Rate Limiting 
To reduce abuse: 
 Maximum 5 recovery requests within 30 minutes.  
 Display remaining cooldown time when applicable.  
 Disable the submission button until cooldown expires.  
Security Considerations 
The interface must: 
 Never confirm account existence.  
 Never reveal whether the username or email is valid.  
 Avoid exposing internal validation logic.  
 Prevent automated abuse through backend rate limiting and CAPTCHA (future 
enhancement).  
Keyboard Navigation 
Key 
Tab 
Action 
Next element 
Shift + Tab Previous element 
Enter 
Esc 
Submit recovery request 
Dismiss inline alerts 
Accessibility 
 Visible labels for all fields.  
 Screen reader announcements for validation and status updates.  
 Focus automatically moves to the first validation error.  
 Touch targets ≥ 44 × 44 px.  
 WCAG 2.2 AA compliant contrast.  
Responsive Behavior 
Desktop 
 Centered recovery card (420–460 px wide).  
 Balanced whitespace.  
 Optional illustration panel.  
Tablet 
 Single-column layout.  
 Reduced spacing.  
Mobile 
 Full-width card.  
 Large touch controls.  
 Sticky primary button when keyboard is hidden.  
Performance Requirements 
 Screen render < 800 ms.  
 Recovery request starts immediately after submission.  
 Smooth transitions at 60 FPS.  
API Dependencies 
 Password Recovery API  
 OTP Generation Service  
 Email/SMS Notification Service  
 Rate Limiting Service  
Analytics Events 
Track: 
 Forgot Password screen viewed  
 Recovery request submitted  
 Recovery request completed  
 Recovery request rate limited  
 Recovery request failed  
No usernames or email addresses should be included in analytics payloads. 
Figma Design Notes 
The screen should project reassurance and professionalism. The design should avoid 
alarming language or excessive warnings, instead guiding users through the recovery 
process with clear instructions, generous spacing, and a single prominent action. 
SCREEN 4 
OTP Verification 
Screen Metadata 
Property 
Value 
Screen Name OTP Verification 
Module 
Users 
Priority 
Entry Point 
Devices 
Authentication 
Password Recovery Users 
Critical 
Forgot Password 
Desktop, Tablet, Mobile 
Authentication Partial (Recovery Flow) 
Theme 
Light & Dark 
Screen Purpose 
The OTP Verification screen validates the user's identity before allowing a password 
reset. 
The interface should: 
 Minimize input errors  
 Support quick code entry  
 Prevent brute-force attempts  
 Clearly communicate verification status  
 Guide users through recovery without exposing sensitive information  
The verification experience should typically take less than 30 seconds. 
 
User Journey 
Forgot Password 
        │ 
Request Verification Code 
        │ 
Receive OTP 
        │ 
Enter Verification Code 
        │ 
Validate OTP 
        │ 
Password Reset Screen 
 
UX Goals 
Users should immediately understand: 
 A verification code has been sent.  
 Where the code was sent (masked).  
 How long the code remains valid.  
 How to request another code.  
 What happens after successful verification.  
 
Desktop Layout 
+--------------------------------------------------------------------+ 
 
                        GVMC Logo 
 
                    CycloneGuard 
 
                Verify Your Identity 
 -------------------------------------------------------- 
 
A verification code has been sent to 
 
na********@gvmc.gov.in 
 -------------------------------------------------------- 
 
[ ] [ ] [ ] [ ] [ ] [ ] 
 -------------------------------------------------------- 
 
Verify Code 
 -------------------------------------------------------- 
 
Resend Code (00:58) -------------------------------------------------------- 
← Back 
Need Help? -------------------------------------------------------- 
Mobile Layout 
+---------------------------+ 
Verify Identity 
******@gvmc.gov.in 
[ ][ ][ ][ ][ ][ ] 
Verify 
00:58 
Resend 
Back 
+---------------------------+ 
The OTP field should remain visible when the on-screen keyboard opens. 
Information Hierarchy 
Priority order: 
1. Screen Title  
2. Verification Message  
3. OTP Input  
4. Verify Button  
5. Countdown Timer  
6. Resend Option  
7. Help Link  
Components 
Title 
Verify Your Identity 
Description 
Example: 
Enter the 6-digit verification code sent to your registered contact. 
Destination Display 
To protect privacy, the destination should be partially masked. 
Examples: 
na********@gvmc.gov.in 
or 
+91 ******4821 
Never display the full email address or phone number. 
OTP Input 
The OTP input consists of six individual input boxes. 
Example: 
[5] [8] [1] [2] [7] [4] 
OTP Input Behavior 
Features: 
 Numeric input only  
 Automatic cursor movement  
 Backspace moves to previous box  
 Paste entire OTP supported  
 Arrow key navigation  
 Mobile numeric keyboard  
 Auto-submit optional after final digit  
If a full six-digit code is pasted, the system should distribute digits automatically. 
Primary Button 
Label 
Verify Code 
States: 
 Default  
 Hover  
 Disabled  
 Loading  
 Success  
Loading Example 
[Spinner] 
Verifying... 
Countdown Timer 
Example 
Verification code expires in 
00:58 
Behavior: 
 Updates every second  
 Turns orange during the last 15 seconds  
 Turns red when expired  
Resend Code 
Initially disabled. 
Example 
Resend Code (00:58) 
After expiry: 
Resend Verification Code 
Selecting this action: 
 Generates a new OTP  
 Invalidates the previous OTP  
 Restarts the timer  
Back Button 
Returns to the Forgot Password screen. 
Previously entered information should be preserved where appropriate. 
Validation Rules 
Rule 
Result 
Less than 6 digits Disable Verify button 
Non-numeric input Reject input 
Expired OTP 
Incorrect OTP 
Display expiration message 
Display verification error 
Too many attempts Lock verification temporarily 
Success State 
Successful verification should display a brief confirmation before navigation. 
✓ Verification Successful 
Redirecting to Password Reset... 
Automatically navigate to the Reset Password screen after approximately 1 second. 
Error States 
Incorrect Code 
The verification code is incorrect. 
Please try again. 
Clear all OTP boxes and place focus on the first input. 
Expired Code 
This verification code has expired. 
Request a new verification code to continue. 
Enable the Resend Code button. 
Too Many Attempts 
Too many incorrect verification attempts. 
Please wait 15 minutes before trying again. 
Disable verification until the cooldown period expires. 
Network Failure 
Unable to verify your code. 
Check your connection and try again. 
Provide: 
 Retry  
 Back  
Security Rules 
The interface should support the following policies: 
 OTP length: 6 digits  
 OTP expiration: 5 minutes  
 Maximum verification attempts: 5  
 New OTP invalidates previous OTP  
 OTP never displayed in logs  
 Clipboard contents should not be retained by the application  
Anti-Abuse Measures 
 Rate limit resend requests  
 Progressive cooldown after repeated failures  
 Session binding for issued OTPs  
 Device fingerprinting supported by backend (future enhancement)  
Accessibility 
The OTP experience must fully support assistive technologies. 
Requirements: 
 Each input has an accessible label (e.g., "Digit 1 of 6").  
 Screen readers announce remaining time when requested, not every second.  
 Focus moves predictably between inputs.  
 Error messages use ARIA live regions.  
 Touch targets are at least 44 × 44 px.  
 High-contrast focus indicators are always visible.  
Keyboard Navigation 
Key 
Action 
Number keys Enter digit 
Backspace Delete digit / move left 
Arrow Left 
Previous digit 
Arrow Right Next digit 
Tab 
Enter 
Next control 
Verify (when complete) 
Responsive Behavior 
Desktop 
 Centered verification card  
 Six evenly spaced OTP fields  
 Countdown and resend options below the form  
Tablet 
 Slightly reduced spacing  
 Full-width verification card within comfortable margins  
Mobile 
 Large OTP fields for touch input  
 Numeric keypad  
 Sticky primary action when keyboard is dismissed  
Performance Requirements 
 OTP verification request initiated immediately upon submission  
 Input latency below 50 ms  
 Timer updates without dropping animation frames  
 Transition to Reset Password screen within 300 ms after successful verification  
API Dependencies 
 OTP Verification API  
 OTP Resend API  
 Rate Limiting Service  
 Session Validation Service  
Analytics Events 
Track: 
 OTP screen viewed  
 OTP entered  
 OTP verification success  
 OTP verification failure  
 OTP expired  
 OTP resent  
 OTP rate limited  
Analytics must never record the actual verification code. 
Micro-Interactions 
 Each entered digit animates with a subtle scale-in eAect.  
 Verify button gently pulses when all six digits are entered.  
 Success confirmation displays a brief checkmark animation.  
 Error state uses a subtle horizontal shake on the OTP container (respecting 
reduced-motion preferences).  
Figma Design Notes 
The OTP screen should emphasize speed, confidence, and clarity. The segmented 
input boxes should be visually prominent, with generous spacing and strong focus 
states. Countdown information should remain visible but not distracting, while success 
and error feedback should feel immediate and reassuring. The design should 
communicate that the platform is securely verifying the user's identity without adding 
unnecessary friction. 
SCREEN 5 
Reset Password 
Screen Metadata 
Property 
Value 
Screen Name Reset Password 
Module 
Users 
Priority 
Entry Point 
Devices 
Authentication 
Password Recovery Users 
Critical 
OTP Verification 
Desktop, Tablet, Mobile 
Authentication Recovery Session Only 
Theme 
Light & Dark 
Screen Purpose 
The Reset Password screen allows a successfully verified user to create a new 
password and securely regain access to the CycloneGuard platform. 
The interface should: 
 Encourage strong passwords.  
 Prevent common mistakes.  
 Clearly communicate password requirements.  
 Confirm successful password reset.  
 Transition users back to the login experience.  
UX Goals 
The user should be able to: 
 Enter a secure password.  
 Confirm the password.  
 Understand password strength in real time.  
 Correct validation issues immediately.  
 Complete the process within one minute.  
User Flow 
OTP Verified 
│ 
Reset Password 
│ 
Validate Password 
│ 
Update Credentials 
│ 
Display Success 
      │ 
Return to Login 
 
Desktop Layout 
+----------------------------------------------------------------------------+ 
 
                             GVMC Logo 
 
                          CycloneGuard 
 
                       Create New Password 
 ------------------------------------------------------------ 
 
New Password 
 
Confirm Password 
 
Password Strength 
 
Password Requirements 
 ------------------------------------------------------------ 
 
Reset Password 
 ------------------------------------------------------------ 
 
Security Information ---------------------------------------------------------------------------- 
Mobile Layout 
+----------------------------+ 
Create New Password 
New Password 
Confirm Password 
Strength 
Requirements 
Reset Password 
+----------------------------+ 
The layout remains vertically focused, ensuring all important controls are easily 
reachable. 
Information Hierarchy 
Priority: 
1. Title  
2. New Password  
3. Confirm Password  
4. Password Strength  
5. Password Rules  
6. Reset Button  
7. Security Notice  
Components 
Header 
Contains: 
 GVMC Logo  
 CycloneGuard Branding  
Title 
Create New Password 
Description 
Example: 
Choose a strong password to protect your CycloneGuard account. 
Password Field 
Label 
New Password 
Placeholder 
Enter your new password 
Features 
 Hidden by default  
 Show/Hide toggle  
 Paste supported  
 Password manager compatible  
 Caps Lock indicator  
Confirm Password 
Label 
Confirm Password 
Placeholder 
Re-enter your new password 
Features 
 Hidden by default  
 Show/Hide toggle  
 Live comparison with first password  
Password Strength Indicator 
Displayed immediately below the first password field. 
Visual format: 
██████████ 
Strong 
Strength Levels 
Score Label 
1 
Color 
Very Weak Red 
2 
3 
4 
5 
Weak 
Fair 
Strong 
Orange 
Yellow 
Green 
Excellent Dark Green 
The strength meter updates as the user types. 
Password Requirements 
Checklist displayed beneath the strength indicator. 
Example 
✓ At least 12 characters 
✓ One uppercase letter 
✓ One lowercase letter 
✓ One number 
✓ One special character 
✓ Does not contain username 
Each rule updates dynamically. 
Confirm Password Validation 
When both passwords match: 
✓ Passwords match 
If they diAer: 
Passwords do not match. 
Validation occurs in real time. 
Primary Button 
Label 
Reset Password 
States 
 Default  
 Hover  
 Disabled  
 Loading  
 Success  
Loading Example 
[Spinner] 
Updating Password... 
Security Notice 
Example: 
For your security, you will be required to sign in again after your password has been 
updated. 
Validation Rules 
Rule 
Empty password 
Empty confirmation 
Passwords diAer 
Weak password 
Message 
Password is required. 
Confirm your password. 
Passwords do not match. 
Choose a stronger password. 
Previously used password Select a diAerent password. 
Success State 
After successful update: 
✓ Password Updated Successfully 
Your password has been changed. 
You will now be redirected to the login screen. 
Automatically redirect after 2 seconds. 
Error States 
Password Policy Violation 
Your password does not meet the required security standards. 
Highlight unmet requirements. 
Password Reuse 
You cannot reuse one of your recent passwords. 
Session Expired 
Your recovery session has expired. 
Please restart the password recovery process. 
Button: 
Start Again 
Server Error 
Unable to update your password. 
Please try again. 
Password Policy 
Recommended policy: 
 Minimum 12 characters  
 Uppercase letter  
 Lowercase letter  
 Number  
 Special character  
 No common passwords  
 No sequential patterns  
 No repeated characters beyond acceptable limits  
 No inclusion of username or email  
 Prevent reuse of recent passwords (e.g., last 5)  
Security Features 
 Passwords never displayed in logs.  
 Client-side validation supplements, but does not replace, server-side validation.  
 Reset token invalidated immediately after successful use.  
 Existing recovery session terminated after completion.  
Keyboard Navigation 
Key 
Tab 
Action 
Next field 
Shift + Tab Previous field 
Enter 
Esc 
Submit when valid 
Dismiss alerts (if applicable) 
Accessibility 
 Proper labels for both password fields.  
 Password visibility toggles announce state changes.  
 Strength indicator includes text, not just color.  
 Requirements checklist is screen-reader accessible.  
 High-contrast focus indicators.  
 Touch targets ≥ 44 × 44 px.  
Responsive Behavior 
Desktop 
 Centered card with ample spacing.  
 Password strength and checklist visible simultaneously.  
Tablet 
 Reduced margins.  
 Full-width card within content area.  
Mobile 
 Single-column layout.  
 Large input fields.  
 Sticky "Reset Password" button when keyboard is dismissed.  
Performance Requirements 
 Real-time validation latency under 100 ms.  
 Smooth password strength updates.  
 Password update request initiated immediately upon submission.  
 Success transition completed within 300 ms after confirmation.  
API Dependencies 
 Password Reset API  
 Password Policy Service  
 Password History Validation Service  
 Recovery Session Validation Service  
Analytics Events 
Track: 
 Reset Password screen viewed  
 Password strength evaluated  
 Password reset submitted  
 Password reset succeeded  
 Password reset failed  
 Password reuse detected  
 Recovery session expired  
No passwords, password fragments, or strength calculation inputs should ever be 
recorded. 
Micro-Interactions 
 Password strength bar animates smoothly as requirements are met.  
 Checklist items transition from neutral to success with a subtle fade.  
 Confirm password field displays an inline success icon when both entries 
match.  
 Successful reset displays a brief checkmark animation before redirecting.  
Figma Design Notes 
The Reset Password screen should feel reassuring and security-focused. Emphasize 
clear guidance over complexity. Use progressive feedback so users understand 
password quality without needing to submit the form repeatedly. The design should 
reinforce that the platform prioritizes both security and usability. 
Authentication Module Complete 
The complete authentication flow now includes: 
1. Splash Screen  
2. Login Screen  
3. Forgot Password  
4. OTP Verification  
5. Reset Password  
Together, these screens establish a secure, accessible, and enterprise-grade entry 
experience for the CycloneGuard platform. 
PART 2 — Executive Dashboards 
SCREEN 6 
Commissioner Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Commissioner Dashboard 
Module 
Primary Users 
Executive Dashboard 
GVMC Commissioner 
Secondary Users Disaster Head (Read-only View) 
Priority 
Highest 
Authentication Required 
Devices 
Theme 
Data Refresh 
Desktop, Tablet (Read-only), Large Command Center Displays 
Light & Dark 
Real-time (WebSocket) 
Screen Purpose 
The Commissioner Dashboard provides a single operational command view of the 
city's preparedness. 
It answers five critical questions within 30 seconds: 
1. What is happening right now?  
2. Which areas require immediate attention?  
3. Are critical assets operational?  
4. What risks are predicted over the next 24–72 hours?  
5. What immediate actions should leadership take?  
This dashboard is designed for executive decision-making, not detailed operational 
management. 
Executive UX Goals 
The Commissioner should be able to: 
 Assess overall city readiness at a glance.  
 Identify critical risks without searching.  
 Drill down into any issue within two clicks.  
 View live updates without refreshing the page.  
 Issue commands to operational teams directly from the dashboard.  
Information Hierarchy 
Priority order: 
1. Critical Emergency Banner  
2. Executive KPI Overview  
3. Interactive GIS Map  
4. AI Risk & Weather Intelligence  
5. Active Alerts  
6. Resource Readiness  
7. Operational Activity Feed  
8. Executive Quick Actions  
Desktop Layout (1920 × 1080 Command Center) 
A 12-column responsive grid with fixed executive zones. 
+-----------------------------------------------------------------------------------------------+ 
| Header: Logo | Breadcrumb | Global Search | Notifications | Profile                           
| 
+-----------------------------------------------------------------------------------------------+ 
| Emergency Banner (only when active)                                                           
| 
+-----------------------------------------------------------------------------------------------+ 
| KPI 1 | KPI 2 | KPI 3 | KPI 4 | KPI 5 | KPI 6                                                  
| 
+-----------------------------------------------------------------------------------------------+ 
|                                  
|      
|                                  
|                                  
|                                  
|                                  
|                                  
|                                                            
| 
GIS CITY MAP (8 cols)       |    AI Insights & Weather (4 cols)                         
|                                                            
| 
|------------------------------------------------------------| 
| Active Alerts                                              
| 
|------------------------------------------------------------| 
| Executive Actions                                          
| 
| 
+-----------------------------------------------------------------------------------------------+ 
| Resource Readiness | Cyclone Timeline | Activity Feed | Asset Health                          
+-----------------------------------------------------------------------------------------------+ 
| 
The GIS map occupies the largest visual area because geography is central to disaster 
management. 
Global Header 
The header remains fixed during scrolling. 
Left Section 
 GVMC Logo  
 CycloneGuard Logo  
 Breadcrumb:  
o Home / Executive Dashboard  
Center 
Global Search 
Searches: 
 Assets  
 Wards  
 Zones  
 OAicers  
 Alerts  
 Shelters  
 Pumps  
 Generators  
 Vehicles  
Right Section 
 Live Connection Indicator  
 Notifications  
 User Profile  
 Settings  
 Help  
Emergency Banner 
Displayed only during active emergencies. 
CYCLONE RED ALERT 
Cyclone "Varuna" 
Expected Landfall: 18 Hours 
Wind Speed: 145 km/h 
[Open Incident Center] 
Characteristics: 
 Full-width  
 Sticky  
 High contrast  
 Non-dismissible for executive users  
 Includes countdown timer  
Executive KPI Section 
Six high-priority KPI cards displayed in a single row. 
KPI 1 — Overall City Readiness 
Example: 
92% 
City Prepared 
Visual: 
 Circular progress ring  
 Trend arrow  
 Comparison with previous day  
Interaction: 
Click → Readiness Analytics 
KPI 2 — Critical Assets 
Example: 
1,248 
Operational 
98% 
Shows: 
 Operational  
 Under Maintenance  
 Failed  
Interaction: 
Click → Asset Registry 
KPI 3 — Active Alerts 
Example: 
18 
Active 
3 Critical 
Color changes according to severity. 
KPI 4 — Field OAicers 
326 
On Duty 
42 OAline 
Includes live GPS status summary. 
KPI 5 — Resource Availability 
94% 
Resources Ready 
Includes: 
 Pumps  
 Generators  
 Vehicles  
 Emergency Kits  
KPI 6 — AI Risk Score 
HIGH 
84 / 100 
Accompanied by: 
 Confidence percentage  
 Trend indicator  
 Last prediction time  
KPI Card Design Specification 
Each card includes: 
 Icon  
 Primary Value  
 Secondary Label  
 Trend Indicator  
 Last Updated Timestamp  
 Drill-down Button  
Dimensions: 
 Height: 140 px  
 Radius: 16 px  
 Padding: 24 px  
Hover: 
 Slight elevation increase  
 Subtle border highlight  
Interactive GIS Map 
This is the centerpiece of the dashboard. 
Occupies approximately 65% of the viewport width. 
Displays: 
 Ward boundaries  
 Zone boundaries  
 Shelters  
 Pumps  
 Waterlogging locations  
 Hospitals  
 Emergency vehicles  
 Relief camps  
 Cyclone path overlay  
 Flood risk heatmap  
GIS Controls 
Floating controls on the right side. 
 Zoom In  
 Zoom Out  
 Reset View  
 Current Location  
 Full Screen  
 Layer Manager  
 Legend  
 Measurement Tool  
Layer Manager 
Supported layers: 
 Administrative Boundaries  
 Critical Assets  
 Hospitals  
 Shelters  
 Relief Camps  
 Water Pumps  
 Electric Substations  
 Flood Zones  
 Cyclone Path  
 Rainfall  
 TraAic Conditions  
 Field OAicer Locations  
Layers can be toggled independently. 
Asset Markers 
Marker colors: 
  
  
  
  
Operational  
Maintenance  
Failed  
OAline  
Clicking a marker opens a detail drawer containing: 
 Asset Name  
 Asset ID  
 Ward  
 Status  
 Last Inspection  
 Assigned OAicer  
 Maintenance History  
 Navigate to Asset  
Map Popups 
Example: 
Shelter 024 
Ward 18 
Capacity: 450 
Occupied: 112 
Generator: Operational 
Water Supply: Available 
Last Verified: Today, 09:45 
Actions: 
 View Details  
 Open Timeline  
 Assign OAicer  
AI Intelligence Panel 
Positioned to the right of the GIS map. 
Contains: 
AI Risk Prediction 
Displays: 
 Current Risk Level  
 Predicted Landfall Impact  
 Confidence Score  
 Top Contributing Factors  
Example: 
Cyclone Impact Risk 
HIGH 
84% 
Confidence: 91% 
Top Factors: 
• Wind Speed 
• Rainfall 
• Coastal Surge 
• Shelter Occupancy 
Recommended Executive Actions 
Examples: 
1. Deploy additional pumps to Zone 4.  
2. Increase shelter capacity in Ward 18.  
3. Inspect generators in coastal wards.  
4. Issue precautionary public advisory.  
Each recommendation includes: 
 Estimated impact  
 Confidence level  
 "Take Action" button  
Weather Intelligence 
Displays: 
 Current Temperature  
 Wind Speed  
 Humidity  
 Rainfall  
 Storm Track  
 Landfall Estimate  
 Next 24-Hour Forecast  
Visualizations: 
 Mini forecast chart  
 Wind direction indicator  
 Rainfall trend graph  
Figma Design Notes 
This dashboard should immediately communicate command, clarity, and confidence. 
The GIS map is the visual anchor, while KPI cards and AI insights provide executive 
context. The layout should support rapid scanning with strong visual hierarchy, 
restrained use of color, and ample whitespace. Critical information should remain 
above the fold, and every major widget should support drill-down without overwhelming 
the primary view. 
Active Alerts Panel 
Positioned directly below the AI Intelligence Panel. 
This panel presents all unresolved incidents requiring executive awareness. 
Maximum visible alerts: 
5 
Remaining alerts: 
Accessible through View All Alerts. 
Alert Card Layout ---------------------------------------------------- 
CRITICAL 
Generator Failure 
Zone 4 • Ward 18 
Reported 
10:42 AM 
Assigned 
Electrical Response Team 
Status 
Awaiting Action 
[View] ---------------------------------------------------- 
Alert Priority Levels 
Priority Color SLA 
Critical Red 
High 
Immediate 
Orange 15 Minutes 
Medium Yellow 1 Hour 
Low 
Blue 4 Hours 
Alert Card Components 
Each card includes: 
 Severity Badge  
 Incident Icon  
 Title  
 Zone  
 Ward  
 Timestamp  
 Assigned Team  
 Current Status  
 View Button  
Optional 
 AI Recommendation Badge  
 Escalation Indicator  
Alert Interactions 
Hover 
 Elevation increases  
 Border highlight  
Click 
Open Alert Detail Drawer. 
Double Click 
Open Alert Details Page. 
Executive Quick Actions 
Located beneath the Alerts Panel. 
These actions allow the Commissioner to initiate high-impact workflows with a single 
click. 
Quick Action Grid 
+---------------------------+ 
Issue Public Advisory 
Allocate Resources 
Open Incident Room 
Broadcast Emergency 
View Readiness Report 
Generate Situation Report 
+---------------------------+ 
Action Card Design 
Dimensions 
 Height: 88 px  
 Radius: 14 px  
Contains 
 Icon  
 Label  
 Short description  
Hover 
 Background tint  
 Icon animation  
 Cursor change  
Confirmation Rules 
Sensitive actions require confirmation. 
Example: 
Broadcast Emergency 
Confirmation Dialog 
Emergency Broadcast 
This message will be sent to all registered users. 
Continue? 
Cancel 
Broadcast 
Resource Readiness Widget 
Located below the GIS Map. 
Purpose 
Provide executive visibility into city-wide operational readiness. 
Resource Categories 
 Pumps  
 Generators  
 Vehicles  
 Medical Kits  
 Emergency Shelters  
 Rescue Boats  
 Communication Units  
Example 
Pumps 
Operational 
96% 
452 / 470 
Maintenance 
12 
OAline 
6 
Visualization 
Horizontal progress bars 
or 
Donut charts 
Each category links to the Resource Dashboard. 
Cyclone Timeline Widget 
Purpose 
Present chronological milestones related to the current cyclone event. 
Example Timeline 
Today 
08:00 
IMD Warning Issued 
↓ 
10:00 
Preparedness Activated 
↓ 
14:00 
Shelters Opened 
↓ 
18:00 
Resource Deployment 
↓ 
Tomorrow 
06:00 
Predicted Landfall 
Timeline Features 
 Vertical orientation  
 Color-coded events  
 Expandable details  
 Automatic updates  
 Filter by event type  
Asset Health Analytics 
Purpose 
Provide executives with a high-level overview of infrastructure reliability. 
Metrics 
Operational Assets 
Assets Under Maintenance 
Inspection Overdue 
Critical Failures 
Inspection Completion % 
Average Downtime 
Charts 
Recommended: 
 Stacked Bar Chart  
 Donut Chart  
 Trend Line  
Example 
Asset Health 
Operational 
██████████ 
92% 
Maintenance 
██ 
6% 
Failed 
█ 
2% 
Live Activity Feed 
Positioned at the bottom-right. 
Displays operational events as they occur. 
Feed Example 
10:42 
Pump P-104 inspected 
OAicer Ravi ----------------------------------- 
10:39 
Generator G-22 repaired ----------------------------------- 
10:31 
Ward 18 checklist completed 
----------------------------------- 
10:24 
Flood alert issued 
Activity Card 
Contains 
 Timestamp  
 Icon  
 Description  
 User  
 Zone  
 Status  
Activity Categories 
 Inspection  
 Maintenance  
 Alert  
 Assignment  
 Approval  
 Broadcast  
 Resource Movement  
 AI Recommendation Accepted  
Feed Controls 
 Pause Updates  
 Resume  
 Filter  
 Search  
 Export  
Executive Notification Center 
Accessible from the header. 
Categories 
Operational 
Security 
Weather 
System 
AI 
Approvals 
Notification Card 
Critical Alert 
Generator Failure 
Zone 4 
10:42 
Mark Read 
View 
Notification Features 
 Real-time updates  
 Group by category  
 Mark all as read  
 Search  
 Archive  
Floating AI Assistant 
Position 
Bottom-right corner. 
Purpose 
Provide conversational access to operational intelligence. 
Example questions 
 Which wards are least prepared?  
 Show generator failures.  
 Predict flood risk for tomorrow.  
 Which shelters exceed 80% occupancy?  
 Generate executive summary.  
Dashboard Filters 
Persistent filter bar. 
Filters 
 Zone  
 Ward  
 Asset Type  
 Date  
 Severity  
 Department  
Saved filter presets 
 City Overview  
 Coastal Wards  
 High Risk  
 Critical Assets  
Loading State 
Loading sequence 
Header 
↓ 
KPI Skeleton 
↓ 
GIS Skeleton 
↓ 
Weather 
↓ 
AI Panel 
↓ 
Tables 
↓ 
Activity Feed 
Skeleton loaders should match the final component dimensions. 
Empty State 
Example 
No Active Alerts 
The city currently has no unresolved operational alerts. 
Everything is operating normally. 
[View History] 
Error State 
Unable to load dashboard. 
Retry 
View OAline Snapshot 
Contact Support 
OAline Mode 
When connectivity is interrupted: 
Banner 
OAline Mode 
Displaying cached operational data. 
Last synchronized 
10:42 AM 
Behavior 
 Freeze live updates  
 Maintain navigation  
 Queue supported actions  
 Restore automatically after reconnection  
Accessibility 
The dashboard must support: 
 WCAG 2.2 AA compliance  
 Full keyboard navigation  
 Screen-reader landmarks  
 High-contrast mode  
 Reduced-motion preference  
 Focus management  
 Accessible chart summaries  
 Keyboard-operable GIS controls where practical  
Responsive Behavior 
Command Center (≥1920 px) 
 Full 12-column layout  
 Persistent side intelligence panel  
 Expanded GIS viewport  
Desktop (1440–1919 px) 
 Two-column layout  
 Full KPI row  
 GIS remains primary element  
Laptop (1024–1439 px) 
 AI panel collapses into tabs  
 Reduced KPI spacing  
 Compact activity feed  
Tablet (768–1023 px) 
 Single-column stacked layout  
 Collapsible filters  
 Simplified GIS controls  
Mobile 
The Commissioner Dashboard is view-only. 
Available features: 
 KPI summary  
 Emergency banner  
 Alerts  
 Notifications  
 AI recommendations  
 Executive reports  
Editing and command actions are intentionally unavailable on mobile to reduce the risk 
of accidental high-impact operations. 
Performance Requirements 
Metric 
Initial dashboard render 
KPI refresh 
GIS interaction latency 
Dashboard animation 
Notification delivery 
Target 
< 2 seconds 
≤ 5 seconds 
< 100 ms 
60 FPS 
< 2 seconds 
Dashboard memory footprint Optimized for extended sessions 
API Dependencies 
Core 
 Authentication Service  
 User Profile Service  
 Permissions Service  
Operational 
 Asset Management API  
 Resource Management API  
 Checklist API  
 Alert Management API  
 Incident API  
Intelligence 
 AI Prediction Service  
 Weather Service  
 IMD Integration  
 GIS Tile Service  
 Geospatial Analytics Service  
Real-Time 
 WebSocket Gateway  
 Notification Service  
 Activity Stream Service  
Analytics Events 
Track executive interactions such as: 
 Dashboard viewed  
 KPI card opened  
 Map layer toggled  
 Alert viewed  
 Executive action initiated  
 AI recommendation accepted  
 Resource dashboard opened  
 Situation report generated  
 Filter applied  
 Search performed  
Operational analytics should capture usage patterns without exposing confidential or 
personally identifiable information beyond authorized audit requirements. 
Security & Audit 
Every executive action should generate an audit entry containing: 
 User  
 Role  
 Action  
 Timestamp  
 Device  
 IP Address (backend)  
 Outcome  
 Correlation ID  
High-impact actions (e.g., emergency broadcasts or resource reallocations) should 
require confirmation and be fully traceable. 
Figma Design Notes 
The Commissioner Dashboard should feel like a national emergency operations 
center, not a conventional analytics dashboard. The GIS map is the dominant visual 
element, while KPIs, AI insights, and alerts provide layered context. Visual hierarchy 
should prioritize immediate comprehension: critical information must stand out 
instantly, with secondary details available through drill-downs. The interface should 
remain calm, structured, and highly readable even during active disaster scenarios, 
ensuring executives can make confident decisions under pressure. 
SCREEN 7 
Disaster Head Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Disaster Head Dashboard 
Module 
Primary Users 
Executive Operations 
Disaster Management Head 
Secondary Users Deputy Disaster OAicers 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Tablet 
Property 
Value 
Refresh Interval Real-Time 
Theme 
Light & Dark 
Screen Purpose 
The Disaster Head Dashboard functions as the Operational Command Center for 
GVMC's disaster response. 
It provides complete visibility into: 
 Ongoing incidents  
 Team deployment  
 Resource allocation  
 Pending approvals  
 Escalations  
 Live field activities  
 Operational bottlenecks  
Unlike the Commissioner Dashboard, this screen is designed for continuous 
operational use throughout the day. 
Operational Objectives 
Within 15 seconds, the Disaster Head should know: 
 Which incidents are active?  
 Which teams are deployed?  
 Which resources are unavailable?  
 Which approvals are pending?  
 Which wards need immediate intervention?  
 Which field oAicers require assistance?  
Information Hierarchy 
Priority: 
1. Critical Incident Banner  
2. Active Incident Overview  
3. Team Deployment Map  
4. Pending Approvals  
5. Resource Deployment  
6. Field OAicer Activity  
7. AI Operational Recommendations  
8. Incident Timeline  
Desktop Layout 
+------------------------------------------------------------------------------------------------+ 
| Header: Search | Alerts | Notifications | User Profile                                         
| 
+------------------------------------------------------------------------------------------------+ 
| Active Incident Banner                                                                         
| 
+------------------------------------------------------------------------------------------------+ 
| Incident KPIs | Team KPIs | Resource KPIs | Pending Approvals | Escalations | Tasks           
| 
+------------------------------------------------------------------------------------------------+ 
|                              
|                                                                 
| 
|  LIVE OPERATIONAL MAP        | Incident Control Panel                                          
|                              
|                              
|                              
|                              
|---------------------------------------------------------------  | 
| Pending Approvals                                               
|---------------------------------------------------------------  | 
| AI Recommendations                                              
| 
| 
| 
+------------------------------------------------------------------------------------------------+ 
| Resource Deployment | OAicer Activity | Incident Timeline | Team Status                       
+------------------------------------------------------------------------------------------------+ 
| 
Critical Incident Banner 
Displayed only when: 
 Cyclone Alert is Orange or Red  
 Flood Emergency exists  
 Major infrastructure failure occurs  
Example 
ACTIVE EMERGENCY 
Cyclone VARUNA 
12 Active Incidents 
482 Personnel Deployed 
Response Level: LEVEL-4 
[Open Incident Room] 
Unlike the Commissioner Banner, this one includes operational statistics. 
Operational KPI Cards 
Six operational KPI cards. 
KPI 1 
Active Incidents 
Example 
18 
5 Critical 
8 High 
5 Medium 
Click 
→ Incident Center 
KPI 2 
Personnel Deployed 
482 
Currently Active 
36 Available 
12 OA Duty 
KPI 3 
Resources in Use 
82% 
Deployment 
Vehicles 
Generators 
Pumps 
Boats 
KPI 4 
Pending Approvals 
26 
Awaiting Review 
12 High Priority 
Click 
Approval Queue 
KPI 5 
Escalated Incidents 
9 
Require Immediate Decision 
Red border when >5. 
KPI 6 
Operational EAiciency 
91% 
Average Response Time 
8 Minutes 
Trend 
↑ 
Live Operational Map 
This replaces the executive GIS emphasis with an operations-focused GIS. 
Displays 
 OAicer GPS Locations  
 Active Incidents  
 Vehicles  
 Pumps  
 Rescue Boats  
 Flooded Roads  
 Closed Roads  
 Medical Camps  
 Shelter Occupancy  
Live Team Tracking 
Each oAicer represented by a live marker. 
Marker 
Available 
Busy 
Emergency 
OAline 
Clicking a marker opens: 
OAicer 
Ravi Kumar 
Zone 4 
Current Assignment 
Generator Inspection 
ETA 
12 min 
Battery 
78% 
[Assign New Task] 
[Open Profile] 
Incident Control Panel 
Located right of map. 
Purpose 
Provide immediate access to ongoing incidents. 
Incident Card 
Generator Failure 
Ward 18 
Priority 
Critical 
Assigned Team 
Electrical Unit 
Elapsed 
42 Minutes 
Status 
In Progress 
[Open] 
[Escalate] 
Incident Colors 
Critical 
Red 
High 
Orange 
Medium 
Yellow 
Resolved 
Green 
Incident Actions 
Available 
Assign Team 
Escalate 
View Timeline 
Request Resources 
Close Incident 
Generate Report 
Pending Approval Panel 
One of the most important widgets. 
Shows 
Inspection approvals 
Resource requests 
Budget approvals 
Emergency broadcasts 
Asset verification 
Shelter activation 
Approval Card 
Pump Deployment Request 
Zone 5 
Requested By 
Supervisor 
Priority 
High 
[Approve] 
[Reject] 
[Review] 
Approval Workflow 
Supervisor 
↓ 
Disaster Head 
↓ 
Commissioner (if required) 
↓ 
Executed 
Resource Deployment Dashboard 
Purpose 
Monitor deployment of critical resources. 
Categories 
Vehicles 
Pumps 
Generators 
Boats 
Medical Teams 
Communication Equipment 
Food Supplies 
Water Supply 
Example Widget 
Generators 
Operational 
128 
In Use 
116 
Available 
12 
Maintenance 
4 
Visualization 
Donut chart 
Deployment heatmap 
Trend graph 
AI Operational Recommendations 
Unlike executive AI, these are execution-focused. 
Example 
Recommendation 
Deploy 2 additional generators 
Ward 16 
Confidence 
94% 
Expected Benefit 
Reduce outage risk by 38% 
[Deploy] 
[Dismiss] 
Recommendations 
 Reassign teams  
 Increase shelter staAing  
 Deploy pumps  
 Move generators  
 Close flooded roads  
 Open new shelters  
 Activate medical camp  
Live OAicer Activity Feed 
Shows field updates. 
Example 
11:42 
OAicer Ravi 
Completed Pump Inspection 
Ward 16 ------------------ 
11:40 
OAicer Priya 
Shelter Verified ------------------ 
11:37 
Generator Repair Started 
Filters 
 Zone  
 OAicer  
 Incident  
 Department  
Team Status Dashboard 
Displays every operational team. 
Examples 
Electrical Team 
Water Team 
Medical Team 
Road Clearance 
Fire Services 
Police Coordination 
NGO Volunteers 
Each card shows 
Available 
Busy 
Emergency 
OAline 
Average Response Time 
Incident Timeline 
Chronological event tracking. 
Incident Created 
↓ 
OAicer Assigned 
↓ 
Reached Location 
↓ 
Repair Started 
↓ 
Verification 
↓ 
Resolved 
↓ 
Closed 
Every event is timestamped. 
Communication Center 
Quick communication tools. 
Actions 
 Send Department Broadcast  
 Contact Zone Supervisor  
 Call OAicer  
 Emergency Conference  
 Push Mobile Notification  
Quick Actions 
+ Assign Team 
+ Create Incident 
+ Deploy Resources 
+ Open Approval Queue 
+ Generate Situation Report 
+ View Live Map 
Shift Monitoring 
Displays 
Current Shift 
Next Shift 
OA-duty StaA 
Shift Handover Status 
Missing Personnel 
Performance Metrics 
Operational metrics include: 
 Average Response Time  
 Mean Time to Repair (MTTR)  
 Incident Resolution Rate  
 SLA Compliance  
 Resource Utilization  
 Team Productivity  
Alerts Panel 
Unlike Commissioner dashboard: 
Shows 
Operational Alerts 
instead of 
Strategic Alerts 
Examples 
 Vehicle Breakdown  
 Pump Failure  
 OAicer SOS  
 Shelter Full  
 Flood Level Rising  
Accessibility 
Support 
 Keyboard navigation  
 Accessible GIS controls  
 Screen-reader announcements  
 High contrast mode  
 Reduced motion  
 Large interactive targets  
Responsive Behavior 
Desktop 
Full operational layout. 
Laptop 
Map reduced slightly. 
Tablet 
Two-column layout. 
Mobile 
Read-only incident monitoring with limited approval capabilities for emergency use. 
API Dependencies 
 Incident Management API  
 Team Management API  
 Resource Allocation API  
 Approval Workflow API  
 GIS Service  
 OAicer Tracking Service  
 AI Recommendation Engine  
 Notification Service  
 WebSocket Gateway  
Analytics Events 
Track: 
 Incident opened  
 Team assigned  
 Resource deployed  
 Approval completed  
 AI recommendation accepted  
 Incident escalated  
 Broadcast initiated  
 Situation report generated  
Figma Design Notes 
The Disaster Head Dashboard should feel like a live operations room, emphasizing 
execution over strategy. Compared to the Commissioner Dashboard, visual density is 
higher, with greater prominence given to active incidents, approvals, and team 
coordination. The GIS map remains central but focuses on personnel and operational 
assets rather than city-wide strategic overlays. Interactive controls should be readily 
accessible, enabling rapid response while maintaining a clean, organized interface that 
minimizes cognitive load during high-pressure situations. 
SCREEN 8 
Zone Supervisor Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Zone Supervisor Dashboard 
Module 
Primary Users 
Operations 
Zone Supervisor 
Secondary Users Deputy Supervisor 
Priority 
Critical 
Authentication Required 
Devices 
Refresh 
Theme 
Desktop, Tablet 
Real-Time (5 seconds) 
Light & Dark 
Screen Purpose 
The Zone Supervisor Dashboard serves as the operational headquarters for a single 
administrative zone. 
It enables supervisors to: 
 Monitor zone readiness  
 Assign field oAicers  
 Verify inspections  
 Track ongoing incidents  
 Monitor critical assets  
 Approve completed checklists  
 Coordinate with Disaster Headquarters  
Unlike executive dashboards, every component should support immediate operational 
action. 
Primary UX Goals 
Within 10 seconds, the supervisor should know: 
 Current zone readiness  
 Pending inspections  
 Active incidents  
 Available oAicers  
 Critical asset failures  
 Overdue maintenance  
 Escalated requests  
Information Hierarchy 
Priority: 
1. Zone Status Banner  
2. Zone KPIs  
3. Zone GIS Map  
4. Pending Tasks  
5. OAicer Status  
6. Asset Readiness  
7. Incident Queue  
8. Communication Panel  
Desktop Layout 
+------------------------------------------------------------------------------------------------+ 
| Header | Search | Notifications | Zone Selector | Profile                                      
| 
+------------------------------------------------------------------------------------------------+ 
| Zone Status Banner                                                                             
| 
+------------------------------------------------------------------------------------------------+ 
| Zone KPIs (6 Cards)                                                                            
| 
+------------------------------------------------------------------------------------------------+ 
|                                
|                                                               
| 
|      
Zone GIS Map              
| Pending Tasks                                                 
| 
|                                
|                                
|                                
|                                
|---------------------------------------------------------------| 
| Active Incidents                                              
| 
|---------------------------------------------------------------| 
| Quick Actions                                                 
| 
+------------------------------------------------------------------------------------------------+ 
| OAicer Status | Asset Health | Inspection Queue | Activity Feed                               
| 
+------------------------------------------------------------------------------------------------+ 
Zone Status Banner 
Displayed at the top of the dashboard. 
Example: 
ZONE 4 
Preparedness: 91% 
12 Pending Inspections 
3 Active Incidents 
Last Updated: 10:45 AM 
The banner color reflects the overall readiness level: 
Status 
Excellent 
Color 
Green 
Attention Required Orange 
Critical 
Red 
Zone KPI Cards 
Six cards summarize the health of the assigned zone. 
KPI 1 — Zone Readiness 
91% 
Zone Prepared 
Click → Zone Readiness Analytics 
KPI 2 — Pending Inspections 
12 
Awaiting Completion 
Click → Inspection Queue 
KPI 3 — Active Incidents 
3 
1 Critical 
Click → Incident List 
KPI 4 — Available OAicers 
28 
Available 
4 Busy 
2 OAline 
Click → OAicer Management 
KPI 5 — Operational Assets 
184 
Operational 
96% 
Click → Asset Registry 
KPI 6 — Resource Requests 
7 
Pending Approval 
Click → Requests 
Zone GIS Map 
This map is filtered to the supervisor's assigned zone. 
Displays: 
 Ward boundaries  
 Critical assets  
 Field oAicers  
 Active incidents  
 Shelters  
 Pumps  
 Generators  
 Vehicles  
 Waterlogging points  
Map Controls 
 Zoom  
 Layers  
 Locate OAicer  
 Filter Assets  
 Draw Area  
 Measure Distance  
Marker Types 
Operational Asset 
Inspection Pending 
Failed Asset 
OAicer 
Shelter 
Incident 
Clicking a marker opens a contextual information drawer. 
Example: 
Pump Station PS-07 
Ward 12 
Status: Operational 
Last Inspection: Today, 08:15 
Assigned OAicer: Anita Rao 
Next Inspection: Tomorrow 
Pending Tasks Panel 
This panel shows work that requires supervisor attention. 
Task Categories: 
 Inspection Review  
 OAicer Assignment  
 Resource Request  
 Maintenance Approval  
 Incident Escalation  
Task Card 
Inspection Approval 
Ward 9 
Submitted by: 
OAicer Ravi 
Due: 
11:30 AM 
Priority: 
High 
[Review] 
Tasks are sorted by urgency. 
Active Incidents Panel 
Displays incidents occurring within the supervisor's zone. 
Incident Card: 
Flooded Road 
Ward 11 
Severity: 
High 
Assigned Team: 
Road Clearance Unit 
Elapsed: 
18 Minutes 
[Open] 
Supervisor Actions: 
 Assign OAicer  
 Escalate  
 Close Incident  
 Add Notes  
 Request Resources  
Quick Actions 
Frequently used operational commands. 
+ Assign OAicer 
+ Create Inspection 
+ Report Incident 
+ Deploy Resource 
+ Contact Disaster Head 
+ View Zone Report 
These actions should remain visible without scrolling. 
OAicer Status Panel 
Shows all oAicers assigned to the zone. 
Columns: 
 OAicer Name  
 Current Task  
 GPS Status  
 Battery (mobile)  
 Last Sync  
 Availability  
Example: 
Ravi Kumar 
Inspection 
Ward 8 
GPS Active 
Battery 81% 
Available in 12 min 
Color coding: 
 Green: Available  
 Yellow: Busy  
 Red: Emergency  
 Gray: OAline  
Asset Health Panel 
Provides an overview of infrastructure within the zone. 
Metrics: 
 Total Assets  
 Operational  
 Under Maintenance  
 Failed  
 Inspection Due  
 Inspection Overdue  
Visualization: 
 Donut chart  
 Trend line  
 Status distribution  
Inspection Queue 
Displays all inspections awaiting review. 
Columns: 
 Asset  
 Ward  
 OAicer  
 Submission Time  
 Status  
 Priority  
Actions: 
 Review  
 Approve  
 Reject  
 Request Reinspection  
Activity Feed 
Live chronological updates for the zone. 
Example: 
10:48 
Inspection Completed 
Pump PS-07 
Ward 12 -------------------- 
10:44 
OAicer Assigned 
Generator G-14 -------------------- 
10:39 
Road Cleared 
Ward 10 
Filters: 
 OAicer  
 Ward  
 Asset  
 Event Type  
Communication Panel 
Quick communication tools. 
Available actions: 
 Message All OAicers  
 Contact Disaster Head  
 Call Field OAicer  
 Push Zone Notification  
 Start Emergency Conference  
Approval Workflow 
Field OAicer 
↓ 
Zone Supervisor 
↓ 
Disaster Head (if escalation required) 
↓ 
Completed 
The dashboard should clearly indicate where each request is within the workflow. 
Loading State 
Display skeleton placeholders for: 
 KPI cards  
 Map  
 Task list  
 Tables  
 Charts  
The map container should appear immediately, with layers loading progressively. 
Empty States 
Example: 
No Pending Tasks 
All inspections and approvals have been completed for this zone. 
[View Completed Work] 
Error State 
Unable to load zone information. 
Retry 
View Cached Data 
Contact Support 
OAline Mode 
If connectivity is lost: 
 Display persistent oAline banner.  
 Allow review of cached inspections.  
 Queue supervisor approvals when supported.  
 Synchronize automatically upon reconnection.  
Accessibility 
The dashboard must support: 
 Keyboard navigation  
 Screen reader compatibility  
 High-contrast mode  
 Reduced motion  
 Accessible map controls  
 Touch targets ≥ 44 × 44 px  
 WCAG 2.2 AA compliance  
Responsive Behavior 
Desktop 
 Full operational layout.  
 Side panels visible.  
 Multi-column dashboard.  
Laptop 
 Slightly reduced map width.  
 Compact KPI cards.  
Tablet 
 Two-column layout.  
 Collapsible side panels.  
Mobile 
Supervisors receive a simplified operational view with: 
 Pending tasks  
 Incident list  
 OAicer list  
 Quick approvals  
 Notifications  
Complex analytics and full GIS editing are omitted to preserve usability. 
API Dependencies 
 Zone Management API  
 Asset Registry API  
 Inspection API  
 Incident Management API  
 OAicer Tracking API  
 Resource Request API  
 Notification Service  
 GIS Service  
 WebSocket Gateway  
Analytics Events 
Track: 
 Dashboard viewed  
 Inspection approved  
 Inspection rejected  
 OAicer assigned  
 Incident escalated  
 Resource requested  
 Quick action selected  
 Zone report generated  
 Filter applied  
 Map layer toggled  
Performance Targets 
Metric 
Initial render 
Target 
< 2 seconds 
Metric 
Target 
KPI refresh 
Every 5 seconds 
Map interaction latency < 100 ms 
Task list updates 
Real-time 
Animation frame rate 60 FPS 
Figma Design Notes 
The Zone Supervisor Dashboard should feel highly actionable and operational, with a 
balanced layout that keeps the zone map central while surfacing tasks, incidents, and 
approvals within immediate reach. Compared to executive dashboards, it should 
present more detailed operational data but avoid unnecessary strategic analytics. The 
design should support rapid task switching, minimize navigation overhead, and ensure 
that critical actions—such as assigning oAicers or approving inspections—can be 
completed with as few interactions as possible. 
PART 2 — Executive Dashboards 
SCREEN 9 
Field OAicer Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Field OAicer Dashboard 
Module 
Primary Users 
Field Operations 
Field OAicers 
Secondary Users Maintenance StaA 
Priority 
Highest 
Authentication Required 
Devices 
Refresh 
Mobile First, Tablet 
Real-Time + OAline Sync 
Property 
Value 
Theme 
Light & Dark 
Screen Purpose 
The Field OAicer Dashboard is the operational home screen for oAicers performing 
inspections, maintenance, emergency verification, and incident response. 
Unlike desktop dashboards, this interface is designed for: 
 One-handed operation  
 Outdoor visibility  
 OAline usage  
 Fast task completion  
 Camera integration  
 GPS verification  
 Evidence collection  
The dashboard should minimize typing and maximize action-oriented controls. 
Primary UX Goals 
Within 5 seconds, the oAicer should know: 
 Today's assigned tasks  
 Highest priority task  
 Current assignment  
 Navigation status  
 OAline status  
 Pending sync items  
Within 30 seconds, the oAicer should be able to begin an inspection. 
Information Hierarchy 
Priority: 
1. Emergency Banner  
2. Current Task  
3. Today's Tasks  
4. Quick Actions  
5. OAline Status  
6. Navigation  
7. Recent Activity  
8. Notifications  
Mobile Layout (Primary) 
+----------------------------------------------------+ 
Header 
OAicer Name 
Today's Date 
OAline Status ------------------------------------------------------ 
Current Assignment ------------------------------------------------------ 
Today's Tasks 
------------------------------------------------------ 
Quick Actions ------------------------------------------------------ 
Navigation Card ------------------------------------------------------ 
Sync Status ------------------------------------------------------ 
Recent Activity ------------------------------------------------------ 
Bottom Navigation 
+----------------------------------------------------+ 
Header 
Contains: 
Left: 
 GVMC Logo  
 CycloneGuard  
Center: 
 OAicer Name  
 Zone  
 Ward  
Right: 
 Notification Icon  
 Profile  
Example 
OAicer 
Ravi Kumar 
Zone 4 
Ward 18 
Emergency Banner 
Visible only during emergencies. 
Emergency Response Activated 
Proceed to assigned incident immediately. 
ETA 
18 Minutes 
[Open Navigation] 
Banner remains fixed until acknowledged. 
Current Assignment Card 
This is the largest card on the dashboard. 
Purpose 
Immediately tell the oAicer what to do. 
Example 
Current Task 
Inspect Generator G-14 
Ward 18 
Priority 
Critical 
Due 
11:30 AM 
Distance 
1.2 km 
[Start Inspection] 
Card Components 
 Asset Name  
 Asset ID  
 Priority  
 ETA  
 Distance  
 Due Time  
 OAicer Status  
 Start Button  
Task Priority Colors 
Critical 
Red 
High 
Orange 
Medium 
Yellow 
Routine 
Blue 
Completed 
Green 
Today's Tasks 
Scrollable list. 
Each task displays 
 Icon  
 Asset  
 Ward  
 Priority  
 Due Time  
 Progress  
Example Task 
Pump Inspection 
Ward 12 
Due 
12:00 PM 
Progress 
0% 
▶ Start 
Task Status 
Available states 
Assigned 
Accepted 
In Progress 
Waiting Approval 
Completed 
Rejected 
Synced 
Task Actions 
Each task supports 
 Start  
 Continue  
 View Details  
 Navigate  
 Report Issue  
Swipe gestures: 
Swipe Right 
Accept Task 
Swipe Left 
Mark Unable to Complete 
Quick Actions 
Large touch-friendly buttons. 
+ Start Inspection 
+ Report Incident 
+ Emergency SOS 
+ Upload Evidence 
+ View Map 
+ Contact Supervisor 
Each button is at least 56 × 56 px for reliable touch interaction. 
Navigation Card 
Displays navigation to the current assignment. 
Example 
Destination 
Generator G-14 
Distance 
1.2 km 
ETA 
6 min 
[Open Maps] 
Supports: 
 Internal GIS navigation  
 External navigation apps (optional)  
GPS Verification Widget 
Displays: 
Current Location 
GPS Accuracy 
Last Sync 
Example 
GPS 
Active 
Accuracy 
4 m 
Last Updated 
10 sec ago 
The system should warn the user if GPS accuracy falls below the configured threshold. 
OAline Status Widget 
Critical for field work. 
Example 
OAline Mode 
3 Pending Uploads 
12 Photos 
2 Completed Inspections 
Awaiting Synchronization 
Color: 
Gray when oAline 
Green after successful sync 
Synchronization Panel 
Displays 
Completed 
Pending 
Failed 
Retry 
Example 
Synchronization 
Pending 
5 Items 
[Sync Now] 
Automatic synchronization resumes when connectivity returns. 
Recent Activity 
Displays the oAicer's latest completed actions. 
10:44 
Generator G-09 
Inspection Completed -------------------- 
10:22 
Photo Uploaded 
Pump PS-11 -------------------- 
09:58 
Checklist Submitted 
Notifications 
Categories 
Assignments 
Approvals 
Emergency 
Supervisor Messages 
System 
Example 
New Assignment 
Shelter S-12 
Priority 
High 
Assigned by 
Zone Supervisor 
Bottom Navigation 
Five persistent tabs. 
Home 
Tasks 
Map 
Reports 
Profile 
The currently selected tab is highlighted using the primary brand color. 
Floating Action Button (FAB) 
Position 
Bottom-right. 
Purpose 
Immediate emergency actions. 
Example 
+ 
Emergency 
Tapping expands: 
 Emergency SOS  
 Report Incident  
 Capture Photo  
 Voice Note  
Loading State 
Skeleton placeholders for: 
 Current Task  
 Task List  
 Quick Actions  
 Activity Feed  
The header and bottom navigation should render immediately. 
Empty State 
No Tasks Assigned 
You have no assigned tasks for today. 
Please contact your Zone Supervisor if you believe this is incorrect. 
Primary Action: 
Refresh Tasks 
Error State 
Unable to load assignments. 
Retry 
View Cached Tasks 
OAline Mode 
Core capabilities remain available: 
View downloaded tasks 
Complete inspections 
Capture photos 
Record notes 
GPS tracking (device dependent) 
Save checklist responses 
Unavailable until online: 
Live updates 
New assignments 
Supervisor messaging 
Real-time map layers 
All oAline changes are queued locally and synchronized automatically upon 
reconnection. 
Accessibility 
Requirements: 
 Large touch targets (minimum 48 × 48 px, recommended 56 × 56 px for primary 
actions)  
 High-contrast colors for outdoor visibility  
 VoiceOver/TalkBack compatibility  
 Screen-reader labels for all actionable controls  
 Reduced-motion mode  
 Haptic feedback (where supported) for critical actions such as SOS or 
successful submissions  
 Full support for landscape and portrait orientations  
Responsive Behavior 
Mobile (Primary) 
 Single-column layout  
 Sticky bottom navigation  
 Full-screen task cards  
 Large action buttons  
Tablet 
 Two-column layout  
 Task list beside current assignment  
 Expanded activity feed  
 Persistent quick actions panel  
Desktop access is intentionally restricted to protect field workflows and maintain focus 
on mobile-first interactions. 
Performance Requirements 
Metric 
Dashboard load 
Task refresh 
GPS update 
OAline save 
Target 
< 2 seconds 
≤ 5 seconds 
≤ 10 seconds 
Instant (< 100 ms perceived) 
Sync after reconnect Automatic within 5 seconds 
UI responsiveness 60 FPS 
API Dependencies 
Core Services: 
 Task Management API  
 Inspection API  
 Asset Registry API  
 User Profile API  
Mobile Services: 
 GPS Location Service  
 Camera Service  
 OAline Storage Service  
 Background Sync Service  
Communication: 
 Notification Service  
 Supervisor Messaging API  
 WebSocket Gateway  
Maps: 
 GIS Service  
 Navigation Service  
Analytics Events 
Track operational interactions such as: 
 Dashboard viewed  
 Task accepted  
 Task started  
 Task completed  
 Inspection submitted  
 Photo uploaded  
 OAline mode entered  
 Synchronization completed  
 Navigation launched  
 SOS activated  
Analytics should never capture precise GPS history beyond what is required for 
authorized operational auditing. 
Security Considerations 
 Device authentication required before accessing cached operational data.  
 OAline data stored using encrypted local storage.  
 Sensitive media (photos, documents) encrypted at rest until synchronized.  
 Automatic session lock after configurable inactivity.  
 Emergency SOS actions require confirmation unless configured for one-tap 
activation by policy.  
Micro-Interactions 
 Task cards slide smoothly into view as assignments update.  
 Pull-to-refresh displays a branded circular loader.  
 Successful inspection submission shows a concise success banner with 
optional haptic feedback.  
 OAline synchronization progress animates with a compact progress indicator.  
 Emergency actions provide immediate visual confirmation and tactile feedback 
(where supported).  
Figma Design Notes 
The Field OAicer Dashboard should feel like a professional field operations tool, not a 
generic mobile app. Large touch-friendly controls, excellent outdoor readability, 
minimal text entry, and strong visual prioritization are essential. The current assignment 
should dominate the screen, while oAline awareness and synchronization status 
remain continuously visible. Every interaction should reduce cognitive load and support 
reliable operation under stressful field conditions. 
Screen 9 Status: Complete 
The Field OAicer Dashboard specification is now complete. 
PART 2 — Executive Dashboards 
SCREEN 10 
Command Center Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Command Center Dashboard 
Module 
Primary Users 
Emergency Operations Center (EOC) 
Command Center Operators 
Secondary Users Commissioner, Disaster Head, Emergency Coordinators 
Priority 
Critical (Highest) 
Authentication Required 
Devices 
Desktop, Multi-Monitor Workstations, 4K Display Walls 
Refresh Interval Real-Time (< 2 seconds) 
Theme 
Light, Dark, Command Mode 
Screen Purpose 
The Command Center Dashboard acts as the single source of operational truth during 
disaster preparedness and emergency response. 
It aggregates live information from multiple systems into one continuously updating 
interface: 
 GIS  
 Weather  
 Asset Monitoring  
 Incident Management  
 CCTV  
 IoT Sensors  
 Field Teams  
 AI Predictions  
 Public Alerts  
 Resource Deployment  
Unlike other dashboards, operators are expected to keep this screen open throughout 
their shift. 
Primary Objectives 
Within 5 seconds, operators should identify: 
 Critical incidents  
 Resource bottlenecks  
 Severe weather changes  
 Communication failures  
 Field team locations  
 Infrastructure failures  
Within 30 seconds, they should be able to: 
 Dispatch resources  
 Contact field teams  
 Escalate incidents  
 Monitor live operations  
Information Hierarchy 
Priority order: 
1. Emergency Status Banner  
2. Live City GIS  
3. Active Incident Command Panel  
4. Weather & Cyclone Intelligence  
5. Resource Deployment  
6. CCTV & Sensor Monitoring  
7. Communications  
8. Activity Timeline  
9. AI Decision Support  
4K Desktop Layout (3840 × 2160) 
+--------------------------------------------------------------------------------------------------------------------+ 
| Header: Logo | Incident Counter | Global Search | Notifications | Operator | Clock | 
Connectivity                
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| EMERGENCY STATUS BANNER                                                                                             
| 
+--------------------------------------------------------------------------------------------------------------------+ 
|                                
|                                
|                                
|         
|                                
|                                
|                                
|                                
|                                   
|                                                
| Weather Intelligence              
| 
| Active Incident Queue                          
| 
|-----------------------------------|------------------------------------------------| 
LIVE CITY GIS          
| AI Risk Predictions               
| Resource Deployment                            
|-----------------------------------|------------------------------------------------| 
| Sensor Health                     
| Team Status                                    
| 
|-----------------------------------|------------------------------------------------| 
| CCTV Grid                         
| Communications                                 
| 
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| Activity Timeline | Public Alerts | System Health | Audit Stream | AI Recommendations                             
| 
+--------------------------------------------------------------------------------------------------------------------+ 
Global Header 
Persistent across all screens. 
Left 
 GVMC Logo  
 CycloneGuard Branding  
Center 
Global Search 
Supports: 
 Assets  
 Incidents  
 OAicers  
 Vehicles  
 Wards  
 Shelters  
 Resource IDs  
Right 
 Live Clock  
 Shift Indicator  
 Notification Center  
 Connection Status  
 Operator Profile  
Emergency Status Banner 
Always visible during disaster activation. 
Example: 
EMERGENCY RESPONSE LEVEL 4 
Cyclone VARUNA 
Landfall ETA 
08h 42m 
Wind 
148 km/h 
Rainfall 
224 mm 
Active Incidents 
28 
Resources Deployed 
462 
Command Status 
ACTIVE 
Banner updates automatically. 
Live City GIS 
The GIS occupies approximately 50% of the dashboard width. 
This is the primary operational workspace. 
Displays: 
 Administrative Boundaries  
 Wards  
 Zones  
 Roads  
 Rivers  
 Flood Heatmaps  
 Cyclone Track  
 Wind Direction  
 Rainfall Overlay  
 Shelters  
 Hospitals  
 Pumps  
 Generators  
 Rescue Boats  
 Vehicles  
 Field OAicers  
 Active Incidents  
GIS Layers 
Operators may enable: 
 Satellite View  
 Terrain  
 Hybrid  
 Flood Risk  
 Rainfall  
 Wind  
 TraAic  
 Power Grid  
 Water Network  
 Communication Towers  
GIS Controls 
Floating controls: 
 Zoom  
 Reset  
 Full Screen  
 Layer Manager  
 Measurement  
 Print Map  
 Incident Filter  
 Time Slider  
Live Incident Overlay 
Each incident marker includes: 
Color: 
Red 
Critical 
Orange 
High 
Yellow 
Medium 
Green 
Resolved 
Clicking a marker opens an operational drawer. 
Incident Drawer 
Incident 
Transformer Failure 
Ward 
16 
Priority 
Critical 
Assigned Team 
Electrical Unit 3 
Elapsed 
32 Minutes 
Resources 
2 Vehicles 
1 Generator 
ETA 
11 Minutes 
[Open Incident] 
[Dispatch] 
[Escalate] 
Weather Intelligence Panel 
Displays information from IMD and integrated weather services. 
Metrics: 
 Temperature  
 Wind Speed  
 Wind Direction  
 Rainfall  
 Humidity  
 Pressure  
 Storm Surge  
 Lightning Probability  
Visualizations: 
 24-hour Forecast  
 Cyclone Cone  
 Rainfall Graph  
 Wind Rose  
 Radar Snapshot  
AI Risk Intelligence 
The AI panel continuously analyzes: 
 Weather severity  
 Resource utilization  
 Asset failures  
 Historical disaster patterns  
 Current field reports  
Outputs: 
AI Assessment 
Overall Risk 
HIGH 
Confidence 
94% 
Expected Flood Zones 
Ward 16 
Ward 18 
Ward 20 
Recommended Actions 
Deploy 3 Pumps 
Open Shelter 12 
Move Generator G-18 
Active Incident Queue 
Prioritized incident list. 
Columns: 
 Incident ID  
 Type  
 Severity  
 Ward  
 Assigned Team  
 SLA Timer  
 Current Status  
Actions: 
 Open  
 Dispatch  
 Escalate  
 Close  
Resource Deployment Panel 
Tracks operational resources. 
Categories: 
 Vehicles  
 Pumps  
 Generators  
 Boats  
 Medical Teams  
 Police Units  
 Fire Services  
 Volunteers  
Example: 
Vehicles 
Available 
28 
Deployed 
42 
Maintenance 
3 
Visualization: 
 Stacked bars  
 Availability gauges  
 Geographic deployment map  
Team Status Panel 
Shows all response teams. 
Each card includes: 
 Team Name  
 Members Active  
 Current Assignment  
 Average ETA  
 Availability  
 Communication Status  
Example: 
Road Clearance Team A 
12 Members 
Active 
Ward 10 
ETA 
8 min 
CCTV Monitoring Grid 
Displays configurable live camera feeds. 
Default: 
2 × 2 grid 
Expandable to: 
4 × 4 grid 
Each tile shows: 
 Camera ID  
 Location  
 Timestamp  
 Stream Quality  
 Connection Status  
Controls: 
 Full Screen  
 Snapshot  
 Switch Camera  
 PTZ (if supported)  
Sensor Health Panel 
Monitors connected IoT infrastructure. 
Examples: 
 Water Level Sensors  
 Rain Gauges  
 Wind Sensors  
 Power Monitors  
 Generator Telemetry  
Each sensor displays: 
 Status  
 Last Reading  
 Battery  
 Signal Strength  
 Last Communication  
Communications Center 
Integrated communication hub. 
Supports: 
 Broadcast Messages  
 Team Chat  
 Voice Calls  
 Video Conference  
 Emergency Hotline  
 Supervisor Messaging  
Quick actions: 
 Contact Zone Supervisor  
 Call Field OAicer  
 Notify Commissioner  
 Send Public Alert  
Activity Timeline 
Chronological feed of operational events. 
Example: 
11:42 
Flood Alert Updated -------------------- 
11:39 
Team B Deployed -------------------- 
11:36 
Pump Failure 
-------------------- 
11:34 
Generator Restored 
Filters: 
 Incident  
 Team  
 Asset  
 Time  
 Severity  
Public Alert Panel 
Displays citizen-facing notifications. 
Examples: 
 Road Closure  
 Cyclone Warning  
 Shelter Availability  
 Evacuation Order  
 Flood Advisory  
Actions: 
 Draft  
 Review  
 Broadcast  
 Archive  
System Health Panel 
Monitors platform reliability. 
Metrics: 
 API Status  
 Database Health  
 WebSocket Connections  
 GIS Service  
 AI Engine  
 Notification Queue  
 Sync Status  
Health indicators: 
Healthy 
Warning 
Critical 
AI Recommendations Feed 
Continuous operational recommendations. 
Examples: 
 Reallocate rescue boats.  
 Increase staAing at Shelter 8.  
 Dispatch medical team to Ward 12.  
 Activate backup generator at Zone 5.  
Each recommendation includes: 
 Confidence Score  
 Expected Impact  
 Time Sensitivity  
 Execute Button  
 Dismiss Button  
Shift Handover Panel 
Supports 24×7 operations. 
Displays: 
 Current Shift  
 Incoming Shift  
 Open Incidents  
 Pending Tasks  
 Handover Notes  
Operators can generate a structured handover summary before ending their shift. 
Multi-Monitor Support 
The interface should support splitting across multiple displays: 
Monitor 1 
 GIS Map  
Monitor 2 
 Incidents  
 Resources  
 Weather  
Monitor 3 
 CCTV  
 Communications  
 Activity Feed  
Layouts should remain synchronized in real time. 
Loading State 
Progressive loading sequence: 
1. Header  
2. Emergency Banner  
3. GIS Base Map  
4. Incident Layer  
5. Weather Data  
6. Resource Panels  
7. CCTV Streams  
8. AI Recommendations  
Skeleton placeholders should preserve layout stability. 
Empty State 
No Active Incidents 
All monitored systems are operating normally. 
Continue monitoring city operations. 
Error State 
Unable to retrieve live operational data. 
Retry 
Switch to Cached Snapshot 
Report Issue 
OAline / Degraded Mode 
If external services fail: 
 Continue displaying cached GIS tiles.  
 Preserve local incident queue.  
 Queue outbound communications where possible.  
 Clearly identify stale data with timestamps.  
 Notify operators of degraded subsystems.  
Accessibility 
The Command Center must support: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader landmarks  
 High-contrast mode  
 Reduced motion  
 Large display readability  
 Color-independent status indicators  
 Scalable typography for wall displays  
Performance Targets 
Metric 
Initial dashboard render 
GIS refresh 
Incident updates 
CCTV stream startup 
Target 
< 3 seconds 
≤ 2 seconds 
Real-time 
< 5 seconds 
AI recommendation latency < 3 seconds 
Dashboard animation 
60 FPS 
API Dependencies 
Core Services 
 Authentication API  
 User & Role Management API  
 Incident Management API  
 Asset Registry API  
Operational Services 
 Resource Management API  
 Team Management API  
 Communication API  
 Notification Service  
Intelligence Services 
 AI Prediction Engine  
 Weather Integration  
 GIS Service  
 IoT Sensor Gateway  
Infrastructure 
 CCTV Streaming Service  
 WebSocket Gateway  
 Audit Logging Service  
 Monitoring & Health API  
Analytics Events 
Capture operational events including: 
 Dashboard opened  
 GIS layer toggled  
 Incident dispatched  
 Resource allocated  
 CCTV feed expanded  
 AI recommendation executed  
 Public alert broadcast  
 Communication initiated  
 Shift handover generated  
Security & Audit 
Every operational command should be audited with: 
 Operator ID  
 Role  
 Timestamp  
 Action performed  
 AAected incident/resource  
 Device information  
 Session ID  
 Outcome (Success/Failure)  
High-impact actions, such as emergency broadcasts or mass resource deployments, 
should require confirmation and role-based authorization. 
Figma Design Notes 
The Command Center Dashboard should resemble a modern Emergency Operations 
Center (EOC) rather than a traditional business dashboard. Information density is 
intentionally high but organized into clear operational zones. The live GIS map should 
anchor the interface, while incidents, weather, communications, and AI 
recommendations surround it as coordinated decision-support panels. The design 
should prioritize rapid situational awareness, continuous monitoring, and eAicient 
operator workflows during prolonged emergency operations. 
PART 3 — GIS & Spatial Intelligence 
SCREEN 11 
City Map (Master GIS Command View) 
Screen Metadata 
Property 
Value 
Screen Name City Map 
Module 
Primary Users 
GIS & Spatial Intelligence 
Commissioner, Disaster Head, Command Center Operators 
Secondary Users Zone Supervisors (Read-only) 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Large Displays 
Refresh Interval Real-Time 
Theme 
Light, Dark, Satellite 
Screen Purpose 
The City Map provides a live geospatial representation of the entire GVMC 
operational area, enabling users to visualize assets, incidents, weather, personnel, and 
infrastructure on a single interactive map. 
Unlike the dashboard's embedded GIS widget, this screen is a full-featured geospatial 
workspace with advanced tools for analysis, filtering, route planning, temporal 
playback, and operational decision-making. 
Primary User Goals 
Within 15 seconds, users should be able to: 
 Identify aAected areas.  
 Locate critical assets.  
 View active incidents.  
 Understand weather impact.  
 Analyze resource distribution.  
Within 60 seconds, users should be able to: 
 Dispatch resources.  
 Filter map layers.  
 Measure distances.  
 Generate map-based reports.  
 Share a focused operational view.  
Information Hierarchy 
Priority order: 
1. Interactive City Map  
2. Layer Controls  
3. Incident & Asset Filters  
4. Map Toolbar  
5. Information Drawer  
6. Timeline Playback  
7. Legend  
8. Analytics Overlay  
Desktop Layout (1920 × 1080) 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Saved Views | Notifications | User Profile                                        
| 
+------------------------------------------------------------------------------------------------------+ 
| Toolbar                                                                                              
| 
+------------------------------------------------------------------------------------------------------+ 
| Layer Panel |                                                                 
|             
|             
|             
|             
|             
|                                                                 
|                                                                 
|                     
|                                                                 
|                                                                 
| Information Drawer    | 
|-----------------------| 
| Selected Asset        
INTERACTIVE CITY MAP                        
| 
| Incident Details      | 
| Weather Summary       | 
| Nearby Resources      | 
|             
|                                                                 
| Actions               
| 
|-------------|-----------------------------------------------------------------|-----------------------| 
| Timeline Slider | Legend | Coordinates | Scale | Map Status                                           
| 
+------------------------------------------------------------------------------------------------------+ 
Header 
Left Section 
 GVMC Logo  
 CycloneGuard Logo  
 Breadcrumb  
Home 
> 
GIS 
> 
City Map 
Center 
Global GIS Search 
Supports: 
 Assets  
 Roads  
 Shelters  
 Wards  
 Zones  
 OAicers  
 Incident IDs  
 GPS Coordinates  
Autocomplete appears after two characters. 
Right Section 
 Saved Views  
 Print Map  
 Export  
 Notifications  
 User Profile  
Interactive Map Canvas 
The map occupies approximately 75% of the available screen. 
The canvas supports: 
 Smooth panning  
 Mouse-wheel zoom  
 Touch gestures  
 Keyboard navigation  
 Full-screen mode  
Base Map Options 
Users can switch between: 
1. Standard Road Map  
2. Satellite Imagery  
3. Hybrid View  
4. Terrain  
5. High Contrast Emergency Map  
Switching layers should preserve: 
 Zoom level  
 Active filters  
 Selected objects  
Administrative Layers 
Available layers: 
 City Boundary  
 Zone Boundaries  
 Ward Boundaries  
 Polling Areas  
 Revenue Divisions  
 Coastal BuAer Zones  
Each boundary includes: 
 Name  
 Code  
 Population  
 Preparedness Score  
Asset Layers 
Supported asset categories: 
 Pumps  
 Generators  
 Shelters  
 Hospitals  
 Schools  
 Drainage Infrastructure  
 Electrical Substations  
 Water Tanks  
 Communication Towers  
 Emergency Warehouses  
 Relief Camps  
Each asset type uses a unique icon and color. 
Incident Layers 
Incident markers include: 
 Flooding  
 Waterlogging  
 Fallen Trees  
 Power Outage  
 Road Blockage  
 Building Damage  
 Medical Emergency  
 Fire  
 Rescue Operation  
Severity is represented using both color and icon shape. 
Personnel Layer 
Displays live locations of: 
 Field OAicers  
 Zone Supervisors  
 Rescue Teams  
 Medical Teams  
 Police Units  
Marker status: 
Available 
Assigned 
Emergency 
OAline 
Clicking a personnel marker opens a profile card. 
Weather Layers 
Supported overlays: 
 Rainfall Intensity  
 Wind Speed  
 Wind Direction  
 Cyclone Track  
 Flood Probability  
 Lightning Alerts  
 Storm Surge Zones  
 Temperature Heatmap  
Opacity for each weather layer can be adjusted independently. 
Layer Management Panel 
Located on the left. 
Supports grouped checkboxes. 
Example: 
☑ Administrative 
☑ Zones 
☑ Wards ---------------- 
☑ Assets 
☑ Pumps 
☑ Generators 
☐ Hospitals 
☑ Shelters ---------------- 
☑ Weather 
☑ Rainfall 
☐ Wind 
☐ Temperature ---------------- 
☑ Incidents 
☑ Personnel 
Additional controls: 
 Expand/Collapse groups  
 Search layers  
 Reset to defaults  
 Save current configuration  
Map Toolbar 
Floating toolbar on the right. 
Tools: 
 Zoom In  
 Zoom Out  
 Reset View  
 Full Screen  
 Measure Distance  
 Measure Area  
 Draw Polygon  
 Draw Circle  
 Drop Marker  
 Route Planner  
 Screenshot  
 Print Map  
Tooltips appear on hover. 
Measurement Tool 
Supports: 
Distance 
Point A → Point B 
Distance 
2.8 km 
Area 
Selected Flood Zone 
Area 
3.4 sq km 
Users can export measurements to reports. 
Route Planner 
Users can select: 
Start 
 OAicer  
 Vehicle  
 Shelter  
Destination 
 Incident  
 Asset  
 Ward  
Outputs: 
 Fastest Route  
 Shortest Route  
 Flood-Avoidance Route  
Estimated: 
 Distance  
 Travel Time  
 Road Closures  
Information Drawer 
Appears when an object is selected. 
Example: 
Pump Station PS-16 
Ward 8 
Status 
Operational 
Capacity 
5200 L/min 
Last Inspection 
Today 
Assigned OAicer 
Anita Rao 
Nearby Incidents 
2 
Weather Risk 
Medium 
Actions: 
 Open Asset  
 Start Inspection  
 Navigate  
 Generate Report  
 View Timeline  
Map Clustering 
When zoomed out: 
Nearby markers automatically cluster. 
Example: 
(18) 
Pumps 
Cluster interaction: 
 Hover → Preview summary  
 Click → Zoom into cluster  
 Right-click → Show cluster statistics  
Heatmaps 
Supported heatmaps: 
 Incident Density  
 Flood Risk  
 Asset Failures  
 Shelter Occupancy  
 Resource Distribution  
 Population Density  
Users can adjust: 
 Radius  
 Intensity  
 Opacity  
 Color Scale  
Temporal Playback 
Timeline slider located at the bottom. 
Supports playback of historical data. 
Example: 
July 28 
08:00 
──────────────▶ 
July 31 
14:00 
Playback speed: 
 1×  
 2×  
 5×  
 10×  
Use cases: 
 Cyclone progression  
 Incident evolution  
 Resource movement  
 Team deployment history  
Legend 
Dynamic legend updates based on enabled layers. 
Example: 
Operational 
Maintenance 
Failed 
Shelter 
Flood 
OAicer 
The legend can be collapsed but remains easily accessible. 
Context Menu (Right-Click) 
Available actions vary by object type. 
For an asset: 
 View Details  
 Assign OAicer  
 Create Inspection  
 Report Issue  
 Show Nearby Incidents  
For an incident: 
 Open Incident  
 Dispatch Team  
 Escalate  
 View Timeline  
 Navigate  
Search Results Panel 
Selecting a search result: 
 Centers the map  
 Highlights the object  
 Opens the Information Drawer  
 Displays breadcrumb context  
Example: 
Generator G-22 
Zone 3 
Ward 15 
Operational 
Loading State 
Loading sequence: 
1. Base map  
2. Administrative boundaries  
3. Assets  
4. Incidents  
5. Personnel  
6. Weather overlays  
7. Labels  
Progressive loading ensures the map is usable as quickly as possible. 
Empty State 
No objects match the current filters. 
Try adjusting filters or clearing the search. 
Action: 
Reset Filters 
Error State 
Unable to load GIS layers. 
Retry 
View Cached Map 
Report Issue 
If weather layers fail, the rest of the map should remain functional. 
OAline Mode 
Supported capabilities: 
 Cached base maps  
 Recently viewed assets  
 Downloaded inspection routes  
 Local measurements  
Unavailable: 
 Live personnel tracking  
 Real-time weather  
 WebSocket updates  
A persistent banner should indicate when map data is stale. 
Accessibility 
The GIS workspace must support: 
 WCAG 2.2 AA  
 Keyboard-accessible map controls  
 Screen-reader descriptions for selected objects  
 High-contrast map mode  
 Color-independent symbols  
 Zoom support up to 400%  
 Accessible measurement tool dialogs  
Performance Targets 
Metric 
Target 
Initial base map render < 2 seconds 
Layer toggle response 
< 300 ms 
Marker clustering update < 500 ms 
Search result focus 
Smooth pan/zoom 
Timeline playback 
< 1 second 
60 FPS 
Continuous at selected speed 
API Dependencies 
Geospatial Services 
 GIS Tile Service  
 Vector Tile API  
 Geocoding API  
 Reverse Geocoding API  
 Routing & Navigation API  
Operational Services 
 Asset Registry API  
 Incident Management API  
 Personnel Tracking API  
 Resource Management API  
Environmental Services 
 Weather Integration API  
 Cyclone Forecast API  
 Flood Prediction API  
Infrastructure 
 WebSocket Gateway  
 Map Cache Service  
 Analytics Service  
Analytics Events 
Track interactions such as: 
 Map opened  
 Layer toggled  
 Asset selected  
 Incident selected  
 Route generated  
 Measurement completed  
 Heatmap enabled  
 Timeline playback started  
 Search executed  
 Map exported  
Security & Permissions 
Access to layers should be role-aware: 
 Commissioners: Full access  
 Disaster Head: Full operational layers  
 Zone Supervisors: Assigned zones editable, city view read-only  
 Field OAicers: Restricted to assigned tasks and downloaded operational areas  
Edits to operational objects should always generate audit logs. 
Figma Design Notes 
The City Map should feel like the central geospatial intelligence platform of 
CycloneGuard. The map itself must remain the visual focus, while surrounding panels 
provide contextual information without obscuring the workspace. Layer management, 
measurement tools, route planning, and temporal playback should be intuitive and 
consistent with enterprise GIS applications. Animations should be subtle, and map 
interactions must remain smooth even with thousands of visible features. 
PART 3 — GIS & Spatial Intelligence 
SCREEN 12 
Zone Map (Operational Zone GIS) 
Screen Metadata 
Property 
Value 
Screen Name Zone Map 
Module 
Primary Users 
GIS & Spatial Intelligence 
Zone Supervisors 
Secondary Users Disaster Head (Operational View) 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Tablet 
Property 
Value 
Refresh Interval Real-Time (5 seconds) 
Theme 
Light, Dark, Satellite 
Screen Purpose 
The Zone Map provides a high-resolution operational view of a single administrative 
zone. It allows supervisors to: 
 Monitor field operations  
 Track inspections  
 View asset readiness  
 Respond to local incidents  
 Coordinate oAicers  
 Allocate resources  
 Analyze zone preparedness  
Unlike the City Map, the Zone Map prioritizes operational workflows over strategic 
analysis. 
Primary User Goals 
Within 10 seconds, the supervisor should identify: 
 Active incidents in the zone  
 OAicer locations  
 Assets requiring attention  
 Pending inspections  
 High-risk wards  
Within 30 seconds, the supervisor should be able to: 
 Assign oAicers  
 Open inspection details  
 Dispatch nearby resources  
 Escalate incidents  
 Plan local response routes  
Information Hierarchy 
Priority order: 
1. Zone GIS Canvas  
2. Operational Toolbar  
3. Zone Readiness Summary  
4. OAicer Tracking  
5. Incident Queue  
6. Asset Information Drawer  
7. Inspection Progress  
8. Local Weather Overlay  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Zone Selector | Search | Notifications | User Profile                                      
| 
+------------------------------------------------------------------------------------------------------+ 
| Zone Status Summary                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Layer Panel |                                                               
|             
|             
|             
|             
|             
|                                                               
|                                                               
|                     
|                                                               
|                                                               
| Incident Drawer        
|------------------------| 
| Asset Details          
ZONE MAP                                  
| 
| OAicer Details        
| Inspection Status      | 
| Resource Actions       | 
| 
| 
|-------------|---------------------------------------------------------------|------------------------| 
| Ward Summary | Inspection Progress | Timeline | Legend | Scale | Coordinates                  
| 
+------------------------------------------------------------------------------------------------------+ 
Header 
Left 
 GVMC Logo  
 CycloneGuard  
 Breadcrumb  
Home 
> 
GIS 
> 
Zone Map 
> 
Zone 4 
Center 
Zone Search 
Searches: 
 Assets  
 OAicers  
 Wards  
 Shelters  
 Incidents  
Auto-complete supports fuzzy matching. 
Right 
 Notifications  
 Saved Filters  
 Export Map  
 Profile  
Zone Status Summary 
A compact information banner. 
Example 
Zone 4 
Preparedness 
91% 
Assets Operational 
184 / 192 
Active Incidents 
3 
Pending Inspections 
12 
Field OAicers Active 
28 
Color coding: 
Green 
Normal 
Orange 
Attention Required 
Red 
Critical 
GIS Canvas 
The map fills approximately 70% of the screen. 
Displays: 
 Zone Boundary  
 Ward Boundaries  
 Roads  
 Critical Assets  
 Shelters  
 Flood-Prone Areas  
 Field OAicers  
 Vehicles  
 Active Incidents  
The map automatically zooms to the selected zone. 
Ward Readiness Overlay 
Each ward is shaded according to its preparedness score. 
Example: 
Score Color 
90–100 Dark Green 
75–89 Light Green 
Score Color 
60–74 Yellow 
40–59 Orange 
<40 
Red 
Hover tooltip: 
Ward 18 
Preparedness 
78% 
Assets 
42 
Pending Inspections 
4 
Open Incidents 
1 
Asset Layer 
Asset categories: 
 Pumps  
 Generators  
 Shelters  
 Drainage Points  
 Medical Centers  
 Water Tanks  
 Communication Towers  
Marker colors: 
Operational 
Inspection Due 
Maintenance 
Failed 
Asset Detail Drawer 
Appears on selection. 
Example 
Generator G-14 
Ward 18 
Operational 
Capacity 
125 kVA 
Fuel 
78% 
Last Inspection 
Today 
Assigned OAicer 
Anita Rao 
Nearby Incident 
Flood Warning 
Actions 
 Open Asset Details  
 Schedule Inspection  
 Report Fault  
 Assign OAicer  
 Navigate  
OAicer Tracking Layer 
Displays all oAicers assigned to the zone. 
Marker states: 
Available 
Working 
Emergency 
OAline 
Hover: 
OAicer 
Ravi Kumar 
Current Task 
Pump Inspection 
ETA 
8 Minutes 
Battery 
76% 
OAicer Context Menu 
Actions: 
 View Profile  
 Assign Task  
 Send Message  
 Call OAicer  
 Navigate to OAicer  
Incident Layer 
Displays: 
 Flooding  
 Road Closure  
 Fallen Trees  
 Generator Failure  
 Shelter Overcapacity  
 Medical Emergency  
Severity: 
Critical 
Red 
High 
Orange 
Medium 
Yellow 
Resolved 
Green 
Incident Detail Drawer 
Flooded Road 
Ward 11 
Severity 
High 
Elapsed 
18 min 
Assigned Team 
Road Clearance Unit 
Resources 
2 Vehicles 
Status 
In Progress 
Actions: 
 Escalate  
 Dispatch Resource  
 Contact Team  
 View Timeline  
 Close Incident  
Inspection Progress Panel 
Displays inspection status for the zone. 
Visualization: 
Progress bars by ward. 
Example 
Ward 10 
██████████ 
100% 
Ward 11 
███████ 
72% 
Ward 12 
████ 
45% 
Filters: 
 Today  
 This Week  
 This Month  
Resource Deployment Layer 
Displays: 
 Vehicles  
 Boats  
 Pumps  
 Generators  
 Medical Units  
Each resource shows: 
 Current Location  
 Availability  
 Assigned Incident  
 Estimated Arrival  
Local Weather Overlay 
Displays zone-specific conditions: 
 Rainfall  
 Wind Speed  
 Temperature  
 Flood Risk  
 Lightning Alerts  
Weather updates refresh automatically. 
Operational Toolbar 
Available tools: 
 Zoom  
 Full Screen  
 Measure Distance  
 Draw Route  
 Draw Polygon  
 Drop Marker  
 Print  
 Screenshot  
 Reset View  
Route Planning 
Supports: 
Start: 
 OAicer  
 Vehicle  
 Shelter  
Destination: 
 Incident  
 Asset  
Route options: 
 Fastest  
 Flood Safe  
 Shortest  
Outputs: 
 ETA  
 Distance  
 Road Closures  
Ward Summary Panel 
Compact statistics for each ward. 
Ward Preparedness Incidents Inspections Assets 
10 95% 
11 82% 
12 68% 
0 
1 
2 
Rows can be sorted and filtered. 
100% 
72% 
45% 
38 
41 
36 
Timeline Playback 
Allows supervisors to replay: 
 Incident progression  
 Resource movement  
 OAicer routes  
 Inspection completion  
Playback controls: 
 Play  
 Pause  
 Speed (1×, 2×, 5×)  
 Jump to Timestamp  
Legend 
Dynamic based on visible layers. 
Includes: 
 Asset Icons  
 Incident Symbols  
 OAicer Status  
 Weather Colors  
 Readiness Gradient  
Search & Filters 
Filters include: 
 Ward  
 Asset Type  
 Incident Severity  
 OAicer  
 Inspection Status  
 Resource Type  
Saved filter presets: 
 High Risk Wards  
 Pending Inspections  
 Failed Assets  
 Active Incidents  
Loading State 
Progressive loading: 
1. Zone boundary  
2. Roads  
3. Assets  
4. Incidents  
5. OAicers  
6. Weather  
7. Inspection overlays  
Empty State 
No active incidents found in this zone. 
Current operations are normal. 
Continue routine monitoring. 
Primary Action: 
Refresh Data 
Error State 
Unable to load zone map. 
Retry 
View Cached Zone 
Contact GIS Support 
OAline Mode 
Available: 
 Cached map tiles  
 Downloaded asset locations  
 Inspection routes  
 Previously viewed incidents  
Unavailable: 
 Live GPS  
 Real-time weather  
 New incident creation  
 Live oAicer tracking  
A persistent banner indicates the timestamp of the last successful synchronization. 
Accessibility 
Support: 
 WCAG 2.2 AA  
 Keyboard map navigation  
 Screen-reader support  
 High-contrast cartography  
 Color-independent symbols  
 Zoom up to 400%  
 Touch-friendly controls on tablets  
Performance Targets 
Metric 
Zone map load 
Layer toggle 
Target 
< 2 seconds 
< 300 ms 
Route generation < 2 seconds 
OAicer updates Every 5 seconds 
Metric 
Target 
Smooth pan/zoom 60 FPS 
API Dependencies 
GIS Services 
 Vector Tile API  
 Routing API  
 Geocoding API  
 Reverse Geocoding API  
Operational Services 
 Zone Management API  
 Asset Registry API  
 Incident Management API  
 Inspection API  
 OAicer Tracking API  
 Resource Allocation API  
Environmental Services 
 Weather API  
 Flood Prediction API  
Infrastructure 
 WebSocket Gateway  
 GIS Cache Service  
 Analytics Service  
Analytics Events 
Track: 
 Zone map opened  
 Ward selected  
 Asset viewed  
 OAicer selected  
 Incident opened  
 Route generated  
 Inspection progress viewed  
 Filter applied  
 Layer toggled  
 Map exported  
Security & Permissions 
 Supervisors can modify only assets, inspections, and incidents within their 
assigned zone.  
 Disaster Head has read/write access across all zones.  
 Commissioners have read-only access for operational layers.  
 All edits, assignments, and dispatch actions are recorded in the audit log.  
Figma Design Notes 
The Zone Map should provide a focused tactical GIS experience. Compared to the City 
Map, it reduces strategic complexity while increasing operational detail. Ward readiness 
overlays, oAicer tracking, inspection progress, and localized incident management 
should be immediately accessible without overwhelming the map. The design should 
support rapid decision-making during active operations while maintaining consistency 
with the broader CycloneGuard GIS ecosystem. 
PART 3 — GIS & Spatial Intelligence 
SCREEN 13 
Ward Map (Hyperlocal Operational GIS) 
Screen Metadata 
Property 
Value 
Screen Name Ward Map 
Module 
Primary Users 
GIS & Spatial Intelligence 
Zone Supervisor, Field OAicer 
Secondary Users Disaster Head 
Priority 
High 
Authentication Required 
Devices 
Desktop, Tablet, Mobile 
Refresh Interval Real-Time (3–5 seconds) 
Theme 
Light, Dark, Satellite 
Screen Purpose 
The Ward Map provides street-level operational intelligence for a single ward. 
Unlike broader GIS views, this map emphasizes: 
 Street-level navigation  
 Individual asset monitoring  
 Inspection routes  
 Micro-flood hotspots  
 OAicer movement  
 Localized incident response  
 Drainage infrastructure  
 Shelter accessibility  
The Ward Map supports rapid tactical decisions in highly localized operational contexts. 
Primary User Goals 
Within 5 seconds, users should identify: 
 Current ward status  
 Nearby incidents  
 Asset health  
 Assigned oAicers  
 Flood-prone streets  
Within 20 seconds, users should be able to: 
 Navigate to an asset  
 Begin an inspection  
 Dispatch nearby personnel  
 Identify blocked roads  
 Review ward readiness  
Information Hierarchy 
Priority: 
1. Street-Level Map  
2. Current Location  
3. Nearby Incidents  
4. Asset Details  
5. OAicer Tracking  
6. Inspection Routes  
7. Local Weather  
8. Operational Actions  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Ward Selector | Search | Notifications | Profile                                            
| 
+------------------------------------------------------------------------------------------------------+ 
| Ward Overview Banner                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Layers |                                                                    
| Details Drawer         
| 
|        
|        
|        
|        
|        
|                                                                    
|                                                                    
|                       
|                                                                    
|                                                                    
|------------------------| 
| Selected Asset         
STREET LEVEL MAP                              
| 
| Incident Info          
| OAicer Details        
| Quick Actions          
| 
| 
| 
|--------|--------------------------------------------------------------------|------------------------| 
| Route Panel | Legend | GPS | Scale | Weather | Inspection Progress                               
| 
+------------------------------------------------------------------------------------------------------+ 
Mobile Layout ---------------------------------- 
Ward Banner ---------------------------------- 
Street Map ---------------------------------- 
Quick Actions ---------------------------------- 
Selected Asset Card ---------------------------------- 
Navigation ---------------------------------- 
Bottom Navigation ---------------------------------- 
Ward Overview Banner 
Example 
Ward 18 
Preparedness 
82% 
Assets 
43 
Incidents 
2 
Inspection Completion 
74% 
Weather Risk 
HIGH 
Status Colors 
Preparedness Color 
Excellent 
Good 
Moderate 
Low 
Critical 
Green 
Light Green 
Yellow 
Orange 
Red 
Street-Level GIS Canvas 
The map displays: 
 Roads  
 Streets  
 Lanes  
 Buildings  
 Drainage Channels  
 Stormwater Lines  
 Culverts  
 Bridges  
 Water Bodies  
 Public Buildings  
The map should support zoom levels suitable for building-level visualization. 
Hyperlocal Asset Layer 
Supported assets: 
 Pump Stations  
 Electric Transformers  
 Drainage Inlets  
 Water Pumps  
 Street Lights  
 Generators  
 CCTV Cameras  
 Public Shelters  
 Emergency Sirens  
Each marker includes: 
 Status  
 Last Inspection  
 Assigned OAicer  
 Operational State  
Asset Detail Drawer 
Example 
Pump PS-22 
Operational 
Ward 18 
Inspection 
Completed Today 
Capacity 
3500 L/min 
Water Level 
Normal 
Assigned OAicer 
Ravi Kumar 
Nearby Incidents 
1 
Quick Actions 
 Start Inspection  
 Report Fault  
 View History  
 Navigate  
 Contact Supervisor  
Micro-Flood Hotspots 
Special overlay highlighting: 
 Waterlogging Areas  
 Low-Lying Streets  
 Overflowing Drains  
 Flood Prediction Zones  
Visualization: 
Heatmap with intensity levels. 
Level 
Low 
Color 
Light Blue 
Moderate Blue 
High 
Orange 
Severe Red 
Drainage Network Layer 
Displays: 
 Stormwater Drains  
 Underground Drain Lines  
 Open Canals  
 Culverts  
 Outfalls  
Each drainage segment displays: 
 Flow Status  
 Capacity  
 Last Cleaning Date  
 Current Obstruction Status  
Road Condition Layer 
Road segments indicate: 
Open 
Partial Access 
Congested 
Blocked 
Blocked roads display: 
 Cause  
 Estimated Clearance Time  
 Responsible Team  
OAicer Tracking 
Displays: 
 Current GPS  
 Walking Route  
 Vehicle Route  
 Current Assignment  
 ETA  
Selecting an oAicer shows: 
OAicer 
Anita Rao 
Current Task 
Drain Inspection 
ETA 
6 Minutes 
Battery 
84% 
GPS Accuracy 
3 m 
Actions: 
 Call  
 Assign Task  
 Send Message  
 Navigate  
Inspection Route Overlay 
Displays: 
 Planned Route  
 Completed Stops  
 Remaining Stops  
 Estimated Completion Time  
Example 
Today's Route 
15 Assets 
Completed 
9 
Remaining 
6 
ETA 
2h 15m 
Completed inspections appear in green. 
Pending inspections appear in blue. 
Missed inspections appear in red. 
Incident Layer 
Localized incidents include: 
 Waterlogging  
 Drain Blockage  
 Fallen Tree  
 Power Failure  
 Shelter Overflow  
 Road Damage  
 Utility Failure  
Clicking an incident opens: 
Flooding 
Street 
Beach Road 
Severity 
High 
Elapsed 
24 min 
Assigned Team 
Road Unit 
Status 
Responding 
Nearby Resource Finder 
Automatically suggests nearby: 
 OAicers  
 Pumps  
 Vehicles  
 Generators  
 Medical Teams  
Example 
Nearest Resources 
Pump Vehicle 
420 m 
OAicer Ravi 
250 m 
Generator 
620 m 
Actions: 
 Dispatch  
 Navigate  
Local Weather Panel 
Displays: 
 Rainfall  
 Wind Speed  
 Temperature  
 Flood Risk  
 Next Hour Forecast  
Micro-weather alerts appear immediately when thresholds are exceeded. 
Operational Toolbar 
Tools 
 Zoom  
 Measure  
 Draw Route  
 Add Marker  
 Screenshot  
 Print  
 Compass  
 GPS Center  
 OAline Maps  
GPS Accuracy Widget 
Example 
GPS 
Active 
Accuracy 
2.8 m 
Signal 
Excellent 
Warnings appear when accuracy drops below operational requirements. 
Inspection Progress Panel 
Displays: 
Status 
Count 
Assigned 18 
In Progress 6 
Completed 52 
Overdue 4 
Progress visualization: 
Circular progress indicator 
Route Optimization 
System suggests optimized routes considering: 
 Road closures  
 Flood depth  
 TraAic  
 Distance  
 Asset priority  
Options: 
 Fastest  
 Safest  
 Least Fuel  
 Emergency Route  
Search 
Search supports: 
 Street Name  
 Asset ID  
 OAicer  
 Building  
 GPS Coordinate  
Search results automatically zoom to location. 
Loading State 
Progressive loading: 
1. Base Map  
2. Streets  
3. Assets  
4. Incidents  
5. OAicers  
6. Weather  
7. Inspection Routes  
Empty State 
No active incidents. 
Routine ward operations are ongoing. 
Continue scheduled inspections. 
Error State 
Unable to load ward information. 
Retry 
View Cached Ward 
Contact GIS Support 
OAline Mode 
Available: 
 Cached maps  
 Inspection routes  
 Downloaded assets  
 OAline navigation  
 Local measurements  
Unavailable: 
 Live tracking  
 Real-time weather  
 New assignments  
 Live messaging  
Automatic synchronization begins once connectivity returns. 
Accessibility 
Support: 
 WCAG 2.2 AA  
 Keyboard navigation (desktop)  
 Touch-first controls (mobile/tablet)  
 High-contrast mode  
 Screen-reader support  
 Color-independent symbology  
 Zoom up to 400%  
Responsive Behavior 
Desktop 
 Full GIS workspace  
 Side information drawer  
 Multi-layer controls  
Tablet 
 Collapsible drawers  
 Floating layer panel  
 Larger touch controls  
Mobile 
 Full-screen map  
 Bottom-sheet information panels  
 Simplified toolbar  
 One-handed operation  
 Sticky action buttons  
Performance Targets 
Metric 
Ward map load 
Street rendering 
Target 
< 2 seconds 
60 FPS 
Route calculation < 2 seconds 
GPS refresh 
Every 3 seconds 
Asset detail loading < 500 ms 
API Dependencies 
GIS Services 
 Street Map Tile API  
 Routing API  
 Reverse Geocoding API  
 OAline Map Service  
Operational Services 
 Ward Management API  
 Asset Registry API  
 Inspection API  
 Incident API  
 OAicer Tracking API  
Environmental Services 
 Weather API  
 Flood Prediction API  
Infrastructure 
 WebSocket Gateway  
 Local Cache Service  
 Analytics Service  
Analytics Events 
Track: 
 Ward map viewed  
 Asset selected  
 OAicer tracked  
 Route generated  
 Inspection route started  
 Nearby resource dispatched  
 Flood overlay enabled  
 OAline maps downloaded  
 Search performed  
 GPS centered  
Security & Permissions 
 Field OAicers can update only their assigned inspections and report incidents 
within their authorized operational area.  
 Zone Supervisors can assign tasks and manage incidents within their zone.  
 Disaster Head has read/write access across all wards.  
 All modifications, dispatches, and navigation actions must be recorded in the 
audit log with timestamps and user identifiers.  
Figma Design Notes 
The Ward Map should deliver a hyperlocal operational GIS experience optimized for 
tactical field coordination. The interface should keep the street-level map as the focal 
point while surfacing contextual information through slide-out drawers and bottom 
sheets, depending on device size. Visual clutter should be minimized through intelligent 
clustering, adaptive labeling, and progressive disclosure of details as users zoom in. 
The overall experience should enable supervisors and field oAicers to move seamlessly 
from situational awareness to action with minimal interaction. 
PART 3 — GIS & Spatial Intelligence 
SCREEN 14 
Asset Map (Infrastructure Intelligence GIS) 
Screen Metadata 
Property 
Value 
Screen Name Asset Map 
Module 
Primary Users 
GIS & Asset Intelligence 
Disaster Head, Asset Managers, Zone Supervisors 
Secondary Users Commissioner (Read-only), Field OAicers 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Tablet 
Refresh Interval Real-Time (5 seconds) 
Theme 
Light, Dark, Satellite 
Screen Purpose 
The Asset Map provides a comprehensive geospatial inventory of all disaster-critical 
infrastructure assets across GVMC. 
It enables users to: 
 Monitor operational health  
 Identify failing infrastructure  
 Track inspection history  
 Predict failures  
 Analyze asset dependencies  
 Prioritize maintenance  
 Visualize readiness before cyclones  
Unlike other GIS screens, every interaction starts from an asset. 
Primary User Goals 
Within 10 seconds, users should identify: 
 Critical failed assets  
 Assets due for inspection  
 Assets supporting emergency infrastructure  
 High-risk assets  
 Resource coverage gaps  
Within 60 seconds, users should be able to: 
 Locate any asset  
 Review maintenance history  
 Assign inspections  
 Generate maintenance plans  
 Analyze operational dependencies  
Information Hierarchy 
Priority order: 
1. Asset GIS Map  
2. Asset Health Dashboard  
3. Asset Details Drawer  
4. Maintenance Intelligence  
5. Inspection Timeline  
6. AI Risk Prediction  
7. Dependency Graph  
8. Nearby Resource Panel  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Asset Search | Filters | Saved Views | Notifications | Profile                            
| 
+------------------------------------------------------------------------------------------------------+ 
| Asset Health Summary                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Asset Layer Panel |                                                    
|                   
|                   
|                   
|                   
|                   
|                                                    
|                                                    
|               
|                                                    
|                                                    
ASSET MAP                            
| Asset Details Drawer        
|-----------------------------| 
| Asset Profile               
| 
| Maintenance History         
| Inspection Timeline         
| AI Risk Assessment          
| 
| 
| 
| 
|-------------------|----------------------------------------------------|-----------------------------| 
| Health Analytics | Maintenance Queue | Dependency Graph | Legend | Scale                           
| 
+------------------------------------------------------------------------------------------------------+ 
Header 
Left 
 GVMC Logo  
 CycloneGuard  
 Breadcrumb  
Home 
> 
GIS 
> 
Asset Map 
Center 
Global Asset Search 
Search by: 
 Asset ID  
 Asset Name  
 QR Code  
 RFID Tag  
 Serial Number  
 Ward  
 Zone  
 Asset Category  
Search suggestions appear instantly. 
Right 
 Export  
 Saved Views  
 Notifications  
 Profile  
Asset Health Summary 
Executive summary cards. 
Example 
Total Assets 
2,486 
--------------------- 
Operational 
2,322 --------------------- 
Maintenance 
118 --------------------- 
Critical Failure 
46 --------------------- 
Inspection Due 
182 --------------------- 
AI High Risk 
37 
Each card links to filtered map views. 
GIS Canvas 
Displays all registered assets. 
Supported categories: 
 Pumps  
 Generators  
 Shelters  
 Electrical Transformers  
 Water Tanks  
 Drainage Infrastructure  
 Flood Sensors  
 Weather Stations  
 Communication Towers  
 CCTV Systems  
 Emergency Vehicles  
 Mobile Pumps  
 Temporary Relief Infrastructure  
Asset Marker Design 
Each marker combines category and health state. 
Example: 
Asset 
Pump 
Shape Status Color 
Circle 
Green / Yellow / Red 
Generator Square Green / Orange / Red 
Asset 
Shape Status Color 
Shelter 
Sensor 
Vehicle 
House Green / Yellow / Red 
Hexagon Green / Gray 
Triangle Blue / Orange 
Status colors: 
Operational 
Inspection Due 
Maintenance 
Failed 
OAline 
Purple outline = AI High-Risk Prediction 
Smart Asset Clustering 
When zoomed out: 
Example 
(42) 
Critical Pumps 
Cluster displays: 
 Operational %  
 Failed Count  
 Inspection Due  
 AI Risk Count  
Click 
→ Expand cluster. 
Asset Detail Drawer 
Appears when selecting an asset. 
Asset Overview 
Example 
Generator G-18 
Zone 4 
Ward 18 
Operational 
125 kVA 
Fuel 
82% 
Installed 
2022 
Manufacturer 
Cummins 
Operational Status 
Displays 
 Current State  
 Availability  
 Last Heartbeat  
 IoT Connectivity  
 Assigned OAicer  
Maintenance Summary 
Preventive Maintenance 
Completed 
18 June ---------------------- 
Corrective Maintenance 
Pending ---------------------- 
Next Scheduled 
12 August 
Inspection Summary 
Last Inspection 
Yesterday 
Inspector 
Ravi Kumar 
Score 
94% 
Photos 
8 
Remarks 
Operational 
Quick Actions 
 View Asset  
 Schedule Inspection  
 Assign OAicer  
 Report Failure  
 Open Maintenance Ticket  
 View Timeline  
 Generate Report  
Asset Lifecycle Timeline 
Chronological visualization. 
Installed 
↓ 
Inspection 
↓ 
Maintenance 
↓ 
Repair 
↓ 
Upgrade 
↓ 
Current State 
Each event includes: 
 Date  
 Technician  
 Work Order  
 Supporting documents  
 Photos  
Maintenance Intelligence Panel 
Displays 
 Preventive Maintenance  
 Corrective Maintenance  
 Overdue Maintenance  
 Emergency Repairs  
Example 
Pending 
46 
Overdue 
12 
Today's Jobs 
18 
AI Failure Prediction 
Uses: 
 Inspection history  
 Sensor readings  
 Weather  
 Age  
 Utilization  
 Previous failures  
Output 
Generator G-18 
Failure Risk 
HIGH 
Confidence 
92% 
Expected Window 
Next 
14 Days 
Recommendation 
Inspect cooling system. 
Dependency Mapping 
One of the most powerful GIS features. 
Displays relationships between assets. 
Example 
Generator G-18 
↓ 
Powers 
↓ 
Shelter S-12 
↓ 
Supports 
↓ 
Medical Camp 
↓ 
Connected to 
↓ 
Communication Tower 
Selecting any node highlights connected infrastructure. 
Service Coverage Analysis 
Displays service radius. 
Example 
Pump PS-12 
Coverage 
1.8 km 
Population 
12,400 
Critical Facilities 
3 
Visualization: 
Circular overlay. 
Inspection Heatmap 
Displays concentration of: 
 Overdue inspections  
 Failed inspections  
 High-risk assets  
 Recently inspected assets  
Maintenance Heatmap 
Shows maintenance demand. 
Colors 
Green 
Healthy 
Yellow 
Routine Maintenance 
Orange 
Urgent Maintenance 
Red 
Critical Infrastructure Risk 
Nearby Resources Panel 
Automatically lists 
Nearest 
 OAicer  
 Vehicle  
 Spare Generator  
 Maintenance Team  
 Warehouse  
Example 
Nearest Technician 
420 m 
Vehicle 
650 m 
Generator 
800 m 
Asset Comparison Tool 
Users may compare up to four assets. 
Example 
Attribute 
Health 
G-18 
92% 
G-21 
G-32 G-41 
81% 68% 95% 
Last Inspection Yesterday 12 Days 30 Days Today 
Fuel 
AI Risk 
82% 
High 
61% 70% 95% 
Medium High Low 
Filters 
Supported filters 
Asset Category 
Ward 
Zone 
Health 
Maintenance Status 
Inspection Status 
Manufacturer 
Installation Year 
Power Rating 
IoT Connected 
AI Risk 
Critical Infrastructure 
Saved filter presets: 
 High Risk Assets  
 Overdue Inspections  
 Failed Infrastructure  
 Emergency Assets  
 Cyclone Critical  
Route to Asset 
Supports navigation. 
Start 
 OAicer  
 Vehicle  
Destination 
 Asset  
Route options 
 Fastest  
 Flood Safe  
 Emergency  
Asset Documents 
Each asset supports 
 Installation Certificate  
 Maintenance Manual  
 Warranty  
 Inspection Reports  
 Images  
 Videos  
Preview directly within the drawer. 
Loading State 
Progressive loading 
1. Base Map  
2. Assets  
3. Status Colors  
4. AI Predictions  
5. Dependency Graph  
6. Heatmaps  
Empty State 
No assets match your filters. 
Try removing filters or selecting another asset category. 
Error State 
Unable to load asset information. 
Retry 
Load Cached Asset Map 
Report Issue 
OAline Mode 
Available 
 Cached assets  
 Inspection history  
 Asset documents  
 Maintenance schedules  
Unavailable 
 Live IoT telemetry  
 AI predictions  
 Real-time GPS  
 Live maintenance updates  
Accessibility 
Support 
 WCAG 2.2 AA  
 Keyboard navigation  
 High-contrast map  
 Screen-reader labels  
 Accessible comparison tables  
 Zoom up to 400%  
 Color-independent asset status  
Responsive Behavior 
Desktop 
 Full asset analytics workspace  
 Persistent details drawer  
 Side-by-side comparison mode  
Tablet 
 Collapsible panels  
 Swipeable asset drawer  
 Simplified comparison  
Mobile 
Read-only mode for most users. 
Field OAicers can: 
 Locate assigned assets  
 View inspection details  
 Navigate  
 Upload inspection data  
Advanced analytics remain desktop/tablet only. 
Performance Targets 
Metric 
Asset map load 
Asset search 
Drawer open 
Target 
< 2 seconds 
< 300 ms 
< 250 ms 
Comparison generation < 1 second 
Dependency graph render < 1.5 seconds 
Heatmap update 
< 500 ms 
API Dependencies 
GIS Services 
 Vector Tile API  
 Asset Geospatial API  
 Routing API  
 Reverse Geocoding API  
Asset Services 
 Asset Registry API  
 Maintenance API  
 Inspection API  
 IoT Telemetry API  
 Document Management API  
Intelligence Services 
 AI Failure Prediction API  
 Risk Scoring API  
 Dependency Analysis API  
Infrastructure 
 WebSocket Gateway  
 Cache Service  
 Analytics Service  
Analytics Events 
Track: 
 Asset searched  
 Asset selected  
 Comparison opened  
 Maintenance ticket created  
 Inspection scheduled  
 AI recommendation viewed  
 Dependency graph expanded  
 Heatmap enabled  
 Asset report exported  
 Route generated  
Security & Permissions 
 Asset Managers can update maintenance records and inspection schedules.  
 Zone Supervisors can modify assets only within their assigned zones.  
 Field OAicers can view assigned assets and submit inspection updates.  
 Commissioners have read-only visibility across all assets.  
 All maintenance actions, status changes, and document uploads must be fully 
audited with timestamps, user identity, and aAected asset IDs.  
Figma Design Notes 
The Asset Map should feel like an enterprise asset intelligence platform rather than a 
standard GIS screen. Asset health and operational readiness should be immediately 
visible through consistent visual encoding. The map must support thousands of assets 
eAiciently using clustering, progressive loading, and virtualization. Rich contextual 
drawers, dependency visualization, predictive analytics, and maintenance workflows 
should be integrated without obscuring the map, allowing infrastructure teams to 
transition seamlessly from monitoring to action. 
PART 3 — GIS & Spatial Intelligence 
SCREEN 15 
Weather Map (Meteorological & Disaster Intelligence GIS) 
Screen Metadata 
Property 
Value 
Screen Name Weather Map 
Module 
Primary Users 
GIS & Weather Intelligence 
Commissioner, Disaster Head, Command Center Operators 
Secondary Users Zone Supervisors 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Command Center Displays, Tablet 
Refresh Interval Every 1–5 Minutes (source dependent) 
Theme 
Light, Dark, Satellite, Weather Radar 
Screen Purpose 
The Weather Map provides a real-time meteorological command view for disaster 
preparedness and emergency response. 
It integrates multiple environmental datasets into a unified GIS experience, allowing 
operators to: 
 Track cyclone movement  
 Monitor rainfall  
 Predict flooding  
 Visualize wind fields  
 Assess infrastructure risk  
 Forecast operational impact  
 Support proactive resource deployment  
Unlike conventional weather dashboards, this screen overlays weather intelligence 
directly onto the operational GIS. 
Primary User Goals 
Within 10 seconds, users should know: 
 Cyclone position  
 Landfall prediction  
 Rainfall severity  
 High-risk wards  
 Flood-prone regions  
 Weather warnings  
Within 30 seconds, users should identify: 
 Assets likely to be aAected  
 Required resource deployment  
 Shelter readiness  
 Evacuation priorities  
 AI recommendations  
Information Hierarchy 
Priority: 
1. Live Weather GIS  
2. Cyclone Intelligence  
3. Forecast Timeline  
4. Rainfall & Flood Layers  
5. Wind Analysis  
6. Weather Alerts  
7. AI Impact Prediction  
8. Operational Recommendations  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Weather Search | Time Controls | Alerts | Notifications | Profile                          
+------------------------------------------------------------------------------------------------------+ 
| Cyclone Status Banner                                                                              
+------------------------------------------------------------------------------------------------------+ 
| Weather Layers |                                                     
|                
|                
|                
|                
|                
|                                                     
|                                                     
|                 
|                                                     
|                                                     
LIVE WEATHER MAP                    
| Weather Intelligence Drawer   | 
|-------------------------------| 
| Cyclone Details               
| Impact Analysis               
|----------------|-----------------------------------------------------|-------------------------------| 
| Timeline | Legend | Weather Stations | Radar | Forecast | Alerts                             
+------------------------------------------------------------------------------------------------------+ 
| 
| 
| 
| Forecast                      
| AI Recommendations            
| 
| 
| 
| 
Header 
Left 
 GVMC Logo  
 CycloneGuard  
 Breadcrumb  
Home 
> 
GIS 
> 
Weather Map 
Center 
Weather Search 
Supports: 
 Ward  
 Zone  
 Weather Station  
 River  
 Coastal Area  
 Asset  
 GPS Coordinate  
Right 
 Export  
 Notifications  
 Weather Source  
 User Profile  
Cyclone Status Banner 
Always visible when an active cyclone exists. 
Example 
CYCLONE VARUNA 
Category 
Severe Cyclonic Storm 
Wind Speed 
148 km/h 
Pressure 
978 hPa 
Landfall ETA 
08h 42m 
Movement 
NW at 18 km/h 
Confidence 
94% 
Color changes according to cyclone severity. 
Live Weather GIS 
The weather map is the dominant visual component. 
Supported base maps: 
 Standard  
 Satellite  
 Hybrid  
 Terrain  
 Dark Weather  
Weather Layers 
Users can independently enable: 
Rainfall 
 Current Rainfall  
 Hourly Rainfall  
 Daily Rainfall  
 Accumulated Rainfall  
Visualization 
Blue intensity gradient. 
Wind Layer 
Displays: 
 Speed  
 Direction  
 Gusts  
 Streamlines  
Wind particles animate smoothly across the map. 
Cyclone Track 
Shows: 
 Current Eye  
 Historical Path  
 Forecast Cone  
 Confidence Corridor  
Visualization: 
Past Track 
────────── 
● Current Position 
════════════► 
Forecast Cone 
Flood Prediction Layer 
Displays: 
 Flood Probability  
 Waterlogging Risk  
 River Overflow  
 Storm Surge Zones  
Risk Levels 
Green 
Low 
Yellow 
Moderate 
Orange 
High 
Red 
Extreme 
Lightning Layer 
Displays: 
 Active Strikes  
 Strike Density  
 Strike Age  
 Risk Radius  
Icons fade automatically after expiration. 
Temperature Layer 
Heatmap displaying: 
 Surface Temperature  
 Apparent Temperature  
 Urban Heat Islands  
Humidity Layer 
Visualized as translucent gradient. 
Supports: 
 Relative Humidity  
 Dew Point  
Weather Station Layer 
Displays live weather stations. 
Each station provides: 
Station 
GVMC-12 
Temperature 
31°C 
Rainfall 
24 mm 
Humidity 
91% 
Wind 
38 km/h 
Updated 
2 min ago 
Doppler Radar Layer 
Shows: 
 Reflectivity  
 Rain Bands  
 Storm Cells  
 Movement Animation  
Playback speeds: 
 Live  
 5 min  
 15 min  
 30 min  
Forecast Timeline 
Time slider supports: 
Current 
+1 Hour 
+3 Hours 
+6 Hours 
+12 Hours 
+24 Hours 
+48 Hours 
+72 Hours 
Selecting a timestamp updates all overlays simultaneously. 
Weather Intelligence Drawer 
Appears upon selecting: 
 Cyclone  
 Weather Station  
 Forecast Zone  
 Warning Area  
Example 
Cyclone 
VARUNA 
Category 
Severe Cyclonic Storm 
Current Position 
16.4°N 
82.7°E 
Maximum Wind 
148 km/h 
Pressure 
978 hPa 
Expected Landfall 
Tomorrow 
04:30 AM 
Forecast Section 
Displays: 
Next 
1 Hour 
3 Hours 
6 Hours 
12 Hours 
24 Hours 
Includes: 
 Rainfall  
 Wind  
 Flood Risk  
 Lightning  
 Temperature  
AI Impact Analysis 
One of the platform's most important capabilities. 
The AI correlates weather forecasts with operational data. 
Inputs: 
 Weather forecast  
 Asset locations  
 Inspection status  
 Population  
 Flood history  
 Shelter occupancy  
 Drainage network  
 Resource availability  
Outputs: 
AI Assessment 
Ward 18 
Flood Risk 
HIGH 
Probability 
91% 
Expected Impact 
6 Pump Failures 
2 Road Closures 
Shelter Occupancy 
+28% 
Recommendation 
Deploy 3 Pumps 
Infrastructure Impact Overlay 
Highlights: 
 Assets at risk  
 Flood-prone generators  
 Shelters requiring backup power  
 Roads likely to be blocked  
 Communication towers exposed to high winds  
Assets receive predictive risk badges. 
Operational Recommendation Panel 
Recommendations include: 
 Deploy pumps  
 Move generators  
 Increase shelter staAing  
 Close vulnerable roads  
 Pre-position rescue boats  
 Inspect drainage systems  
Each recommendation contains: 
 Confidence  
 Estimated Benefit  
 Time Remaining  
 Execute Action  
Weather Alerts Panel 
Categories: 
 Cyclone Warning  
 Heavy Rainfall  
 Flash Flood  
 Lightning  
 High Wind  
 Storm Surge  
 Coastal Flooding  
Example 
Heavy Rain Warning 
Ward 12 
Valid 
3:00 PM 
to 
8:00 PM 
Severity 
Orange 
Historical Playback 
Users can replay: 
 Cyclone movement  
 Rainfall  
 Flood progression  
 Wind fields  
 Weather alerts  
Playback controls: 
 Play  
 Pause  
 Speed  
 Jump to Timestamp  
Cross-Layer Analysis 
Users can overlay weather with: 
 Assets  
 Incidents  
 Shelters  
 Population Density  
 Drainage Network  
 OAicer Locations  
This enables operational impact assessment without leaving the Weather Map. 
Legend 
Dynamic legend updates based on active layers. 
Includes: 
 Rainfall scale  
 Wind speed scale  
 Flood risk colors  
 Cyclone categories  
 Warning symbols  
Loading State 
Progressive loading: 
1. Base Map  
2. Weather Tiles  
3. Cyclone Layer  
4. Forecast Data  
5. AI Analysis  
6. Weather Stations  
7. Radar Animation  
Empty State 
No active weather warnings. 
Current conditions are stable. 
Continue routine monitoring. 
Error State 
Unable to retrieve weather information. 
Retry 
View Cached Forecast 
Contact System Administrator 
OAline Mode 
Available: 
 Cached weather maps  
 Last downloaded forecast  
 Historical weather playback  
Unavailable: 
 Live radar  
 Live weather stations  
 AI forecast updates  
 Real-time alerts  
A banner indicates the age of cached weather data. 
Accessibility 
Support: 
 WCAG 2.2 AA  
 Keyboard navigation  
 High-contrast weather palettes  
 Screen-reader summaries of forecasts  
 Reduced motion option for radar animations  
 Color-independent warning indicators  
Responsive Behavior 
Desktop 
 Full meteorological workspace  
 Persistent intelligence drawer  
 Multi-layer analysis  
Tablet 
 Collapsible weather drawer  
 Simplified timeline  
 Touch-optimized controls  
Mobile 
Read-only weather monitoring: 
 Current forecast  
 Alerts  
 Cyclone status  
 Simplified map  
 AI recommendations  
Performance Targets 
Metric 
Target 
Weather map load < 3 seconds 
Radar animation 60 FPS 
Layer toggle 
< 500 ms 
Forecast update ≤ 5 seconds after data refresh 
Timeline playback Smooth at selected speed 
API Dependencies 
Weather Services 
 IMD Weather API  
 Cyclone Forecast API  
 Doppler Radar API  
 Lightning Detection API  
 Flood Forecast API  
GIS Services 
 Weather Tile Service  
 Geospatial API  
 Vector Tile API  
Intelligence Services 
 AI Impact Prediction API  
 Risk Assessment API  
 Infrastructure Correlation API  
Operational Services 
 Asset Registry API  
 Incident Management API  
 Shelter Management API  
Infrastructure 
 WebSocket Gateway  
 Cache Service  
 Analytics Service  
Analytics Events 
Track: 
 Weather map viewed  
 Layer toggled  
 Cyclone selected  
 Forecast timeline changed  
 Radar playback started  
 AI recommendation viewed  
 Weather alert opened  
 Infrastructure overlay enabled  
 Forecast exported  
 Cross-layer analysis initiated  
Security & Permissions 
 Commissioners and Disaster Heads have full access to all weather intelligence 
layers.  
 Zone Supervisors can view weather data for operational planning but cannot 
modify forecast configurations.  
 Weather data sources should be authenticated and monitored for integrity.  
 Every export, report generation, and operational recommendation execution 
must be logged in the audit trail.  
Figma Design Notes 
The Weather Map should feel like a professional meteorological operations console 
integrated into the CycloneGuard ecosystem. The live weather GIS must remain the 
primary visual focus, with the intelligence drawer providing rich contextual analysis 
without obscuring the map. Animated weather layers, predictive overlays, and AI
generated operational recommendations should work together to help decision-makers 
anticipate impacts rather than merely react to them. The overall design should balance 
high information density with clarity, ensuring operators can confidently correlate 
environmental conditions with operational readiness and infrastructure resilience. 
Screen 15 Status: Complete  
PART 3 – GIS & Spatial Intelligence: Complete 
All GIS screens are now fully specified: 
  
  
  
  
  
Screen 11 – City Map  
Screen 12 – Zone Map  
Screen 13 – Ward Map  
Screen 14 – Asset Map  
Screen 15 – Weather Map 
t optimized for municipal disaster preparedness. 
PART 4 — Asset Management 
SCREEN 16 
Asset Registry (Enterprise Asset Inventory) 
Screen Metadata 
Property 
Value 
Screen Name Asset Registry 
Module 
Primary Users 
Asset Management 
Asset Managers, Disaster Head, Zone Supervisors 
Secondary Users Commissioner (Read-only), Field OAicers (Assigned Assets Only) 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Data Refresh 
Desktop, Tablet 
Light & Dark 
Real-Time 
Screen Purpose 
The Asset Registry is the master inventory of every operational asset under GVMC 
disaster management. 
It enables users to: 
 Search assets  
 Filter assets  
 Register new assets  
 View operational status  
 Monitor inspections  
 Schedule maintenance  
 Generate reports  
 Export inventory  
 Perform bulk actions  
This screen acts as the central entry point for all asset-related workflows. 
Primary UX Goals 
Within 10 seconds, users should identify: 
 Total registered assets  
 Critical failures  
 Assets requiring inspection  
 Assets under maintenance  
 Recently added assets  
Within 30 seconds, users should be able to: 
 Locate an asset  
 Open asset profile  
 Schedule inspection  
 Update operational status  
 Export filtered inventory  
Information Hierarchy 
Priority: 
1. Asset Summary  
2. Search & Filters  
3. Enterprise Data Grid  
4. Bulk Actions  
5. Asset Quick Preview  
6. Saved Views  
7. Import / Export  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Notifications | Profile                                                            
| 
+------------------------------------------------------------------------------------------------------+ 
| Asset Summary Cards                                                                                  
| 
+------------------------------------------------------------------------------------------------------+ 
| Filters | Saved Views | Bulk Actions | Import | Export | Add Asset                                  
| 
+------------------------------------------------------------------------------------------------------+ 
|                                                                                                      
|                             
|                                                                                                      
| 
ENTERPRISE ASSET DATA GRID                                                
| 
| 
|------------------------------------------------------------------------------------------------------| 
| Pagination | Rows per Page | Selection Count | Last Updated                                           
| 
+------------------------------------------------------------------------------------------------------+ 
Header 
Left 
 GVMC Logo  
 CycloneGuard  
 Breadcrumb  
Home 
> 
Assets 
> 
Asset Registry 
Center 
Global Asset Search 
Supports 
 Asset ID  
 QR Code  
 RFID  
 Asset Name  
 Serial Number  
 Location  
 OAicer  
 Manufacturer  
Search begins after two characters. 
Right 
 Notifications  
 Help  
 User Profile  
Asset Summary Cards 
Displayed at top. 
Total Assets 
2486 
Operational 
2322 
Green 
Maintenance 
118 
Orange 
Critical Failures 
46 
Red 
Inspection Due 
182 
Yellow 
AI High Risk 
37 
Purple 
Each card links to a filtered asset list. 
Enterprise Filter Panel 
Supports multiple filters. 
Location 
 Zone  
 Ward  
Asset 
 Category  
 Type  
 Manufacturer  
 Installation Year  
Operational 
 Status  
 Inspection Status  
 Maintenance Status  
 IoT Connectivity  
Risk 
 AI Risk  
 Critical Asset  
 Emergency Asset  
Ownership 
 Department  
 Assigned OAicer  
 Responsible Supervisor  
Saved Views 
Users can save personalized layouts. 
Examples 
 Critical Assets  
 Failed Pumps  
 Overdue Maintenance  
 My Zone  
 Shelters Only  
Each view stores: 
 Filters  
 Sorting  
 Visible columns  
 Column widths  
 Density (Comfortable/Compact)  
Enterprise Data Grid 
The table is the centerpiece. 
Default Columns 
Column 
Asset ID 
Asset Name 
Category 
Zone 
Ward 
Status 
Inspection 
Maintenance 
Description 
Unique identifier 
Name 
Pump, Generator... 
Zone 
Ward 
Operational state 
Latest inspection 
Current maintenance 
Assigned OAicer Responsible user 
AI Risk 
Predicted failure 
Last Updated Timestamp 
Example 
Asset ID Name 
Zone Status 
G-018 Generator 18 Zone 4  Operational 
P-042 
Pump Station 42 Zone 3  
SH-008 Shelter 8 
Zone 2  
Failed 
Inspection Due 
Data Grid Features 
Supports 
 Multi-column sorting  
 Column pinning  
 Column resizing  
 Column hiding  
 Drag-and-drop column order  
 Frozen first column  
 Infinite scrolling  
 Keyboard navigation  
Row Selection 
Checkbox selection. 
Supports 
 Single  
 Multiple  
 Select All  
 Shift Select  
 Ctrl Select  
Selection count displayed. 
Bulk Actions 
Appears after selection. 
Available 
 Assign OAicer  
 Schedule Inspection  
 Schedule Maintenance  
 Change Status  
 Export  
 Print QR Labels  
 Archive  
 Delete (Authorized Roles Only)  
Example 
24 Assets Selected 
Assign 
Inspect 
Export 
Print QR 
Archive 
Row Quick Actions 
Hover reveals: 
 View  
 Edit  
 Timeline  
 Maintenance  
 Inspection  
 Map  
 Documents  
Asset Quick Preview Drawer 
Opens without leaving the table. 
Example 
Generator G-18 
Operational 
Fuel 
82% 
Ward 
18 
Inspection 
Yesterday 
AI Risk 
Low 
Actions 
 Open Profile  
 Navigate  
 Maintenance  
 Inspection  
Asset Registration Button 
Top-right. 
Primary CTA. 
Opens multi-step registration wizard. 
Fields 
Basic 
 Name  
 Category  
 Asset Type  
Location 
 Zone  
 Ward  
 GPS  
Technical 
 Manufacturer  
 Model  
 Capacity  
 Installation Date  
Operational 
 Responsible Department  
 OAicer  
 Criticality  
Supporting Documents 
 Images  
 Manuals  
 Warranty  
QR / RFID Integration 
Supports 
 QR Generation  
 QR Printing  
 QR Scanning  
 RFID Association  
 NFC Tag (Future Ready)  
Example 
QR 
Generated 
RFID 
Assigned 
Import Assets 
Supported formats 
 CSV  
 Excel  
 JSON  
Validation 
 Duplicate IDs  
 Missing fields  
 Invalid GPS  
 Invalid categories  
Preview before import. 
Export Options 
Formats 
 Excel  
 CSV  
 PDF  
Filters respected. 
Scheduled exports supported. 
Pagination 
Supports 
25 
50 
100 
250 
500 rows 
Infinite scrolling optional for very large inventories. 
Empty State 
No assets found. 
Try adjusting your filters. 
[Clear Filters] 
[Add Asset] 
Loading State 
Skeletons for 
 Summary cards  
 Filter panel  
 Table rows  
 Pagination  
Table headers render immediately. 
Error State 
Unable to load asset inventory. 
Retry 
Download Previous Export 
Contact Administrator 
OAline Mode 
Available 
 Cached inventory  
 Search  
 QR scanning  
 Recently viewed assets  
Unavailable 
 New registration  
 Bulk updates  
 Live synchronization  
Changes made oAline are queued where supported and synchronized automatically 
after reconnection. 
Accessibility 
Support 
 WCAG 2.2 AA  
 Keyboard table navigation  
 Screen-reader compatible data grid  
 Adjustable row density  
 High-contrast mode  
 Focus indicators  
 Accessible bulk action toolbar  
Responsive Behavior 
Desktop 
 Full enterprise table  
 Persistent filter panel  
 Side preview drawer  
Tablet 
 Collapsible filters  
 Reduced columns  
 Swipeable preview drawer  
Mobile 
Optimized as a card list. 
Each card displays: 
 Asset Name  
 Status  
 Zone  
 Inspection  
 Quick Actions  
Bulk editing is disabled on mobile. 
Performance Targets 
Metric 
Registry load 
Search response 
Filter application 
Target 
< 2 seconds 
< 300 ms 
< 500 ms 
Bulk action initiation < 1 second 
Table scroll 
Export generation 
60 FPS 
< 10 seconds (10,000 records) 
API Dependencies 
Asset Services 
 Asset Registry API  
 Asset Search API  
 Asset Import API  
 Asset Export API  
Operational Services 
 Inspection API  
 Maintenance API  
 Assignment API  
 QR/RFID API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Notification Service  
 Analytics Service  
Analytics Events 
Track: 
 Asset searched  
 Filter applied  
 Saved view loaded  
 Asset preview opened  
 Asset registered  
 Bulk action executed  
 Import completed  
 Export generated  
 QR printed  
 Row edited  
Security & Permissions 
Role 
Permission 
Commissioner Read-only 
Disaster Head Full CRUD 
Asset Manager Full CRUD 
Zone Supervisor CRUD within assigned zone 
Field OAicer 
Read-only for assigned assets 
Every create, update, delete, import, export, and bulk action must generate an 
immutable audit record containing the acting user, aAected asset IDs, timestamps, 
previous values, new values, and the originating device/session. 
Figma Design Notes 
The Asset Registry should feel like a modern enterprise asset management console. 
The data grid is the primary interaction surface and must support thousands of records 
without compromising responsiveness. Filtering, bulk actions, saved views, and quick 
previews should enable users to complete routine operational tasks with minimal 
navigation. The visual design should emphasize readability, status recognition, and 
eAicient workflows, using color only as a secondary indicator alongside clear icons, 
labels, and textual status values. 
SCREEN 17 
Asset Details (360° Digital Twin) 
Screen Metadata 
Property 
Value 
Screen Name Asset Details 
Module 
Primary Users 
Asset Management 
Asset Managers, Disaster Head, Zone Supervisors 
Secondary Users Commissioner (Read-only), Field OAicers (Assigned Assets Only) 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Tablet, Mobile (Limited) 
Refresh Interval Real-Time (IoT telemetry every 30–60 seconds) 
Theme 
Light & Dark 
Screen Purpose 
The Asset Details screen provides a complete operational profile for an individual 
asset. 
It enables users to: 
 Monitor operational health  
 Review real-time telemetry  
 Analyze maintenance history  
 Track inspections  
 View GIS location  
 Understand operational dependencies  
 Predict failures using AI  
 Manage lifecycle documentation  
 Perform asset-specific actions  
Every asset should have a unique, persistent digital record. 
Primary UX Goals 
Within 10 seconds, users should understand: 
 Current operational status  
 Health score  
 Critical alerts  
 Location  
 Assigned personnel  
 AI failure risk  
Within 60 seconds, users should be able to: 
 Review maintenance history  
 Schedule inspection  
 Raise maintenance requests  
 Navigate to the asset  
 View supporting documents  
 Analyze operational dependencies  
Information Hierarchy 
Priority: 
1. Asset Header  
2. Operational Health  
3. Quick Actions  
4. Digital Twin Overview  
5. Telemetry  
6. Maintenance History  
7. Inspection History  
8. AI Insights  
9. Documents  
10. Audit Trail  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Breadcrumb | Asset Name | Status | Quick Actions | Notifications                                    
| 
+------------------------------------------------------------------------------------------------------+ 
| Asset Summary Cards                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Navigation Tabs                                                                                     
| 
| Overview | Telemetry | Maintenance | Inspections | Documents | Dependencies | Audit                 
| 
+------------------------------------------------------------------------------------------------------+ 
| Main Content                                                              
| Side Information Panel   | 
|---------------------------------------------------------------------------|--------------------------| 
| Dynamic Content                                                           
|                                                                           
|                                                                           
|                                                                           
| GIS Map                  
| Assigned OAicer         
| QR / RFID               
| AI Risk                
| 
| 
| 
| 
|---------------------------------------------------------------------------|--------------------------| 
| Timeline | Related Incidents | Activity Feed                                                      
| 
+------------------------------------------------------------------------------------------------------+ 
Asset Header 
Displays: 
 Asset Name  
 Asset ID  
 Category  
 Operational Status  
 Criticality  
 Last Updated  
Example: 
Generator G-018 
Operational 
Critical Infrastructure 
Zone 4 • Ward 18 
Last Updated 
2 minutes ago 
Status Indicators 
Status 
Operational  
Inspection Due  
Maintenance  
Failed  
Indicator 
Status 
Indicator 
OAline  
Additional badges: 
 Critical Infrastructure  
 IoT Connected  
 AI High Risk  
 Under Warranty  
 AMC Active  
Asset Summary Cards 
Displayed immediately below the header. 
Health Score 
94% 
Circular health indicator. 
AI Failure Risk 
Low 
8% 
Last Inspection 
Yesterday 
Next Maintenance 
12 Aug 2026 
Availability 
Available 
Operational Readiness 
Ready for Deployment 
Quick Actions 
Primary actions remain visible at all times. 
Buttons: 
 Edit Asset  
 Schedule Inspection  
 Create Maintenance Ticket  
 Navigate  
 Generate Report  
 View on GIS  
 Download QR  
 Share Asset  
Role-based visibility applies. 
Navigation Tabs 
The screen is divided into functional sections: 
1. Overview  
2. Live Telemetry  
3. Maintenance  
4. Inspections  
5. Documents  
6. Dependencies  
7. Cost & Warranty  
8. Related Incidents  
9. Audit Trail  
Tab state persists during navigation. 
Tab 1 — Overview 
Displays the complete asset profile. 
General Information 
Field 
Asset ID 
Category 
Manufacturer 
Model 
Capacity 
Value 
G-018 
Generator 
Cummins 
C125D5 
125 kVA 
Installation Date 14 Jun 2022 
Expected Life 
Department 
15 Years 
Disaster Management 
Location 
Displays: 
 Zone  
 Ward  
 Address  
 GPS Coordinates  
Embedded GIS mini-map with: 
 Current position  
 Nearby assets  
 Nearby shelters  
 Nearby incidents  
Actions: 
 Open Full Map  
 Navigate  
Assigned Personnel 
Shows: 
 Primary OAicer  
 Supervisor  
 Maintenance Team  
 Contact Numbers  
 Shift Information  
Tab 2 — Live Telemetry 
Available only for IoT-enabled assets. 
Displays live sensor data. 
Example: 
Parameter 
Fuel Level 
Battery Voltage 
Value 
82% 
24.2 V 
Engine Temperature 71°C 
Runtime 
Load 
Network Status 
4h 22m 
58% 
Online 
Each metric includes: 
 Current value  
 Safe operating range  
 Trend indicator  
 Last update time  
Historical Trends 
Interactive charts for: 
 Fuel consumption  
 Runtime  
 Load  
 Temperature  
 Voltage  
Time ranges: 
 24 Hours  
 7 Days  
 30 Days  
 Custom  
Threshold Alerts 
Displays active warnings: 
Fuel Level 
Below 20% 
Expected within 
18 Hours 
Recommended Action 
Refuel Generator 
Tab 3 — Maintenance 
Displays complete maintenance history. 
Columns: 
 Date  
 Work Order  
 Maintenance Type  
 Technician  
 Duration  
 Status  
 Cost  
Timeline visualization: 
Installation 
↓ 
Routine Service 
↓ 
Oil Replacement 
↓ 
Alternator Repair 
↓ 
Current State 
Actions: 
 Create Work Order  
 Schedule Preventive Maintenance  
 View Completed Reports  
Tab 4 — Inspections 
Inspection history includes: 
 Inspection Date  
 Inspector  
 Score  
 Photos  
 Observations  
 Corrective Actions  
Example: 
Date Score Result 
30 Jul 96% Passed 
15 Jul 91% Passed 
02 Jul 68% Action Required 
Inspection reports open in a side drawer. 
Tab 5 — Documents 
Organized into categories: 
 Installation Documents  
 User Manuals  
 Warranty Certificates  
 AMC Agreements  
 Inspection Reports  
 Maintenance Reports  
 Images  
 Videos  
Capabilities: 
 Preview  
 Download  
 Upload (Authorized Users)  
 Version History  
Tab 6 — Dependencies 
Visual graph of upstream and downstream relationships. 
Example: 
Fuel Depot 
↓ 
Generator G-018 
↓ 
Shelter S-12 
↓ 
Medical Camp 
↓ 
Communication Tower 
Selecting a node highlights: 
 Operational impact  
 Alternate assets  
 Dependency health  
Tab 7 — Cost & Warranty 
Displays: 
Cost Summary 
Category 
Purchase 
Amount 
₹8,50,000 
Maintenance ₹1,20,000 
Repairs 
Fuel 
₹42,000 
₹2,10,000 
Warranty 
Warranty 
Active 
Expires 
14 Jun 2027 
AMC details include: 
 Vendor  
 Coverage  
 Response SLA  
 Contact Information  
Tab 8 — Related Incidents 
Shows incidents linked to this asset. 
Columns: 
 Incident ID  
 Type  
 Severity  
 Status  
 Date  
Selecting an incident opens the Incident Details screen. 
Tab 9 — Audit Trail 
Immutable activity log. 
Fields: 
 Timestamp  
 User  
 Action  
 Previous Value  
 New Value  
 IP Address  
 Device  
Example: 
31 Jul 2026 
10:42 
Maintenance Status 
Pending 
↓ 
Completed 
By 
Anita Rao 
AI Insights Panel 
Persistent right-side panel. 
Includes: 
Failure Prediction 
Failure Risk 
Low 
8% 
Remaining Useful Life (RUL) 
Estimated Remaining Life 
8.4 Years 
Recommended Actions 
 Replace fuel filter within 14 days  
 Schedule preventive maintenance  
 Update firmware  
 Inspect cooling fan  
Each recommendation includes: 
 Priority  
 Confidence  
 Expected operational benefit  
Related Activity Feed 
Chronological feed of: 
 Status changes  
 Maintenance updates  
 Inspection submissions  
 Telemetry alerts  
 Document uploads  
Newest items appear first. 
Loading State 
Skeleton loaders for: 
 Header  
 Summary cards  
 Tabs  
 Charts  
 Tables  
 Activity feed  
Empty State 
Example (Documents tab): 
No documents have been uploaded for this asset. 
Upload manuals, warranty certificates, or inspection reports to complete the asset 
record. 
[Upload Documents] 
Error State 
Unable to retrieve asset information. 
Retry 
View Cached Record 
Contact Administrator 
OAline Mode 
Available: 
 Cached asset profile  
 Maintenance history  
 Inspection reports  
 Downloaded documents  
Unavailable: 
 Live telemetry  
 AI predictions  
 Real-time activity feed  
 Document uploads  
Changes made oAline (where permitted) are queued and synchronized automatically 
once connectivity is restored. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation across tabs  
 Screen-reader labels for telemetry and charts  
 High-contrast mode  
 Accessible data tables  
 Reduced motion for live updates  
 Zoom support up to 400%  
Responsive Behavior 
Desktop 
 Full multi-column layout  
 Persistent side panel  
 Interactive charts  
Tablet 
 Tabs become horizontally scrollable  
 Side panel collapses into a drawer  
 Simplified chart controls  
Mobile 
Optimized for field operations: 
 Asset summary  
 Live status  
 Navigation  
 Inspection history  
 Document viewing  
 Quick actions  
Advanced analytics and dependency graphs are hidden behind expandable sections. 
Performance Targets 
Metric 
Target 
Asset profile load < 2 seconds 
Tab switch 
< 300 ms 
Telemetry refresh < 2 seconds after update 
Chart rendering 
< 500 ms 
Document preview < 1 second 
Activity feed update Real-time via WebSocket 
API Dependencies 
Asset Services 
 Asset Details API  
 Asset Update API  
 Asset Timeline API  
Operational Services 
 Inspection API  
 Maintenance API  
 Work Order API  
 Incident API  
IoT Services 
 Telemetry API  
 Device Health API  
 Sensor Data API  
Intelligence Services 
 AI Failure Prediction API  
 Remaining Useful Life API  
 Recommendation Engine API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Notification Service  
 Document Management API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Asset profile viewed  
 Tab changed  
 Maintenance ticket created  
 Inspection scheduled  
 Telemetry chart expanded  
 Document downloaded  
 Document uploaded  
 Dependency graph viewed  
 AI recommendation accepted  
 Asset report generated  
Security & Permissions 
Role 
Permission 
Commissioner Read-only 
Disaster Head Full access 
Asset Manager Full CRUD 
Role 
Permission 
Zone Supervisor Update assets within assigned zone 
Field OAicer 
View assigned assets and submit inspections 
Sensitive operations (editing asset metadata, deleting documents, changing warranty 
records, or modifying dependencies) require role validation. Every modification must 
generate an immutable audit entry with timestamps, actor identity, before/after values, 
and session metadata. 
Figma Design Notes 
The Asset Details screen should represent the authoritative digital twin of an 
infrastructure asset. The interface should balance operational monitoring, historical 
records, and predictive intelligence without overwhelming users. Summary information 
and primary actions should remain immediately visible, while detailed operational data 
is organized into task-oriented tabs. Charts, timelines, GIS previews, and AI insights 
should be integrated seamlessly to support both rapid field decisions and long-term 
asset lifecycle management. 
PART 4 — Asset Management 
SCREEN 18 
Asset Registration Wizard (Multi-Step Asset Onboarding) 
Screen Metadata 
Property 
Value 
Screen Name Asset Registration Wizard 
Module 
Primary Users 
Asset Management 
Asset Managers, Zone Supervisors 
Secondary Users Disaster Head (Approval) 
Priority 
Critical 
Authentication Required 
Devices 
Desktop, Tablet 
Property 
Value 
Theme 
Save Mode 
Light & Dark 
Auto-save + Manual Draft 
Screen Purpose 
The Asset Registration Wizard provides a guided, validated, multi-step workflow for 
onboarding new infrastructure assets. 
It ensures: 
 Complete asset information  
 Accurate GIS placement  
 Technical specification capture  
 Ownership assignment  
 QR/RFID association  
 Supporting document upload  
 Duplicate prevention  
 Approval workflow  
Each registration becomes the oAicial digital record for the asset. 
Primary UX Goals 
Within 5 minutes, users should be able to: 
 Register a new asset  
 Assign ownership  
 Pin the GIS location  
 Upload required documentation  
 Generate QR/RFID identifiers  
 Submit for approval  
The workflow should prevent incomplete or invalid submissions. 
Wizard Overview 
The registration process consists of nine logical steps: 
1. Basic Information  
2. Asset Classification  
3. Location & GIS  
4. Technical Specifications  
5. Ownership & Responsibility  
6. Documents & Images  
7. QR / RFID Association  
8. Review & Validation  
9. Submission & Approval  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Breadcrumb | New Asset Registration                                                                 
| 
+------------------------------------------------------------------------------------------------------+ 
| Stepper: 1 ─ 2 ─ 3 ─ 4 ─ 5 ─ 6 ─ 7 ─ 8 ─ 9                                                          
| 
+------------------------------------------------------------------------------------------------------+ 
|                                                                                                      
|                          
|                                                                                                      
| 
Current Step Content                                                        
| 
| 
|------------------------------------------------------------------------------------------------------| 
| Back | Save Draft | Next                                                            
Progress 32%    | 
+------------------------------------------------------------------------------------------------------+ 
Progress Stepper 
Displays: 
① Basic 
② Classification 
③ Location 
④ Technical 
⑤ Ownership 
⑥ Documents 
⑦ QR/RFID 
⑧ Review 
⑨ Submit 
Completed steps: 
✔ Green 
Current step: 
Blue 
Pending: 
Gray 
Users may navigate only to completed steps or the current step. 
Auto Save 
The wizard automatically saves: 
 Every 30 seconds  
 On step change  
 Before session timeout  
Draft banner: 
Draft Saved 
2 minutes ago 
STEP 1 — Basic Information 
Purpose: 
Capture the asset's identity. 
Fields 
Asset Name 
Required 
Maximum 150 characters 
Asset Category 
Dropdown 
Examples: 
 Generator  
 Pump  
 Shelter  
 CCTV  
 Transformer  
 Water Tank  
 Communication Tower  
Asset Type 
Dynamic based on category. 
Example: 
Generator → 
 Diesel  
 Gas  
 Portable  
 Backup  
Asset Description 
Multi-line 
Optional 
500-character limit. 
Operational Criticality 
Options 
 Critical  
 High  
 Medium  
 Low  
Displayed with explanatory tooltips. 
Asset Status 
Default: 
"Operational" 
Other options: 
 Planned  
 Under Installation  
 Operational  
 Decommissioned  
Validation 
Required fields must be completed before proceeding. 
Duplicate asset names trigger a warning but do not block submission. 
STEP 2 — Asset Classification 
Purpose: 
Organize assets for reporting and lifecycle management. 
Fields 
 Department  
 Functional Group  
 Subsystem  
 Disaster Category  
 Operational Role  
Example 
Department 
Disaster Management 
Subsystem 
Power Backup 
Operational Role 
Emergency Shelter Support 
AI Assistance 
Based on category, the system suggests: 
 Default classification  
 Expected lifecycle  
 Recommended maintenance frequency  
Users can accept or modify suggestions. 
STEP 3 — Location & GIS 
Purpose: 
Precisely geolocate the asset. 
Location Form 
Fields: 
 Zone  
 Ward  
 Address  
 Landmark  
 Postal Code  
Interactive GIS Map 
Users can: 
 Search location  
 Click to pin  
 Drag marker  
 Use current GPS  
 Enter coordinates manually  
Coordinate Display 
Latitude 
17.725812 
Longitude 
83.302451 
Accuracy indicator: 
 Excellent (<5 m)  
 Good (5–15 m)  
 Poor (>15 m)  
Geofencing Validation 
The system verifies that the asset lies within a valid GVMC boundary. 
If outside: 
Selected location is outside the authorized operational area. 
STEP 4 — Technical Specifications 
Purpose: 
Capture engineering and operational characteristics. 
Dynamic Fields 
Fields vary by asset category. 
Generator Example 
 Manufacturer  
 Model  
 Serial Number  
 Capacity (kVA)  
 Fuel Type  
 Fuel Tank Capacity  
 Voltage  
 Installation Date  
 Expected Service Life  
Pump Example 
 Flow Rate  
 Head  
 Motor Rating  
 Pipe Diameter  
Validation 
 Numeric ranges  
 Date consistency  
 Serial number uniqueness  
 Required specifications  
STEP 5 — Ownership & Responsibility 
Assign operational accountability. 
Fields 
Responsible Department 
Primary OAicer 
Zone Supervisor 
Maintenance Vendor 
Emergency Contact 
Shift Assignment 
SLA Configuration 
Optional 
Response Time 
Repair Target 
Inspection Frequency 
Escalation Matrix 
Configure: 
Level 1 
OAicer 
↓ 
Level 2 
Supervisor 
↓ 
Level 3 
Disaster Head 
STEP 6 — Documents & Images 
Purpose: 
Attach supporting documentation. 
Supported uploads 
 Images  
 PDFs  
 Manuals  
 Warranty Certificates  
 AMC Agreements  
 Installation Reports  
 Compliance Certificates  
Upload Area 
Supports: 
 Drag-and-drop  
 File picker  
 Camera capture (tablet/mobile)  
Image Preview 
Displays: 
 Thumbnail  
 Filename  
 Upload status  
 File size  
Users can: 
 Rename  
 Replace  
 Delete  
 Annotate  
Validation 
Maximum: 
 50 files  
 100 MB per file  
Virus scanning begins immediately after upload. 
STEP 7 — QR / RFID Association 
Purpose: 
Create physical-digital linkage. 
QR Generation 
Automatically generates: 
 Unique QR code  
 Printable label  
 Asset URL  
Preview displayed in the wizard. 
RFID 
Options: 
 Scan RFID  
 Enter RFID manually  
 Bind existing tag  
Validation prevents duplicate assignments. 
NFC (Future Ready) 
Reserved section for NFC integration. 
STEP 8 — Review & Validation 
Displays a complete summary of all entered information. 
Validation Panel 
Checks: 
 Missing required fields  
 Duplicate serial numbers  
 Duplicate GPS locations  
 Invalid documents  
 Missing ownership  
 Invalid maintenance schedule  
AI Data Quality Assessment 
Example 
Registration Quality Score 
96% 
Suggestions 
• Upload installation photo 
• Add warranty certificate 
• Verify maintenance vendor 
Duplicate Detection 
The system compares against existing assets using: 
 Name similarity  
 Serial number  
 GPS proximity  
 QR/RFID  
 Manufacturer + Model  
Potential matches are displayed with confidence scores. 
STEP 9 — Submission & Approval 
Users choose: 
Save as Draft 
Submit for Approval 
Register Immediately (Authorized Roles Only) 
Approval Workflow 
Example: 
Asset Manager 
↓ 
Zone Supervisor 
↓ 
Disaster Head 
↓ 
Approved 
Each approver may: 
 Approve  
 Reject  
 Request Changes  
Comments are mandatory for rejection. 
Success State 
Asset Registered Successfully 
Asset ID 
G-0248 
QR Code Generated 
Approval Status 
Pending Supervisor Review 
[View Asset] 
[Register Another Asset] 
Draft Recovery 
If the browser closes unexpectedly: 
Recovered Draft Found 
Saved 
11:42 AM 
Continue Editing 
Discard Draft 
Loading State 
Skeletons for: 
 Stepper  
 Form fields  
 Map  
 Upload placeholders  
 Review summary  
Error State 
Unable to save asset registration. 
Retry 
Save OAline Draft 
Contact Support 
OAline Mode 
Available: 
 Complete form entry  
 Photo capture  
 Draft saving  
 QR preview (temporary)  
Unavailable: 
 Duplicate detection  
 GIS validation  
 RFID binding  
 Final submission  
Queued drafts synchronize automatically when connectivity returns. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation across all steps  
 Screen-reader labels for form controls  
 High-contrast mode  
 Accessible error summaries  
 Clear focus indicators  
 Touch-friendly controls on tablets  
Responsive Behavior 
Desktop 
 Two-column forms  
 Persistent stepper  
 Side validation panel  
Tablet 
 Single-column forms  
 Collapsible stepper  
 Full-screen GIS picker  
Mobile (Limited) 
 Sequential steps  
 Camera-first document capture  
 Simplified validation  
 Draft creation only (submission restricted by policy)  
Performance Targets 
Metric 
Target 
Wizard load 
Auto-save 
GIS lookup 
QR generation 
< 2 seconds 
< 500 ms 
< 2 seconds 
< 1 second 
Duplicate detection < 3 seconds 
Final submission 
< 5 seconds 
API Dependencies 
Asset Services 
 Asset Registration API  
 Duplicate Detection API  
 Draft Management API  
GIS Services 
 Geocoding API  
 Reverse Geocoding API  
 Boundary Validation API  
Identity & Assignment 
 User Directory API  
 Department API  
 Role Assignment API  
Document Services 
 File Upload API  
 Malware Scanning API  
 Document Storage API  
Asset Identification 
 QR Generation API  
 RFID Binding API  
Infrastructure 
 Authentication API  
 Notification Service  
 Audit Logging API  
 Analytics Service  
Analytics Events 
Track: 
 Wizard started  
 Draft saved  
 Step completed  
 GIS location selected  
 Document uploaded  
 QR generated  
 RFID bound  
 Validation errors encountered  
 Registration submitted  
 Approval requested  
Security & Permissions 
 Only authorized Asset Managers and Zone Supervisors may initiate asset 
registration.  
 Immediate registration without approval is restricted to users with elevated 
permissions.  
 Every draft, submission, approval, rejection, and modification must be recorded 
in the audit log with timestamps, user identity, device information, and 
before/after values where applicable.  
 Uploaded documents must undergo malware scanning and integrity validation 
before becoming part of the oAicial asset record.  
Figma Design Notes 
The Asset Registration Wizard should emphasize clarity, guidance, and data quality. 
Each step should present only the information required at that stage, with inline 
validation and contextual help to reduce cognitive load. Progress should be 
continuously visible, drafts should be protected through auto-save and recovery, and 
AI-assisted suggestions should improve completeness without interrupting the 
workflow. The experience should inspire confidence for both oAice-based 
administrators and field personnel registering assets from tablets. 
PART 4 — Asset Management 
SCREEN 19 
Maintenance Management (Enterprise Maintenance Workspace) 
Screen Metadata 
Property 
Value 
Screen Name Maintenance Management 
Module 
Primary Users 
Asset Management 
Asset Managers, Maintenance Supervisors 
Secondary Users Zone Supervisors, Disaster Head 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet 
Light & Dark 
Refresh Interval Real-Time 
Screen Purpose 
The Maintenance Management workspace enables organizations to plan, assign, 
execute, monitor, and optimize all maintenance activities related to disaster-critical 
infrastructure. 
Supported maintenance types include: 
 Preventive Maintenance  
 Corrective Maintenance  
 Emergency Maintenance  
 Predictive Maintenance (AI-driven)  
 Inspection-triggered Maintenance  
 Manufacturer Recommended Maintenance  
The workspace provides complete visibility into the maintenance lifecycle. 
Primary UX Goals 
Within 10 seconds, users should identify: 
 Overdue work orders  
 Today's scheduled maintenance  
 Critical failures  
 SLA breaches  
 Technician availability  
Within 60 seconds, users should be able to: 
 Create a work order  
 Assign technicians  
 Schedule preventive maintenance  
 Review AI recommendations  
 Track maintenance progress  
Information Hierarchy 
Priority: 
1. Maintenance KPI Dashboard  
2. Work Order Queue  
3. Calendar & Scheduling  
4. Technician Assignment  
5. AI Recommendations  
6. Spare Parts Status  
7. SLA Monitoring  
8. Maintenance Analytics  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Filters | Notifications | Profile                                                  
| 
+------------------------------------------------------------------------------------------------------+ 
| KPI Summary Cards                                                                                   
| 
+------------------------------------------------------------------------------------------------------+ 
| Calendar | Work Orders | AI Queue | Technicians | Spare Parts | Reports                             
+------------------------------------------------------------------------------------------------------+ 
| Left Panel                      
| Main Workspace                     
| Right Panel                    
| 
|---------------------------------|------------------------------------|--------------------------------| 
| Filters                         
| Saved Views                     
| Quick Actions                   
|                                 
| Enterprise Work Order Table        
| Calendar View                      
| Timeline                           
| Selected Work Order            
| Asset Summary                  
| SLA Status                     
|                                    
| AI Recommendation              
| 
| 
| 
| 
+------------------------------------------------------------------------------------------------------+ 
| 
Header 
Global Search 
Supports: 
 Work Order ID  
 Asset ID  
 Technician  
 Vendor  
 Zone  
 Ward  
 Maintenance Type  
Autocomplete begins after two characters. 
KPI Summary Cards 
Displayed prominently. 
Active Work Orders 
146 
Overdue 
18 
Red 
Scheduled Today 
34 
Blue 
SLA Breaches 
7 
Orange 
Emergency Jobs 
5 
Critical 
AI Preventive Recommendations 
29 
Purple 
Each card opens a filtered maintenance view. 
Navigation Tabs 
1. Work Orders  
2. Maintenance Calendar  
3. Technician Scheduling  
4. Spare Parts  
5. SLA Dashboard  
6. Analytics  
Tab 1 — Work Orders 
This is the default landing view. 
Enterprise Work Order Table 
Columns: 
Column 
Work Order ID 
Asset 
Description 
Unique identifier 
Linked asset 
Maintenance Type Preventive, Corrective, Emergency 
Priority 
Critical → Low 
Assigned Technician Responsible engineer 
Status 
Current progress 
Column 
Description 
Due Date 
SLA 
Estimated Cost 
Completion deadline 
Remaining time 
Budget 
Example 
WO 
Asset 
Type 
Priority Status 
WO-1052 Generator G-18 Preventive High 
WO-1068 Pump P-42 
Scheduled 
Emergency Critical In Progress 
WO-1075 Shelter S-09 
Corrective Medium Awaiting Parts 
Work Order Status Flow 
Draft 
↓ 
Scheduled 
↓ 
Assigned 
↓ 
Accepted 
↓ 
In Progress 
↓ 
Quality Review 
↓ 
Completed 
↓ 
Closed 
Special states: 
 Cancelled  
 Reopened  
 Escalated  
 On Hold  
Priority Levels 
Level Color SLA 
Critical Red 
High 
2 Hours 
Orange 8 Hours 
Medium Yellow 24 Hours 
Low 
Blue 72 Hours 
Work Order Detail Drawer 
Selecting a work order opens a contextual drawer. 
Displays: 
Overview 
WO-1068 
Emergency Maintenance 
Pump P-42 
Zone 3 
Ward 12 
Status 
In Progress 
Assigned Personnel 
 Lead Technician  
 Supporting Team  
 Supervisor  
Timeline 
Reported 
↓ 
Assigned 
↓ 
Accepted 
↓ 
Travel 
↓ 
Repair 
↓ 
Testing 
↓ 
Completion 
Required Resources 
 Spare Parts  
 Tools  
 Safety Equipment  
 Vehicle  
Notes 
Rich text support with timestamps and author attribution. 
Attachments 
 Photos  
 Videos  
 Diagnostic Reports  
 Completion Certificates  
Quick Actions 
Available actions depend on role and work order status. 
Examples: 
 Assign Technician  
 Reassign  
 Change Priority  
 Pause Work  
 Escalate  
 Complete Work  
 Generate Report  
 View Asset  
 Navigate to Location  
Bulk Actions 
Supports: 
 Assign Multiple Jobs  
 Reschedule  
 Change Priority  
 Export  
 Cancel  
 Notify Technicians  
Tab 2 — Maintenance Calendar 
Calendar Views: 
 Day  
 Week  
 Month  
 Timeline (Gantt)  
Color Coding: 
 Preventive → Green  
 Corrective → Orange  
 Emergency → Red  
 Predictive → Purple  
Features: 
 Drag-and-drop rescheduling  
 Technician availability overlay  
 Holiday awareness  
 Weather conflict indicators  
AI Schedule Optimization 
The system recommends optimized schedules based on: 
 Technician location  
 Asset criticality  
 TraAic  
 Weather forecast  
 SLA deadlines  
 Spare parts availability  
Example: 
Recommendation 
Move WO-1052 from 2 PM to 10 AM. 
Estimated travel reduction: 
38% 
SLA risk reduced: 
82% 
Tab 3 — Technician Scheduling 
Displays technician workload. 
Columns: 
 Technician  
 Skills  
 Certifications  
 Current Jobs  
 Availability  
 Shift  
 Utilization  
Example: 
Technician Jobs Utilization 
Ravi Kumar 5 82% 
Anita Rao 
3 
61% 
Technician Jobs Utilization 
Suresh Babu 6 
95% 
Assignment Assistant 
Suggests technicians using: 
 Skill matching  
 Certifications  
 Current workload  
 Distance to asset  
 Historical performance  
 Shift availability  
Technician Map 
Embedded GIS showing: 
 Live location  
 Assigned jobs  
 Route  
 ETA  
Supports dispatch directly from the map. 
Tab 4 — Spare Parts 
Inventory linked to maintenance. 
Displays: 
Part 
Stock Reserved Status 
Fuel Filter 42 
Alternator 3 
Pump Motor 0 
6 
2 
0 
Available 
Low Stock 
Out of Stock 
Features: 
 Reserve parts  
 Request procurement  
 Substitute recommendations  
 Delivery ETA  
Tab 5 — SLA Dashboard 
Visualizes: 
 Jobs within SLA  
 Jobs nearing breach  
 Breached work orders  
 Average completion time  
 Mean Time To Repair (MTTR)  
Interactive charts allow filtering by: 
 Zone  
 Asset category  
 Technician  
 Vendor  
Tab 6 — Maintenance Analytics 
KPIs include: 
 MTTR  
 Mean Time Between Failures (MTBF)  
 Preventive vs Corrective Ratio  
 Maintenance Cost by Category  
 Asset Downtime  
 Technician Productivity  
 First-Time Fix Rate  
 Vendor Performance  
Charts support export and drill-down. 
AI Predictive Maintenance Panel 
Persistent right-side panel. 
Displays: 
Generator G-18 
Failure Probability 
74% 
Confidence 
91% 
Likely Cause 
Cooling System Wear 
Recommended Maintenance 
Within 10 Days 
Expected Downtime Avoided 
12 Hours 
Users can convert recommendations directly into work orders. 
Notifications 
Real-time alerts include: 
 SLA breach  
 Technician accepted job  
 Work completed  
 Spare part unavailable  
 Predictive alert generated  
 Emergency work order created  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Work order table  
 Calendar  
 Analytics  
 Technician map  
Empty State 
No maintenance work orders match the current filters. 
Try adjusting your filters or create a new work order. 
[Create Work Order] 
Error State 
Unable to load maintenance information. 
Retry 
View Cached Schedule 
Contact Administrator 
OAline Mode 
Available: 
 Cached work orders  
 Technician schedules  
 Previously downloaded maintenance manuals  
 Draft updates  
Unavailable: 
 Live technician tracking  
 SLA countdown updates  
 AI recommendations  
 Real-time inventory availability  
OAline changes are synchronized automatically when connectivity is restored. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-accessible data grids  
 Screen-reader compatible calendars  
 High-contrast status indicators  
 Accessible drag-and-drop alternatives  
 Reduced motion for live updates  
Responsive Behavior 
Desktop 
 Full enterprise workspace  
 Multi-panel layout  
 Persistent AI insights  
Tablet 
 Collapsible side panels  
 Touch-friendly calendar  
 Swipeable work order drawer  
Mobile 
Focused on field execution: 
 Assigned work orders  
 Navigation  
 Status updates  
 Photo uploads  
 Completion checklists  
Administrative scheduling remains desktop/tablet only. 
Performance Targets 
Metric 
Workspace load 
Work order search 
Calendar update 
Target 
< 2 seconds 
< 300 ms 
< 500 ms 
Technician assignment < 1 second 
SLA refresh 
Analytics rendering 
Real-time 
< 2 seconds 
API Dependencies 
Maintenance Services 
 Work Order API  
 Maintenance Scheduling API  
 Preventive Maintenance API  
Asset Services 
 Asset Registry API  
 Asset Details API  
Workforce Services 
 Technician Directory API  
 Shift Management API  
 Dispatch API  
Inventory Services 
 Spare Parts API  
 Procurement API  
Intelligence Services 
 Predictive Maintenance API  
 Schedule Optimization API  
Infrastructure 
 Authentication API  
 Notification Service  
 Analytics Service  
 Audit Logging API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Work order created  
 Work order assigned  
 Schedule modified  
 Technician selected  
 SLA breach viewed  
 AI recommendation accepted  
 Spare part reserved  
 Work order completed  
 Calendar event moved  
 Maintenance report exported  
Security & Permissions 
Role 
Commissioner 
Disaster Head 
Asset Manager 
Maintenance 
Supervisor 
Zone Supervisor 
Field Technician 
Permission 
Read-only dashboards 
Full operational control 
Create, edit, assign, approve work orders 
Manage schedules and technicians 
Create and monitor work orders within assigned zone 
View assigned work orders, update execution progress, upload 
completion evidence 
Critical operations such as work order approval, SLA overrides, reassignment, 
cancellation, and completion require audit logging. Electronic signatures may be 
required for designated high-value or safety-critical assets. 
Figma Design Notes 
The Maintenance Management workspace should emphasize operational eAiciency 
and real-time visibility. The work order table and maintenance calendar are the 
primary interaction surfaces, while contextual drawers provide detailed information 
without forcing navigation away from the current workflow. AI recommendations, 
technician availability, SLA health, and spare parts status should remain visible 
throughout the experience, enabling supervisors to make informed scheduling and 
dispatch decisions quickly. 
PART 4 — Asset Management 
SCREEN 20 
Work Order Details & Execution 
Screen Metadata 
Property 
Value 
Screen Name Work Order Details & Execution 
Module 
Primary Users 
Asset Management 
Field Technicians, Maintenance Supervisors 
Secondary Users Asset Managers, Zone Supervisors 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet, Mobile (Primary) 
Light & Dark 
Refresh Interval Real-Time 
Screen Purpose 
The Work Order Details screen manages the complete lifecycle of a maintenance 
task, from assignment through execution, verification, approval, and closure. 
It provides: 
 Technician guidance  
 Asset context  
 GPS verification  
 Safety workflows  
 Checklist execution  
 Parts consumption  
 Time tracking  
 Photo documentation  
 Digital signatures  
 Supervisor approval  
 Automatic asset history updates  
This screen should minimize technician eAort while maximizing data quality and 
auditability. 
Primary UX Goals 
Within 10 seconds, a technician should understand: 
 Which asset requires work  
 The maintenance objective  
 Priority and SLA  
 Required safety measures  
 Required tools and parts  
Within 30 seconds, the technician should be able to: 
 Start work  
 Navigate to the asset  
 Begin the checklist  
 Capture evidence  
 Update progress  
Information Hierarchy 
Priority: 
1. Work Order Summary  
2. Asset Information  
3. Action Buttons  
4. Execution Checklist  
5. Evidence Capture  
6. Parts Consumption  
7. Time Tracking  
8. Approval Workflow  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Breadcrumb | Work Order ID | Status | SLA Countdown | Quick Actions                                 
+------------------------------------------------------------------------------------------------------+ 
| Work Order Summary Cards                                                                            
+------------------------------------------------------------------------------------------------------+ 
| Tabs: Overview | Checklist | Parts | Evidence | Timeline | Approval | Audit                          
+------------------------------------------------------------------------------------------------------+ 
| Main Workspace                                                         
| Context Panel               
|------------------------------------------------------------------------|-----------------------------| 
| Dynamic Tab Content                                                    
|                                                                        
|                                                                        
|                                                                        
| Asset Summary               
| GIS Mini Map               
| Technician Info            
| AI Suggestions             
+------------------------------------------------------------------------------------------------------+ 
| 
| 
| 
| 
| 
| 
| 
| 
Mobile Layout ------------------------------------ 
Work Order Header 
------------------------------------ 
Status + SLA ------------------------------------ 
Checklist ------------------------------------ 
Evidence Capture ------------------------------------ 
Parts Used ------------------------------------ 
Submit Progress ------------------------------------ 
Optimized for one-handed operation. 
Work Order Header 
Displays: 
 Work Order ID  
 Maintenance Type  
 Asset Name  
 Priority  
 Current Status  
Example: 
WO-1068 
Emergency Maintenance 
Pump Station P-42 
Priority 
Critical 
Status 
Assigned 
SLA Countdown 
Always visible. 
Example 
Time Remaining 
01h 24m 
Colors: 
Green 
Safe 
Yellow 
Approaching Breach 
Red 
Critical 
Flashing Red 
Overdue 
Summary Cards 
Asset 
Generator G-18 
Zone 
Zone 4 
Ward 
Ward 18 
Assigned Technician 
Ravi Kumar 
Estimated Duration 
2 Hours 
Maintenance Type 
Preventive 
Quick Actions 
 Start Work  
 Navigate  
 Contact Supervisor  
 Pause Work  
 Escalate  
 Complete Work  
Primary CTA changes dynamically based on workflow state. 
Work Order Lifecycle 
Assigned 
↓ 
Accepted 
↓ 
Traveling 
↓ 
On Site 
↓ 
Executing 
↓ 
Quality Check 
↓ 
Completed 
↓ 
Supervisor Approval 
↓ 
Closed 
Every transition requires confirmation. 
GPS Verification 
Before starting work, the technician's location is verified. 
Example 
Distance to Asset 
8 meters 
Verification 
Successful 
Rules: 
 Within configurable radius (e.g., 20 m)  
 Manual override requires supervisor approval  
 GPS accuracy displayed  
Arrival Check-In 
Technician taps: 
Check In 
Captured automatically: 
 Timestamp  
 GPS coordinates  
 Device ID  
 Network state  
Safety Checklist 
Mandatory before execution. 
Example: 
☐ PPE Worn 
☐ Electrical Isolation Confirmed 
☐ Equipment Shutdown Verified 
☐ Work Area Secured 
☐ Safety Briefing Completed 
Some assets may require additional compliance steps. 
Tab 1 — Overview 
Displays: 
Work Description 
Inspect generator cooling system, replace fuel filter, verify electrical output, and 
perform operational test. 
Asset Summary 
 Asset ID  
 Category  
 Last Maintenance  
 Last Inspection  
 Health Score  
Required Skills 
 Electrical Certification  
 Generator Maintenance  
 Safety Level II  
Required Tools 
 Multimeter  
 Torque Wrench  
 Fuel Filter Tool  
 Thermal Camera  
Tab 2 — Execution Checklist 
Interactive checklist. 
Example 
☐ Visual Inspection 
☐ Fuel Level Check 
☐ Replace Fuel Filter 
☐ Tighten Electrical Connections 
☐ Operational Test 
☐ Noise Measurement 
☐ Temperature Check 
☐ Final Verification 
Each item supports: 
 Notes  
 Photos  
 Attachments  
 Mark as Not Applicable (with justification)  
Progress indicator: 
Completed 
5 / 8 
62% 
AI Assistance 
The system provides contextual suggestions. 
Example 
Based on previous maintenance history: 
• Inspect alternator belt 
• Cooling fan wear detected in similar generators 
Confidence 
88% 
Technicians can add suggested tasks to the checklist. 
Tab 3 — Parts Consumption 
Displays required spare parts. 
Part 
Required Used Remaining 
Fuel Filter 1 
Engine Oil 5 L 
Capabilities: 
1 
0 
4.5 L 0.5 L 
 Scan part barcode/QR  
 Manual quantity entry  
 Record damaged parts  
 Request additional parts  
Inventory updates automatically after supervisor approval. 
Tool Usage Log 
Track specialized equipment: 
Tool 
Checked Out Returned 
Thermal Camera ✔ 
Torque Wrench ✔ 
✔ 
Pending 
Tab 4 — Evidence Capture 
Technicians document work with: 
 Photos  
 Videos  
 Voice Notes  
 PDFs  
Required photos: 
1. Before maintenance  
2. During maintenance  
3. Completed work  
4. Asset identification plate  
Image metadata captured automatically: 
 GPS  
 Timestamp  
 Device  
 Orientation  
Image annotation tools: 
 Arrow  
 Circle  
 Highlight  
 Text label  
Tab 5 — Timeline 
Chronological execution log. 
09:00 Assigned 
↓ 
09:18 Accepted 
↓ 
09:42 Arrived 
↓ 
09:45 Started Work 
↓ 
10:36 Fuel Filter Replaced 
↓ 
11:05 Operational Test Passed 
Every event is immutable. 
Time Tracking 
Automatically records: 
 Travel Time  
 Waiting Time  
 Active Work Time  
 Pause Duration  
 Total Duration  
Manual edits require justification and supervisor approval. 
Issue Escalation 
Technicians can escalate if: 
 Additional damage discovered  
 Wrong spare parts  
 Safety concerns  
 Asset inaccessible  
Escalation captures: 
 Severity  
 Description  
 Supporting evidence  
 Recommended action  
Supervisor receives immediate notification. 
Tab 6 — Supervisor Review 
After technician completion: 
Supervisor verifies: 
 Checklist completion  
 Evidence quality  
 Parts usage  
 Time records  
 Safety compliance  
 Operational testing  
Options: 
 Approve  
 Reject  
 Request Rework  
Comments mandatory for rejection. 
Digital Signature 
Required before closure. 
Supports: 
 Technician signature  
 Supervisor signature  
 Optional vendor signature  
Signature metadata: 
 Timestamp  
 Device  
 User  
 GPS (if applicable)  
Completion Summary 
Generated automatically. 
Example 
Work Order Completed 
Duration 
2h 14m 
Parts Used 
2 
Photos Uploaded 
14 
Operational Test 
Passed 
Asset Status 
Operational 
AI Maintenance Summary 
Generated after completion. 
Example 
Maintenance Summary 
Fuel filter replaced successfully. 
Generator output stabilized. 
Cooling system operating normally. 
Recommended inspection interval: 
90 days. 
Users may edit before final submission. 
Automatic System Updates 
Upon approval: 
 Asset maintenance history updated  
 Asset health recalculated  
 Next maintenance scheduled  
 Inventory adjusted  
 Cost ledger updated  
 Audit trail created  
 Notifications sent  
Loading State 
Skeletons for: 
 Header  
 Checklist  
 Timeline  
 Photos  
 Parts table  
Empty State 
No checklist has been defined for this maintenance type. 
[Generate Standard Checklist] 
[Create Custom Checklist] 
Error State 
Unable to synchronize work order updates. 
Retry 
Continue OAline 
Contact Support 
OAline Mode 
Supported: 
 Checklist completion  
 Photo capture  
 Notes  
 Parts logging  
 Time tracking  
 Digital signatures  
Queued for synchronization: 
 GPS records  
 Inventory updates  
 Approval requests  
 AI summary generation  
Conflict resolution is presented if concurrent updates occur after reconnection. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Large touch targets for field use  
 OAline screen-reader compatibility  
 Voice input for notes  
 High-contrast mode  
 Keyboard navigation on desktop  
 Haptic feedback for critical confirmations (mobile)  
Responsive Behavior 
Desktop 
 Multi-panel execution workspace  
 Persistent context panel  
 Advanced timeline and audit views  
Tablet 
 Collapsible panels  
 Touch-first checklist  
 Split-screen evidence capture  
Mobile 
Primary execution device: 
 Large action buttons  
 Camera-first evidence workflow  
 OAline-first behavior  
 Sticky "Next Task" and "Complete Work" actions  
Performance Targets 
Metric 
Work order load 
Checklist update 
Target 
< 2 seconds 
< 200 ms 
Photo upload (online) < 3 seconds/image 
OAline save 
Timeline update 
Instant 
Real-time 
Completion workflow < 2 seconds after submission 
API Dependencies 
Work Order Services 
 Work Order Details API  
 Work Order Update API  
 Workflow State API  
Asset Services 
 Asset Details API  
 Maintenance History API  
Workforce Services 
 Technician Assignment API  
 GPS Verification API  
Inventory Services 
 Spare Parts API  
 Inventory Adjustment API  
Document Services 
 Media Upload API  
 Annotation API  
Intelligence Services 
 AI Maintenance Summary API  
 Recommendation Engine API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Notification Service  
 WebSocket Gateway  
Analytics Events 
Track: 
 Work order opened  
 Technician accepted assignment  
 GPS verification completed  
 Checklist item completed  
 Photo uploaded  
 Parts consumed  
 Escalation raised  
 Supervisor approved  
 Work order closed  
 AI summary accepted or edited  
Security & Permissions 
Role 
Permission 
Field Technician 
Execute assigned work orders, upload evidence, submit 
completion 
Review, approve, reject, request rework 
View all records, reopen work orders, manage workflows 
Maintenance 
Supervisor 
Asset Manager 
Disaster Head 
All status transitions, evidence uploads, GPS validations, digital signatures, and 
approval decisions must be cryptographically timestamped and written to an 
immutable audit log. Critical work orders aAecting emergency infrastructure may 
require dual approval before closure. 
Read-only oversight with approval override for critical assets 
Figma Design Notes 
The Work Order Details & Execution screen should prioritize field usability while 
preserving enterprise-grade traceability. The execution checklist should remain the 
focal point, supported by contextual asset information, AI guidance, and evidence 
capture. Mobile interactions must minimize typing through checklists, scanning, voice 
notes, and camera integration. Supervisors should be able to review and approve work 
eAiciently without navigating away from the work order context. 
PART 4 — Asset Management 
SCREEN 21 
Inspection Management (Enterprise Inspection Workspace) 
Screen Metadata 
Property 
Value 
Screen Name Inspection Management 
Module 
Primary Users 
Asset Management 
Inspection OAicers, Zone Supervisors 
Secondary Users Asset Managers, Disaster Head 
Property 
Value 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet, Mobile 
Light & Dark 
Refresh Interval Real-Time 
Screen Purpose 
The Inspection Management workspace enables users to plan, schedule, execute, 
monitor, and analyze inspections across all disaster-critical infrastructure assets. 
Supported inspection categories include: 
 Routine Inspection  
 Preventive Inspection  
 Pre-Cyclone Readiness Inspection  
 Post-Cyclone Damage Assessment  
 Safety Compliance Inspection  
 Regulatory Inspection  
 Emergency Inspection  
 Vendor Inspection  
The workspace standardizes inspection quality while ensuring operational readiness. 
Primary UX Goals 
Within 10 seconds, users should identify: 
 Today's inspections  
 Overdue inspections  
 Failed inspections  
 Critical defects  
 Compliance score  
Within 60 seconds, users should be able to: 
 Create inspection schedules  
 Assign inspectors  
 Launch inspections  
 Review inspection results  
 Convert failures into work orders  
Information Hierarchy 
Priority: 
1. Inspection KPI Dashboard  
2. Inspection Schedule  
3. Inspection Queue  
4. Compliance Overview  
5. Inspector Assignment  
6. AI Risk Recommendations  
7. Defect Analytics  
8. Inspection Reports  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Filters | Notifications | Profile                                                  
| 
+------------------------------------------------------------------------------------------------------+ 
| KPI Summary Cards                                                                                   
| 
+------------------------------------------------------------------------------------------------------+ 
| Schedule | Inspection Queue | Templates | Inspectors | Analytics | Reports                           
| 
+------------------------------------------------------------------------------------------------------+ 
| Left Panel                     
| Main Workspace                    
| Right Context Panel              
| 
|--------------------------------|-----------------------------------|----------------------------------| 
| Filters                        
| Saved Views                    
| Quick Actions                  
| Enterprise Inspection Table       
| Calendar View                     
| Timeline                          
| Inspection Summary               
| Asset Information                
| AI Recommendations               
| 
| 
| 
+------------------------------------------------------------------------------------------------------+ 
Header 
Global Search supports: 
 Inspection ID  
 Asset ID  
 Inspector  
 Zone  
 Ward  
 Template  
 Defect Type  
Instant suggestions appear while typing. 
KPI Summary Cards 
Scheduled Today 
42 
Completed 
37 
Green 
Overdue 
9 
Orange 
Failed 
12 
Red 
Compliance Score 
94% 
Blue 
AI High-Risk Assets 
26 
Purple 
Selecting a KPI filters the inspection queue automatically. 
Navigation Tabs 
1. Inspection Queue  
2. Calendar  
3. Templates  
4. Inspectors  
5. Compliance Dashboard  
6. Analytics  
7. Reports  
Tab 1 — Inspection Queue 
Default landing page. 
Enterprise Inspection Table 
Columns: 
Column 
Inspection ID 
Asset 
Inspection Type 
Inspector 
Priority 
Due Date 
Status 
Description 
Unique identifier 
Linked asset 
Routine, Safety, Emergency 
Assigned user 
Critical → Low 
Scheduled completion 
Workflow state 
Compliance Score Latest score 
Defects 
Example 
ID 
Count 
Asset 
Type 
IN-2051 Generator G-18 Routine 
IN-2058 Pump P-42 
Status 
Score 
Scheduled — 
Emergency In Progress — 
IN-2072 Shelter S-09 
Safety 
Completed 97% 
Inspection Lifecycle 
Draft 
↓ 
Scheduled 
↓ 
Assigned 
↓ 
Accepted 
↓ 
In Progress 
↓ 
Submitted 
↓ 
Supervisor Review 
↓ 
Approved 
↓ 
Closed 
Additional states: 
 Rejected  
 Reopened  
 Escalated  
 Cancelled  
Inspection Priority 
Priority Color Target Completion 
Critical Red 
High 
2 Hours 
Orange 8 Hours 
Medium Yellow 24 Hours 
Low 
Blue 72 Hours 
Inspection Detail Drawer 
Displays: 
Overview 
Inspection 
IN-2058 
Asset 
Pump P-42 
Type 
Emergency 
Status 
In Progress 
Inspector 
 Name  
 Contact  
 Certification  
 Shift  
Inspection Timeline 
Scheduled 
↓ 
Assigned 
↓ 
Accepted 
↓ 
Started 
↓ 
Evidence Uploaded 
↓ 
Submitted 
Asset Summary 
 Health Score  
 Last Maintenance  
 Last Inspection  
 Open Work Orders  
 AI Risk  
Quick Actions 
Role-based actions include: 
 Start Inspection  
 Reassign  
 Escalate  
 View Asset  
 View GIS Location  
 Convert to Work Order  
 Generate Report  
Bulk Actions 
Supports: 
 Assign inspectors  
 Reschedule  
 Change priority  
 Export  
 Cancel inspections  
 Notify inspectors  
Tab 2 — Inspection Calendar 
Views: 
 Day  
 Week  
 Month  
 Timeline  
Color Coding: 
 Routine → Green  
 Safety → Blue  
 Emergency → Red  
 Regulatory → Purple  
 Post-Disaster → Orange  
Features: 
 Drag-and-drop scheduling  
 Inspector availability overlay  
 Weather conflict indicators  
 Public holiday awareness  
AI Schedule Optimization 
The system suggests optimal schedules based on: 
 Asset criticality  
 Cyclone forecast  
 Inspector workload  
 Travel time  
 Previous inspection history  
 Regulatory deadlines  
Example 
Recommendation 
Inspect Shelter S-14 today instead of tomorrow. 
Reason: 
Cyclone forecast indicates high winds within 24 hours. 
Risk Reduction 
91% 
Tab 3 — Inspection Templates 
Templates standardize inspection quality. 
Examples: 
 Generator Checklist  
 Pump Station Checklist  
 Shelter Safety Checklist  
 Transformer Inspection  
 Flood Sensor Validation  
Each template defines: 
 Checklist items  
 Mandatory evidence  
 Pass/fail rules  
 Scoring weights  
 Required certifications  
Version history is maintained. 
Template Builder 
Authorized users can: 
 Add sections  
 Reorder checklist items  
 Configure scoring  
 Define mandatory photos  
 Add conditional questions  
 Publish new versions  
Tab 4 — Inspector Management 
Displays: 
Inspector Certifications Assigned Availability 
Ravi Kumar Electrical II 
Anita Rao 
5 
Mechanical III 3 
Suresh Babu Civil II 
Features: 
 Skill matching  
4 
 Certification expiry alerts  
 Shift planning  
 Utilization tracking  
Available 
Busy 
Available 
Inspector Map 
Embedded GIS displays: 
 Live location  
 Assigned inspections  
 Planned routes  
 ETA  
Supports dispatch and reassignment. 
Tab 5 — Compliance Dashboard 
KPIs include: 
 Overall Compliance Score  
 Zone-wise Compliance  
 Asset Category Compliance  
 Failed Inspections  
 Critical Defects  
 Repeat Defects  
Interactive charts support drill-down. 
Tab 6 — Inspection Analytics 
Metrics include: 
 Pass Rate  
 Average Inspection Time  
 Inspector Productivity  
 Defect Frequency  
 Repeat Failure Rate  
 Compliance Trends  
 Zone Comparison  
 Asset Category Comparison  
Charts: 
 Line  
 Bar  
 Heatmap  
 Trend Analysis  
AI Defect Detection 
For supported asset types, uploaded images are analyzed. 
Outputs: 
AI Inspection Analysis 
Cooling Fan 
Possible Crack Detected 
Confidence 
93% 
Severity 
High 
Recommendation 
Schedule corrective maintenance immediately. 
Inspectors can: 
 Accept  
 Reject  
 Modify AI findings  
Defect Classification 
Severity Levels: 
Severity 
Color 
Critical 
High 
Medium 
Low 
Red 
Orange 
Yellow 
Blue 
Observation Gray 
Each defect records: 
 Description  
 Location  
 Photo  
 Root Cause (optional)  
 Recommended Action  
Automatic Maintenance Trigger 
Rules engine automatically creates work orders when: 
 Critical defect found  
 Compliance score below threshold  
 Safety violation detected  
 AI confidence exceeds configured threshold  
 Regulatory requirement mandates repair  
Generated work orders are linked bidirectionally with the inspection. 
Notifications 
Real-time alerts include: 
 Inspection assigned  
 Inspection overdue  
 Critical defect detected  
 AI defect identified  
 Supervisor approved report  
 Work order generated  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Inspection table  
 Calendar  
 Analytics  
 Inspector list  
Empty State 
No inspections match the current filters. 
Adjust filters or schedule a new inspection. 
[Create Inspection] 
Error State 
Unable to load inspection data. 
Retry 
View Cached Schedule 
Contact Administrator 
OAline Mode 
Available: 
 View assigned inspections  
 Execute inspection checklists  
 Capture photos  
 Record notes  
 Save drafts  
Unavailable: 
 Live inspector tracking  
 AI image analysis  
 Automatic work-order generation  
 Real-time collaboration  
OAline submissions synchronize automatically when connectivity returns. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-accessible tables  
 Screen-reader compatible forms  
 High-contrast status indicators  
 Accessible calendars  
 Voice note support  
 Large touch targets for field inspections  
Responsive Behavior 
Desktop 
 Full inspection management console  
 Multi-panel analytics  
 Template builder  
 Compliance dashboards  
Tablet 
 Touch-optimized inspection management  
 Split-screen checklist execution  
 Collapsible analytics  
Mobile 
Optimized for field inspectors: 
 Assigned inspections  
 Checklist execution  
 Camera-first evidence capture  
 OAline support  
 GPS verification  
 One-tap submission  
Performance Targets 
Metric 
Target 
Workspace load < 2 seconds 
Search response < 300 ms 
Calendar rendering < 500 ms 
Template loading < 500 ms 
Analytics rendering < 2 seconds 
Queue updates 
Real-time 
API Dependencies 
Inspection Services 
 Inspection API  
 Inspection Scheduling API  
 Inspection Template API  
 Inspection Report API  
Asset Services 
 Asset Registry API  
 Asset Details API  
Workforce Services 
 Inspector Directory API  
 Shift Management API  
 GPS Tracking API  
Intelligence Services 
 AI Defect Detection API  
 Compliance Scoring API  
 Recommendation Engine API  
Integration Services 
 Work Order API  
 Notification Service  
 Audit Logging API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Inspection created  
 Inspector assigned  
 Inspection started  
 Checklist submitted  
 AI defect accepted  
 Defect severity updated  
 Work order auto-generated  
 Report approved  
 Compliance dashboard viewed  
 Inspection report exported  
Security & Permissions 
Role 
Permission 
Commissioner Read-only oversight 
Disaster Head 
Full operational control 
Asset Manager View all inspections and linked maintenance 
Zone Supervisor Schedule, assign, review, and approve inspections within assigned 
zones 
Inspection 
OAicer 
Execute assigned inspections, upload evidence, submit reports 
Every inspection lifecycle transition, checklist modification, evidence upload, AI 
recommendation acceptance/rejection, compliance score change, and approval 
decision must be immutably recorded with timestamps, user identity, device 
information, and linked asset/work-order references. 
Figma Design Notes 
The Inspection Management workspace should emphasize consistency, compliance, 
and operational readiness. The inspection queue and calendar are the primary 
interaction surfaces, while templates and AI-assisted defect detection standardize 
inspection quality. Supervisors should be able to identify risks quickly through 
compliance dashboards, and field inspectors should complete inspections eAiciently 
using mobile-first checklists, camera integration, oAline capabilities, and automatic 
maintenance escalation. 
PART 4 — Asset Management 
SCREEN 22 
Mobile Inspection Execution 
Screen Metadata 
Property 
Value 
Screen Name Mobile Inspection Execution 
Module 
Primary Users 
Inspection Management 
Inspection OAicers 
Secondary Users Zone Supervisors (Review) 
Priority 
Critical 
Authentication Required 
Devices 
Orientation 
Theme 
Connectivity 
Smartphone (Primary), Tablet 
Portrait First 
Light & Dark 
OAline First 
Screen Purpose 
The Mobile Inspection Execution screen enables inspectors to complete standardized 
inspections directly at the asset location. 
Core capabilities include: 
 QR/RFID verification  
 GPS arrival validation  
 Dynamic inspection checklist  
 AI-assisted defect recognition  
 Voice observations  
 Photo/video evidence  
 Compliance scoring  
 Digital signatures  
 OAline synchronization  
 Automatic work-order generation  
Primary UX Goals 
Within 15 seconds, inspectors should be able to: 
 Verify the correct asset  
 Check in  
 Start inspection  
Within 5 minutes, inspectors should complete a standard inspection with minimal 
typing. 
Information Hierarchy 
Priority: 
1. Asset Verification  
2. GPS Validation  
3. Inspection Checklist  
4. Evidence Capture  
5. AI Defect Detection  
6. Compliance Score  
7. Digital Signature  
8. Submission  
Mobile Layout ------------------------------------------------ 
Inspection Header ------------------------------------------------ 
Asset Card ------------------------------------------------ 
GPS Status 
------------------------------------------------ 
Inspection Progress ------------------------------------------------ 
Checklist Section ------------------------------------------------ 
Evidence Capture ------------------------------------------------ 
Observations ------------------------------------------------ 
Compliance Score ------------------------------------------------ 
Submit Inspection ------------------------------------------------ 
Bottom Navigation ------------------------------------------------ 
Designed for thumb-friendly interaction. 
Inspection Header 
Displays: 
 Inspection ID  
 Inspection Type  
 Priority  
 Status  
Example 
Inspection 
IN-2058 
Emergency Inspection 
Priority 
Critical 
Status 
Assigned 
Asset Verification 
Before inspection begins, the inspector must verify the correct asset. 
Verification methods: 
 Scan QR  
 Scan RFID  
 NFC (Future)  
 Manual Asset ID  
QR Scanner 
Opening the scanner launches the device camera. 
Success response: 
Asset Verified 
Generator G-018 
Zone 4 
Ward 18 
Verification Failure 
Scanned asset does not match the assigned inspection. 
Rescan 
Report Issue 
GPS Arrival Verification 
After asset verification: 
Current Distance 
6 meters 
GPS Accuracy 
3 meters 
Status 
Verified 
Rules: 
 Configurable radius (default 20 m)  
 Manual override requires supervisor approval  
 GPS metadata stored with submission  
Check-In 
Inspector taps: 
Check In 
Automatically records: 
 Arrival time  
 GPS coordinates  
 Device ID  
 Network status  
 Battery level (optional audit)  
Asset Summary Card 
Displays: 
Field 
Asset 
Health Score 
Last Inspection 
Value 
Generator G-018 
94% 
14 Days Ago 
Open Work Orders 1 
AI Risk 
Quick actions: 
 View History  
Medium 
 View Maintenance  
 Open GIS  
Inspection Progress 
Progress bar: 
Inspection Progress 
38% 
8 of 21 Items Completed 
Estimated remaining time displayed below. 
Dynamic Inspection Checklist 
Checklist items are loaded from the assigned template. 
Example 
☐ Asset Identification Verified 
☐ Exterior Condition 
☐ Foundation Integrity 
☐ Electrical Connections 
☐ Fuel Level 
☐ Leakage Check 
☐ Operational Test 
☐ Warning Indicators 
☐ Safety Equipment 
☐ Final Functional Test 
Checklist Item Structure 
Selecting a checklist item expands it. 
Example 
Fuel Level Inspection 
Expected 
> 60% 
Current Value 
78% 
Status 
PASS 
Each item supports: 
 Numeric input  
 Pass  
 Fail  
 Not Applicable  
 Notes  
 Photos  
 Voice note  
 Attachments  
Conditional Logic 
Templates support adaptive behavior. 
Example: 
If: 
Fuel Leakage = YES 
Automatically display: 
 Leak Severity  
 Leak Location  
 Emergency Shutdown  
 Immediate Recommendation  
Hidden questions appear only when applicable. 
Voice-to-Text Observations 
Inspectors may dictate findings. 
Example 
Observation 
Minor corrosion detected near exhaust mounting bracket. 
Supports: 
 English  
 Telugu  
 Multilingual transcription (future)  
Editable after transcription. 
AI Defect Recognition 
When an image is captured: 
The AI automatically analyzes it. 
Example 
Inspection AI 
Possible Rust 
Confidence 
94% 
Severity 
Medium 
Detected defect categories: 
 Corrosion  
 Crack  
 Water ingress  
 Loose wiring  
 Oil leakage  
 Structural damage  
 Missing bolts  
 Overheating indicators  
Inspector options: 
 Accept  
 Reject  
 Edit  
Photo Capture 
Required evidence: 
1. Asset Overview  
2. Asset ID Plate  
3. Inspection Area  
4. Defect Close-up (if applicable)  
5. Final Completed Condition  
Metadata stored: 
 GPS  
 Timestamp  
 Device  
 Orientation  
Image Annotation 
Tools: 
 Arrow  
 Circle  
 Rectangle  
 Text Label  
 Blur Sensitive Areas  
Video Evidence 
Optional: 
Maximum duration: 
90 seconds 
Compression occurs before upload. 
Compliance Scoring 
Calculated dynamically. 
Example 
Current Compliance 
92% 
PASS 
Scoring updates after every checklist response. 
Compliance Thresholds 
Score Result 
95–100 Excellent 
85–94 Good 
70–84 Needs Attention 
<70 
Failed 
Defect Recording 
Each defect includes: 
 Category  
 Severity  
 Description  
 Photo  
 Recommended Action  
 Estimated Risk  
Severity options: 
Critical 
High 
Medium 
Low 
Observation 
Automatic Maintenance Recommendation 
When a defect is marked: 
The system suggests maintenance. 
Example 
AI Recommendation 
Cooling Fan Wear 
Preventive Maintenance 
Recommended within 
7 Days 
Inspector may: 
 Accept  
 Ignore (requires reason)  
Automatic Work Order Trigger 
If: 
 Compliance <70  
 Critical defect  
 Safety issue  
The app displays: 
Create Maintenance Work Order? 
YES 
NO 
If YES: 
The work order is generated automatically after supervisor review. 
Safety Confirmation 
Before submission: 
☐ Area Safe 
☐ Equipment Restored 
☐ Temporary Hazards Removed 
Mandatory for all inspections. 
Digital Signature 
Supports: 
Inspector 
↓ 
Supervisor (optional) 
↓ 
Vendor (optional) 
Metadata includes: 
 Time  
 Device  
 GPS  
Final Review Screen 
Displays: 
 Checklist Summary  
 Defects  
 Photos  
 Compliance Score  
 Recommendations  
Example 
Inspection Summary 
Items Completed 
21 
Photos 
15 
Compliance 
92% 
Defects 
2 
Submit Inspection 
Primary button: 
Submit 
Confirmation: 
Inspection Submitted Successfully 
Inspection ID 
IN-2058 
Supervisor Review Pending 
OAline Mode 
Fully supported. 
Available oAline: 
 QR scanning  
 Checklist completion  
 Photos  
 Voice notes  
 GPS capture  
 Signatures  
 Draft saving  
Queued for synchronization: 
 AI image analysis  
 Compliance recalculation  
 Work-order creation  
 Notifications  
Conflict resolution is shown if server data changes before synchronization. 
Loading State 
Skeleton loaders for: 
 Asset summary  
 Checklist  
 Progress  
 Evidence gallery  
Empty State 
No checklist assigned to this inspection. 
Download Template 
Contact Supervisor 
Error State 
Unable to synchronize inspection. 
Retry 
Save OAline 
Continue Working 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Large touch targets  
 Voice input  
 Screen-reader labels  
 High-contrast mode  
 OAline accessibility  
 Haptic feedback for confirmations  
Responsive Behavior 
Smartphone 
Primary experience: 
 Single-column layout  
 Sticky action buttons  
 Bottom navigation  
 Camera-first workflows  
Tablet 
 Two-pane layout  
 Larger evidence gallery  
 Split-screen checklist and asset context  
Performance Targets 
Metric 
Target 
Screen load 
< 2 seconds 
Checklist interaction < 100 ms 
QR scan 
Photo capture 
OAline save 
Synchronization 
< 1 second 
Instant 
Immediate 
< 5 seconds after connectivity 
API Dependencies 
Inspection Services 
 Inspection Details API  
 Inspection Submission API  
 Checklist API  
Asset Services 
 Asset Details API  
 Asset History API  
Location Services 
 GPS Verification API  
 GIS Lookup API  
Media Services 
 Image Upload API  
 Video Upload API  
 Annotation API  
Intelligence Services 
 AI Defect Detection API  
 Compliance Scoring API  
 Recommendation Engine API  
Integration Services 
 Work Order API  
 Notification Service  
 Audit Logging API  
 Sync Queue API  
Analytics Events 
Track: 
 QR scan completed  
 GPS verified  
 Checklist item completed  
 Voice note recorded  
 Photo uploaded  
 AI defect accepted/rejected  
 Compliance score changed  
 Maintenance recommendation accepted  
 Inspection submitted  
 OAline synchronization completed  
Security & Permissions 
Role 
Permission 
Inspection OAicer Execute assigned inspections, capture evidence, submit reports 
Zone Supervisor Review submissions, request revisions, approve inspections 
Asset Manager 
Disaster Head 
View inspection history and linked maintenance actions 
Read-only oversight with authority to reopen critical inspections 
All submissions, media uploads, GPS records, digital signatures, and AI-assisted 
decisions must be protected using encrypted transmission and immutable audit logs. 
OAline data should be encrypted locally until synchronization is complete. 
Figma Design Notes 
The Mobile Inspection Execution screen should be fast, resilient, and field-friendly. 
Every interaction should reduce typing through scanning, voice input, camera capture, 
and adaptive checklists. Primary actions (Check In, Capture Evidence, Submit) must 
remain easily reachable with one hand. OAline capability should be transparent to the 
user, with automatic synchronization once connectivity is restored. The interface should 
prioritize clarity under challenging outdoor conditions, including bright sunlight, gloves, 
and intermittent network coverage. 
PART 4 — Asset Management 
SCREEN 23 
Asset Analytics & Health Intelligence Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Asset Analytics & Health Intelligence 
Module 
Primary Users 
Asset Management 
Commissioner, Disaster Head, Asset Managers 
Secondary Users Zone Supervisors (Filtered) 
Priority 
Executive Critical 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet 
Light & Dark 
Refresh Interval Real-Time (30–60 sec) 
Screen Purpose 
The Asset Analytics Dashboard provides a city-wide operational intelligence view 
across all registered infrastructure assets. 
It enables decision-makers to: 
 Monitor infrastructure health  
 Predict failures before they occur  
 Identify high-risk zones  
 Track maintenance performance  
 Analyze lifecycle costs  
 Optimize replacement planning  
 Measure disaster readiness  
 Prioritize capital investments  
Primary UX Goals 
Within 10 seconds, executives should understand: 
 Overall asset readiness  
 High-risk assets  
 Infrastructure health  
 Maintenance backlog  
 Zone-wise readiness  
Within 2 minutes, they should be able to: 
 Identify failure hotspots  
 Drill into any asset category  
 Compare zones  
 View AI recommendations  
 Generate executive reports  
Information Hierarchy 
Priority: 
1. Executive KPI Cards  
2. City Asset Health Score  
3. Risk Heatmap  
4. AI Failure Prediction  
5. Lifecycle Analytics  
6. Maintenance Performance  
7. Cost Analytics  
8. Strategic Recommendations  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Global Filters | Date Range | Export | Notifications | Profile                             
| 
+------------------------------------------------------------------------------------------------------+ 
| Executive KPI Cards                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Health Trend | Risk Heatmap | Readiness Score | Failure Forecast                                   
| 
+------------------------------------------------------------------------------------------------------+ 
| Left Analytics                    
| Center Dashboard              
| Right Intelligence Panel          
| 
|-----------------------------------|-------------------------------|-----------------------------------| 
| Asset Categories                  
| Zone Filters                      
| Saved Views                       
| Interactive Charts            
| GIS Heatmaps                  
| Trend Analysis                
| AI Insights                       
| Executive Alerts                  
| Recommendations                   
| 
| 
| 
+------------------------------------------------------------------------------------------------------+ 
| Bottom: Maintenance | Lifecycle | Costs | MTTR | MTBF | Utilization | Reports                        
| 
+------------------------------------------------------------------------------------------------------+ 
Global Filters 
Filters apply across every visualization. 
Supported filters: 
 Zone  
 Ward  
 Asset Category  
 Asset Type  
 Department  
 Criticality  
 Maintenance Status  
 Inspection Status  
 Date Range  
Saved filter presets: 
 Cyclone Critical Assets  
 Electrical Infrastructure  
 Water Infrastructure  
 Emergency Shelters  
 Communication Network  
Executive KPI Cards 
Total Assets 
8,462 
Operational Assets 
8,011 
94.7% 
Green 
High-Risk Assets 
186 
Red 
Maintenance Backlog 
94 
Orange 
Average Health Score 
91% 
Blue 
Disaster Readiness 
93% 
Purple 
Each KPI supports drill-down navigation. 
Overall Asset Health Index 
Large radial visualization. 
Example 
City Asset Health 
91% 
Excellent 
Health bands: 
Score Status 
95–100 Excellent 
85–94 Good 
70–84 Needs Attention 
Score Status 
<70 
Critical 
Trend indicator: 
 Last 24 hours  
 Last 7 days  
 Last 30 days  
Zone-wise Readiness Map 
Interactive GIS map. 
Color Coding: 
Green 
Highly Ready 
Yellow 
Moderate 
Orange 
Needs Attention 
Red 
Critical 
Selecting a zone displays: 
 Asset count  
 Readiness score  
 Failed inspections  
 Active work orders  
 High-risk assets  
Asset Category Distribution 
Interactive donut chart. 
Example 
Category 
Count 
Generators 1,248 
Pumps 
Shelters 
1,004 
328 
Transformers 624 
CCTV 
2,118 
Water Tanks 756 
Clicking a slice filters the dashboard. 
Health Trend Analysis 
Time-series chart showing: 
 Daily health score  
 Weekly average  
 Monthly trend  
 Seasonal comparison  
Overlay options: 
 Maintenance events  
 Cyclone events  
 Inspection cycles  
AI Failure Prediction Dashboard 
Displays assets predicted to fail. 
Columns: 
Asset 
Failure Probability Confidence Estimated Failure Window 
Generator G-018 82% 
Pump P-042 
75% 
94% 
90% 
12 Days 
18 Days 
Asset 
Failure Probability Confidence Estimated Failure Window 
CCTV C-338 
61% 
Clicking a row opens Asset Details. 
87% 
30 Days 
Remaining Useful Life (RUL) 
Scatter plot showing estimated operational life. 
Metrics: 
 Current Age  
 Remaining Life  
 Replacement Cost  
 Replacement Priority  
Color Scale: 
Green → Healthy 
Yellow → Aging 
Orange → Near End-of-Life 
Red → Replacement Recommended 
Lifecycle Analytics 
Displays: 
Installed This Year 
482 
End-of-Life Assets 
214 
Assets Requiring Replacement 
63 
Average Asset Age 
7.8 Years 
Lifecycle timeline: 
Installation 
↓ 
Commissioning 
↓ 
Operational 
↓ 
Maintenance 
↓ 
Aging 
↓ 
Replacement 
↓ 
Disposal 
Maintenance Analytics 
KPIs include: 
 Preventive Maintenance Ratio  
 Corrective Maintenance Ratio  
 Emergency Repairs  
 Deferred Maintenance  
 Maintenance Compliance  
Charts: 
 Monthly maintenance volume  
 Work order completion  
 SLA adherence  
 Technician productivity  
Reliability Metrics 
MTBF 
Mean Time Between Failures 
126 Days 
MTTR 
Mean Time To Repair 
5.4 Hours 
Trend comparison available by: 
 Zone  
 Asset Category  
 Vendor  
Cost Analytics 
Displays: 
Metric 
Value 
Capital Investment ₹184 Cr 
Annual Maintenance ₹18.4 Cr 
Emergency Repairs ₹2.7 Cr 
Replacement Budget ₹9.8 Cr 
Charts: 
 Cost by asset category  
 Cost by zone  
 Cost trend  
 Vendor-wise expenditure  
Utilization Dashboard 
Measures: 
 Operating Hours  
 Idle Time  
 Peak Usage  
 Seasonal Usage  
Heatmaps identify: 
 Underutilized assets  
 Overutilized assets  
 Load balancing opportunities  
Inspection Intelligence 
Metrics: 
 Inspection Compliance  
 Average Inspection Score  
 Failed Inspections  
 Repeat Defects  
 Regulatory Compliance  
Charts compare: 
 Zone  
 Department  
 Asset Category  
Risk Heatmap 
Interactive matrix. 
Axes: 
X → Probability 
Y → Impact 
Quadrants: 
 Monitor  
 Moderate  
 High  
 Critical  
Each bubble represents an asset. 
Bubble size: 
Estimated financial impact. 
AI Executive Intelligence Panel 
Persistent right panel. 
Displays: 
Executive Insight 
23 generators have elevated failure risk. 
Expected impact: 
4 emergency shelters. 
Recommended Action: 
Complete preventive maintenance within 5 days. 
Estimated downtime avoided: 
42 hours. 
Estimated savings: 
₹31.6 Lakhs. 
Confidence: 
92% 
Strategic Recommendations 
Examples: 
 Replace 12 aging transformers before cyclone season.  
 Increase preventive maintenance frequency for coastal pumps.  
 Relocate mobile generators to Zone 5 based on readiness gaps.  
 Consolidate maintenance contracts for vendor optimization.  
Each recommendation includes: 
 Priority  
 Financial impact  
 Operational impact  
 Estimated implementation eAort  
 AI confidence score  
Executive Alerts 
Displays critical notifications: 
 Multiple failures in same zone  
 Maintenance SLA breaches  
 Inspection compliance below threshold  
 Sudden health score decline  
 High-value asset oAline  
Alerts are prioritized by severity. 
Reports & Export 
Export formats: 
 PDF  
 Excel  
 CSV  
 PowerPoint  
Prebuilt executive reports: 
 Weekly Asset Health  
 Cyclone Readiness Report  
 Maintenance Performance  
 Replacement Planning  
 Budget Forecast  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Charts  
 Maps  
 Tables  
 AI panel  
Empty State 
No analytics available for the selected filters. 
Adjust filters or expand the date range. 
[Reset Filters] 
Error State 
Unable to retrieve analytics. 
Retry 
View Cached Dashboard 
Contact System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader chart summaries  
 High-contrast visualizations  
 Color-blind-safe palettes  
 Accessible data tables  
Responsive Behavior 
Desktop 
 Full executive analytics workspace  
 Multi-panel layout  
 Interactive GIS maps  
 Complex chart interactions  
Tablet 
 Stacked analytics panels  
 Swipeable KPI sections  
 Simplified GIS controls  
Mobile 
Read-only executive summary: 
 KPI cards  
 Critical alerts  
 AI recommendations  
 Top risks  
Detailed analytics remain desktop/tablet only. 
Performance Targets 
Metric 
Dashboard load 
Filter response 
Target 
< 3 seconds 
< 500 ms 
Metric 
Target 
Chart rendering 
< 1 second 
GIS heatmap update < 2 seconds 
AI insight refresh 
Export generation 
< 30 seconds 
< 10 seconds 
API Dependencies 
Asset Services 
 Asset Registry API  
 Asset Health API  
 Lifecycle API  
Maintenance Services 
 Maintenance Analytics API  
 Work Order API  
 SLA API  
Inspection Services 
 Inspection Analytics API  
 Compliance API  
Intelligence Services 
 Failure Prediction API  
 Remaining Useful Life API  
 Recommendation Engine API  
 Health Scoring API  
GIS Services 
 Heatmap API  
 Zone Analytics API  
Infrastructure 
 Authentication API  
 Analytics Service  
 Report Generation API  
 Audit Logging API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Dashboard viewed  
 Filter applied  
 KPI drilled down  
 Asset selected  
 AI recommendation expanded  
 Report generated  
 Export completed  
 Heatmap interaction  
 Lifecycle analysis viewed  
 Replacement plan opened  
Security & Permissions 
Role 
Commissioner 
Disaster Head 
Asset Manager 
Zone Supervisor 
Inspection & Maintenance 
StaA 
Permission 
Full executive analytics and reporting 
Full operational analytics 
Detailed asset and maintenance analytics 
Analytics restricted to assigned zones 
Read-only operational metrics relevant to assigned 
responsibilities 
Financial metrics, predictive analytics, and strategic planning data must follow role
based access control. All report generation, exports, and AI recommendation 
acknowledgements are logged for governance and audit purposes. 
Figma Design Notes 
The Asset Analytics & Health Intelligence Dashboard should function as the executive 
command center for municipal infrastructure. The design should emphasize rapid 
comprehension through KPI cards, GIS visualizations, and AI-generated insights while 
supporting deep analytical exploration via drill-down interactions. The interface should 
remain uncluttered despite the density of information, using progressive disclosure, 
consistent chart styling, and contextual recommendations to help leaders make 
informed operational and strategic decisions. 
PART 4 — Asset Management 
SCREEN 24 
Spare Parts & Inventory Management 
Screen Metadata 
Property 
Value 
Screen Name Spare Parts & Inventory Management 
Module 
Primary Users 
Asset Management 
Inventory Managers, Asset Managers 
Secondary Users Maintenance Supervisors, Procurement OAicers 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet 
Light & Dark 
Refresh Interval Real-Time 
Screen Purpose 
The Inventory Management workspace enables organizations to manage all spare parts 
and consumables used in maintenance and emergency operations. 
Core capabilities include: 
 Centralized inventory visibility  
 Warehouse management  
 Stock transfers  
 Work order reservations  
 QR/Barcode inventory tracking  
 Procurement integration  
 AI demand forecasting  
 Reorder automation  
 Expiry and warranty tracking  
Primary UX Goals 
Within 10 seconds, users should identify: 
 Low-stock items  
 Critical shortages  
 Reserved inventory  
 Pending purchase requests  
 Warehouse utilization  
Within 60 seconds, users should be able to: 
 Locate a spare part  
 Reserve inventory  
 Transfer stock  
 Create procurement requests  
 View inventory analytics  
Information Hierarchy 
Priority: 
1. Inventory KPIs  
2. Spare Parts Catalog  
3. Warehouse Status  
4. Stock Movements  
5. Reservations  
6. Procurement  
7. AI Forecasting  
8. Inventory Analytics  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Global Search | Filters | Export | Notifications | Profile                                 
| 
+------------------------------------------------------------------------------------------------------+ 
| KPI Summary Cards                                                                                   
| 
+------------------------------------------------------------------------------------------------------+ 
| Inventory | Warehouses | Reservations | Procurement | Forecasting | Reports                          
| 
+------------------------------------------------------------------------------------------------------+ 
| Left Panel                    
| Main Inventory Grid              
| Right Context Panel                
| 
|--------------------------------|---------------------------------|------------------------------------| 
| Filters                        
| Categories                     
| Saved Views                    
| Inventory Table                 
| Warehouse View                  
| Analytics                       
| Selected Item                      
| Stock Details                      
| AI Recommendations                 
| 
| 
| 
+------------------------------------------------------------------------------------------------------+ 
Global Search 
Search supports: 
 Part Number  
 Spare Part Name  
 Barcode  
 QR Code  
 Warehouse  
 Vendor  
 Manufacturer  
 Asset Compatibility  
Autocomplete includes stock availability. 
KPI Summary Cards 
Total Inventory Items 
12,468 
Low Stock Items 
87 
Orange 
Out of Stock 
19 
Red 
Reserved Items 
624 
Blue 
Pending Procurement 
43 
Purple 
Warehouse Utilization 
78% 
Green 
Each KPI supports drill-down filtering. 
Navigation Tabs 
1. Inventory Catalog  
2. Warehouses  
3. Stock Movements  
4. Reservations  
5. Procurement  
6. Forecasting  
7. Analytics  
Tab 1 — Inventory Catalog 
Default landing page. 
Inventory Data Grid 
Columns: 
Column 
Description 
Part Number Unique inventory identifier 
Item Name 
Category 
Warehouse 
Spare part name 
Mechanical, Electrical, Civil 
Current location 
Available Stock Available quantity 
Column 
Description 
Reserved 
Reserved quantity 
Minimum Level Threshold 
Status 
Example 
Part 
Stock health 
Name 
Available Status 
SP-00124 Fuel Filter 42 
SP-00582 Alternator 2 
SP-00441 Pump Motor 0 
Healthy 
Low Stock 
Out of Stock 
Inventory Status 
Status 
Color 
Healthy Green 
Low Stock Orange 
Critical 
Red 
Reserved Blue 
Expired 
Gray 
Item Detail Drawer 
Selecting an item opens: 
Item Overview 
Fuel Filter 
Part No. 
SP-00124 
Category 
Generator Components 
Stock 
42 Units 
Compatible Assets 
Displays: 
 Generator G-018  
 Generator G-031  
 Generator G-054  
Warehouse Locations 
Table: 
Warehouse Quantity 
Central 
Zone 1 
Zone 4 
20 
8 
14 
Stock History 
Timeline: 
Procured 
↓ 
Received 
↓ 
Reserved 
↓ 
Issued 
↓ 
Returned 
Quick Actions 
Role-based actions: 
 Reserve Stock  
 Transfer Inventory  
 Generate Purchase Request  
 Print Barcode  
 Print QR Label  
 View Stock History  
 View Compatible Assets  
Bulk Actions 
Supports: 
 Reserve multiple items  
 Export  
 Change warehouse  
 Print labels  
 Initiate procurement  
Tab 2 — Warehouses 
Displays all inventory locations. 
Example: 
Warehouse 
Capacity Utilization Status 
Central Warehouse 10,000 81% 
Zone 1 Depot 
Zone 4 Depot 
2,500 
2,000 
Operational 
72% 
94% 
Operational 
Nearly Full 
Warehouse Map 
Interactive GIS view showing: 
 Warehouse locations  
 Inventory availability  
 Transfer routes  
 Travel times  
Warehouse Details 
Displays: 
 Manager  
 Contact  
 Operating Hours  
 Storage Conditions  
 Emergency Stock  
Tab 3 — Stock Movements 
Tracks all inventory movements. 
Movement types: 
 Receipt  
 Transfer  
 Reservation  
 Issue  
 Return  
 Adjustment  
 Disposal  
Timeline example: 
Warehouse 
↓ 
Reserved 
↓ 
Issued 
↓ 
Returned 
Barcode / QR Scanning 
Supports: 
 Receive inventory  
 Issue inventory  
 Verify transfers  
 Physical stock count  
Scanning options: 
 Camera  
 Handheld scanner  
 USB barcode reader  
Tab 4 — Reservations 
Displays inventory reserved for work orders. 
Columns: 
 Work Order  
 Asset  
 Reserved By  
 Quantity  
 Expiry  
 Status  
Automatic release occurs when: 
 Work order cancelled  
 Reservation expires  
 Supervisor releases  
Tab 5 — Procurement 
Shows: 
 Purchase Requests  
 Purchase Orders  
 Vendor Deliveries  
 Pending Approvals  
Fields: 
PO 
Vendor 
PO-2034 ABC Industrial 
Status 
In Transit 
ETA 
2 Days 
PO-2038 XYZ Components Pending Approval — 
Vendor Performance 
Metrics: 
 On-time delivery  
 Order accuracy  
 Quality rating  
 Average lead time  
Tab 6 — AI Inventory Forecasting 
Forecasts demand using: 
 Maintenance schedules  
 Historical consumption  
 Seasonal trends  
 Cyclone forecasts  
 Asset age  
 Failure predictions  
Example 
AI Forecast 
Fuel Filters 
Expected Demand 
84 Units 
Next 30 Days 
Confidence 
93% 
Reorder Recommendations 
Displays: 
Recommended Purchase 
Pump Motors 
Order Quantity 
25 
Reason 
Cyclone season demand increase 
Expiry & Warranty Tracking 
Monitors: 
 Expiry dates  
 Shelf life  
 Warranty coverage  
 Manufacturer recalls  
Alerts generated: 
 90 days before expiry  
 Warranty expiration  
 Recall notices  
Inventory Analytics 
KPIs: 
 Inventory Turnover  
 Fill Rate  
 Stock Accuracy  
 Dead Stock  
 Carrying Cost  
 Emergency Purchases  
 Stockouts  
 Warehouse Utilization  
Charts: 
 Monthly consumption  
 Category-wise inventory  
 Vendor comparison  
 Zone-wise distribution  
AI Recommendations Panel 
Persistent right panel. 
Example 
Inventory Insight 
Generator fuel filters will fall below minimum stock within 9 days. 
Recommended Action 
Procure 60 units. 
Estimated stockout risk reduced 
97% 
Confidence 
95% 
Notifications 
Real-time alerts include: 
 Low stock  
 Critical stockout  
 Reservation expired  
 Purchase approved  
 Shipment received  
 Warehouse transfer completed  
 Recall issued  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Inventory grid  
 Warehouse map  
 Analytics  
 Procurement table  
Empty State 
No inventory items match the selected filters. 
Adjust filters or add a new inventory item. 
[Add Inventory Item] 
Error State 
Unable to load inventory information. 
Retry 
View Cached Inventory 
Contact Administrator 
OAline Mode 
Available: 
 View inventory catalog  
 Barcode scanning  
 Stock counting  
 Draft transfer records  
 Reservation requests  
Unavailable: 
 Real-time stock synchronization  
 Procurement approvals  
 AI forecasting  
OAline transactions synchronize automatically upon reconnection. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-accessible data grids  
 High-contrast mode  
 Screen-reader compatible inventory tables  
 Large touch targets for barcode scanning  
 Accessible warehouse maps  
Responsive Behavior 
Desktop 
 Full warehouse management console  
 Multi-panel analytics  
 GIS warehouse map  
Tablet 
 Simplified warehouse operations  
 Touch-friendly stock movements  
 Inventory counting workflows  
Mobile 
Limited operational mode: 
 Barcode scanning  
 Stock lookup  
 Reservation confirmation  
 Physical inventory counting  
Administrative procurement remains desktop/tablet only. 
Performance Targets 
Metric 
Dashboard load 
Inventory search 
Barcode lookup 
Target 
< 2 seconds 
< 300 ms 
< 1 second 
Warehouse map rendering < 2 seconds 
Forecast generation 
Export generation 
< 3 seconds 
< 10 seconds 
API Dependencies 
Inventory Services 
 Inventory Catalog API  
 Stock Movement API  
 Reservation API  
 Warehouse API  
Procurement Services 
 Purchase Request API 
 Purchase Order API  
 Vendor API  
Asset Services 
 Asset Compatibility API  
 Work Order API  
Intelligence Services 
 Inventory Forecast API  
 Demand Prediction API  
 Recommendation Engine API  
Infrastructure 
 Authentication API  
 Notification Service  
 Report Generation API  
 Audit Logging API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Inventory searched  
 Stock reserved  
 Warehouse transfer initiated  
 Barcode scanned  
 Procurement request created  
 Forecast viewed  
 Recommendation accepted  
 Inventory exported  
 Stock adjustment completed  
 Physical count submitted  
Security & Permissions 
Role 
Commissioner 
Disaster Head 
Inventory Manager 
Permission 
Read-only inventory analytics 
Full visibility across all warehouses 
Full CRUD on inventory, warehouses, and stock movements 
Maintenance Supervisor Reserve and issue inventory for work orders 
Role 
Permission 
Procurement OAicer 
Field Technician 
Manage purchase requests, purchase orders, and vendors 
View assigned reservations and confirm inventory receipt 
All inventory adjustments, transfers, reservations, procurement approvals, and stock 
reconciliations must be logged in an immutable audit trail. High-value inventory write
oAs and manual stock corrections require supervisor approval with justification. 
Figma Design Notes 
The Spare Parts & Inventory Management module should emphasize inventory 
accuracy, operational eAiciency, and disaster readiness. Users should be able to 
locate parts, understand stock health, reserve inventory, and manage procurement with 
minimal navigation. AI forecasting and warehouse analytics should proactively prevent 
shortages during cyclone preparedness, while QR/barcode workflows should 
streamline field and warehouse operations. 
PART 4 — Asset Management 
SCREEN 25 
Procurement & Vendor Management 
Screen Metadata 
Property 
Value 
Screen Name Procurement & Vendor Management 
Module 
Primary Users 
Asset Management 
Procurement OAicers, Inventory Managers 
Secondary Users Disaster Head, Finance OAicers 
Priority 
Critical 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet 
Light & Dark 
Property 
Value 
Refresh Interval Real-Time 
Screen Purpose 
The Procurement & Vendor Management module provides end-to-end visibility into 
procurement operations. 
It supports: 
 Vendor onboarding  
 Purchase Requests (PR)  
 Purchase Orders (PO)  
 Approval workflows  
 Goods receipt  
 Vendor evaluation  
 Contract management  
 Emergency procurement  
 Financial governance  
 Procurement analytics  
Primary UX Goals 
Within 10 seconds, users should identify: 
 Pending approvals  
 Delayed purchase orders  
 Critical procurement requests  
 Vendor SLA issues  
 Emergency purchases  
Within 60 seconds, users should be able to: 
 Create a purchase request  
 Approve a purchase order  
 Review vendor performance  
 Track deliveries  
 Escalate delayed procurement  
Information Hierarchy 
Priority: 
1. Procurement KPI Cards  
2. Purchase Requests  
3. Purchase Orders  
4. Vendor Performance  
5. Contracts  
6. Goods Receipt  
7. Procurement Analytics  
8. AI Recommendations  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Filters | Export | Notifications | Profile                                         
| 
+------------------------------------------------------------------------------------------------------+ 
| KPI Summary Cards                                                                                   
| 
+------------------------------------------------------------------------------------------------------+ 
| Purchase Requests | Purchase Orders | Vendors | Contracts | Analytics | Reports                      
| 
+------------------------------------------------------------------------------------------------------+ 
| Left Panel                    
| Main Workspace                  
| Right Intelligence Panel           
| 
|--------------------------------|---------------------------------|------------------------------------| 
| Filters                        
| Saved Views                    
| Enterprise Procurement Grid     | Selected Record                    
| Workflow Timeline               
| Vendor Insights                    
| 
| 
| Quick Actions                  
| Analytics                       
| AI Recommendations                 
| 
+------------------------------------------------------------------------------------------------------+ 
Global Search 
Search by: 
 Purchase Request ID  
 Purchase Order ID  
 Vendor Name  
 Contract Number  
 Invoice Number  
 Item Name  
 Part Number  
Autocomplete includes procurement status. 
KPI Summary Cards 
Pending Purchase Requests 
54 
Pending Purchase Orders 
21 
Delayed Deliveries 
8 
Red 
Emergency Procurement 
6 
Orange 
Active Vendors 
148 
Contract Compliance 
96% 
Green 
Navigation Tabs 
1. Purchase Requests  
2. Purchase Orders  
3. Vendors  
4. Contracts  
5. Goods Receipt  
6. Analytics  
Tab 1 — Purchase Requests (PR) 
Default landing page. 
Purchase Request Grid 
Columns: 
Column 
PR ID 
Requester 
Priority 
Category 
Description 
Unique request ID 
Employee/Department 
Critical → Low 
Electrical, Civil, Mechanical 
Estimated Cost Budget 
Column 
Description 
Status 
Required By 
Example 
PR 
Workflow state 
Target date 
Category 
PR-2051 Generator Parts 
Priority Status 
High 
Pending Approval 
PR-2062 Pump Components Critical Approved 
PR Workflow 
Draft 
↓ 
Submitted 
↓ 
Department Approval 
↓ 
Finance Review 
↓ 
Procurement Approval 
↓ 
Purchase Order Created 
Quick Actions 
 Create PR  
 Edit  
 Approve  
 Reject  
 Duplicate  
 Attach Documents  
 Generate PO  
Tab 2 — Purchase Orders (PO) 
Displays all purchase orders. 
Columns: 
PO 
Vendor 
PO-3105 ABC Industrial 
Amount Delivery Status 
₹2,45,000 4 Aug 
In Transit 
PO-3112 XYZ Components ₹8,75,000 8 Aug Approved 
Purchase Order Lifecycle 
Created 
↓ 
Approved 
↓ 
Sent to Vendor 
↓ 
Accepted 
↓ 
Dispatched 
↓ 
Goods Received 
↓ 
Closed 
Additional states: 
 Cancelled  
 Returned  
 Partially Delivered  
 On Hold  
Delivery Tracking 
Displays: 
 ETA  
 Courier details  
 Shipment status  
 Delivery progress  
 Delay indicators  
Interactive timeline: 
PO Approved 
↓ 
Vendor Accepted 
↓ 
Shipment 
↓ 
Warehouse Arrival 
↓ 
Inspection 
↓ 
Inventory Updated 
Tab 3 — Vendor Management 
Vendor Directory 
Columns: 
Vendor 
ABC Industrial 
Category 
Electrical 
Rating Status 
4.8 
Active 
XYZ Components Mechanical 4.5 Active 
Coastal Pumps Ltd Water Systems 3.9 
Under Review 
Vendor Profile 
Displays: 
 Company information  
 Contact persons  
 Certifications  
 GST details  
 Bank details (role restricted)  
 Service regions  
 Approved product categories  
Vendor Performance Scorecard 
Metrics: 
 On-Time Delivery  
 Quality Score  
 Defect Rate  
 SLA Compliance  
 Average Lead Time  
 Cost Competitiveness  
 Contract Compliance  
Example 
ABC Industrial 
Overall Rating 
4.8 / 5 
On-Time Delivery 
97% 
Quality 
98% 
Lead Time 
4.2 Days 
AI Vendor Recommendation 
When creating a PO: 
Recommended Vendor 
ABC Industrial 
Reason 
Best historical delivery performance for generator components. 
Confidence 
94% 
Tab 4 — Contracts 
Displays: 
 Contract Number  
 Vendor  
 Validity  
 Value  
 SLA  
 Renewal Date  
 Status  
Contract timeline: 
Created 
↓ 
Approved 
↓ 
Active 
↓ 
Renewal Reminder 
↓ 
Expired 
Contract Alerts 
Automatic alerts: 
 Expiring in 90 days  
 SLA violations  
 Spending threshold exceeded  
 Renewal required  
Tab 5 — Goods Receipt (GRN) 
Warehouse teams record incoming deliveries. 
Fields: 
 PO Reference  
 Vendor  
 Delivery Date  
 Quantity Received  
 Quantity Rejected  
 Inspection Result  
Workflow: 
Shipment Received 
↓ 
Quality Inspection 
↓ 
Accepted 
↓ 
Inventory Updated 
Quality Inspection 
Inspect: 
 Quantity  
 Packaging  
 Damage  
 Specification compliance  
 Serial numbers  
Possible outcomes: 
 Accepted  
 Partially Accepted  
 Rejected  
Procurement Analytics 
KPIs: 
 Procurement Cycle Time  
 Approval Time  
 Vendor Performance  
 Emergency Purchases  
 Cost Savings  
 Contract Utilization  
 Delivery Delays  
Charts: 
 Monthly procurement spend  
 Vendor comparison  
 Category-wise purchases  
 Zone-wise procurement  
 Budget utilization  
Emergency Procurement Mode 
Activated during disaster response. 
Features: 
 Accelerated approvals  
 Pre-approved vendors  
 Emergency budget allocation  
 Simplified documentation  
 Priority notifications  
Emergency banner: 
Emergency Procurement Mode Active 
Cyclone Response Operations 
Fast-track approval workflow enabled. 
AI Procurement Intelligence 
Persistent right-side panel. 
Example 
Procurement Insight 
Pump motor inventory projected to deplete within 5 days. 
Recommended Action 
Issue emergency purchase order for 40 units. 
Preferred Vendor 
XYZ Components 
Expected savings 
₹2.4 Lakhs 
Confidence 
91% 
Notifications 
Real-time alerts: 
 PR submitted  
 Approval pending  
 PO approved  
 Shipment delayed  
 Goods received  
 Contract expiring  
 Vendor SLA breached  
 Emergency procurement initiated  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Procurement tables  
 Vendor profile  
 Analytics  
 Timeline  
Empty State 
No procurement records found. 
Create a purchase request to begin. 
[New Purchase Request] 
Error State 
Unable to load procurement information. 
Retry 
View Cached Data 
Contact Procurement Administrator 
OAline Mode 
Available: 
 View existing PRs/POs  
 Draft purchase requests  
 Review vendor profiles  
 Prepare goods receipt drafts  
Unavailable: 
 Final approvals  
 Live delivery tracking  
 Contract signing  
 AI recommendations  
OAline drafts synchronize automatically when connectivity returns. 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-accessible procurement tables  
 Screen-reader compatible forms  
 High-contrast mode  
 Accessible approval dialogs  
 Color-independent workflow indicators  
Responsive Behavior 
Desktop 
 Full procurement workspace  
 Multi-column analytics  
 Vendor comparison dashboards  
Tablet 
 Simplified approval workflows  
 Touch-friendly forms  
 Compact vendor profiles  
Mobile 
Read-only with limited actions: 
 Approve/reject requests (authorized roles)  
 View delivery status  
 Receive procurement alerts  
Complex procurement creation remains desktop/tablet focused. 
Performance Targets 
Metric 
Target 
Workspace load < 2 seconds 
Search response < 300 ms 
Approval action 
< 500 ms 
Vendor profile load < 1 second 
Analytics rendering < 2 seconds 
Report generation < 10 seconds 
API Dependencies 
Procurement Services 
 Purchase Request API  
 Purchase Order API  
 Approval Workflow API  
 Goods Receipt API  
Vendor Services 
 Vendor Master API  
 Vendor Performance API  
 Contract Management API  
Inventory Services 
 Stock Update API  
 Warehouse API  
Intelligence Services 
 Vendor Recommendation API  
 Procurement Forecast API  
 Cost Optimization API  
Infrastructure 
 Authentication API  
 Notification Service  
 Report Generation API  
 Audit Logging API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Purchase request created  
 Approval completed  
 Purchase order generated  
 Vendor profile viewed  
 Contract renewed  
 Goods receipt completed  
 AI recommendation accepted  
 Emergency procurement activated  
 Procurement report exported  
 Vendor scorecard reviewed  
Security & Permissions 
Role 
Permission 
Commissioner 
Disaster Head 
Read-only procurement dashboards 
Approve emergency procurement and view all analytics 
Procurement OAicer Full procurement lifecycle management 
Finance OAicer 
Budget validation, financial approvals, invoice verification 
Inventory Manager Goods receipt, stock reconciliation, warehouse updates 
Approval authority must follow configurable financial thresholds (e.g., department
level, finance, commissioner). Vendor banking information, contracts, invoices, and 
financial documents require additional access controls and encryption. All approvals, 
modifications, and emergency procurement actions must be immutably recorded with 
timestamps, approver identity, and justification where applicable. 
Figma Design Notes 
The Procurement & Vendor Management module should balance operational 
eAiciency, financial governance, and disaster responsiveness. Procurement 
workflows should be visually clear, emphasizing approval status, delivery progress, 
vendor reliability, and contractual obligations. AI recommendations should proactively 
reduce delays, optimize vendor selection, and support emergency procurement during 
cyclone operations without compromising auditability. 
PART 4 — Asset Management 
SCREEN 26 
Asset Lifecycle & Disposal Management 
Screen Metadata 
Property 
Value 
Screen Name Asset Lifecycle & Disposal Management 
Module 
Primary Users 
Asset Management 
Asset Managers, Disposal Committee 
Secondary Users Commissioner, Finance OAicer, Disaster Head 
Property 
Value 
Priority 
High 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet 
Light & Dark 
Refresh Interval On Demand 
Screen Purpose 
The Asset Lifecycle & Disposal module manages the complete end-of-life process for 
infrastructure assets. 
Supported lifecycle events include: 
 Commissioning  
 Operational Monitoring  
 Refurbishment  
 Major Overhaul  
 Transfer Between Departments  
 Retirement  
 Disposal  
 Auction  
 Recycling  
 Historical Archiving  
Every lifecycle event updates operational, financial, environmental, and audit records. 
Primary UX Goals 
Within 10 seconds, users should identify: 
 Assets approaching end-of-life  
 Pending disposal approvals  
 Assets eligible for refurbishment  
 Upcoming warranty expirations  
 Replacement priorities  
Within 5 minutes, users should be able to: 
 Initiate retirement  
 Approve disposal  
 Schedule replacement  
 Archive asset records  
 Generate disposal reports  
Information Hierarchy 
Priority: 
1. Lifecycle KPIs  
2. End-of-Life Assets  
3. Retirement Workflow  
4. Disposal Approval  
5. Financial Summary  
6. Environmental Compliance  
7. Historical Archive  
8. AI Recommendations  
Desktop Layout 
+------------------------------------------------------------------------------------------------------+ 
| Header | Search | Filters | Export | Notifications | Profile                                         
| 
+------------------------------------------------------------------------------------------------------+ 
| Lifecycle KPI Cards                                                                                
| 
+------------------------------------------------------------------------------------------------------+ 
| Lifecycle | Retirement | Disposal | Refurbishment | Analytics | Reports                              
| 
+------------------------------------------------------------------------------------------------------+ 
| Left Panel                     
| Main Lifecycle Workspace           
| Right Intelligence Panel           
| 
|--------------------------------|------------------------------------|------------------------------------| 
| Filters                        
| Saved Views                    
| Quick Actions                  
| Lifecycle Timeline                 
| Asset Grid                         
| Analytics                          
| Asset Summary                      
| Financial Details                  
| AI Recommendations                 
| 
| 
| 
+------------------------------------------------------------------------------------------------------+ 
Global Search 
Supports: 
 Asset ID  
 Asset Name  
 Serial Number  
 Disposal Case ID  
 Auction ID  
 Contract Number  
 Replacement Project  
Lifecycle KPI Cards 
Total Active Assets 
8,462 
End-of-Life Assets 
214 
Orange 
Pending Disposal 
48 
Refurbishment Candidates 
76 
Replacement Projects 
31 
Archived Assets 
1,942 
Navigation Tabs 
1. Lifecycle Overview  
2. Retirement  
3. Disposal  
4. Refurbishment  
5. Financials  
6. Archive  
7. Analytics  
Tab 1 — Lifecycle Overview 
Displays all assets with lifecycle status. 
Asset 
Current Stage Remaining Life Status 
Generator G-018 Operational 8.4 Years 
Pump P-042 
CCTV C-338 
Aging 
End-of-Life 
Healthy 
1.2 Years 
2 Months 
Monitor 
Replace 
Lifecycle Stages 
Procurement 
↓ 
Installation 
↓ 
Commissioning 
↓ 
Operational 
↓ 
Maintenance 
↓ 
Refurbishment 
↓ 
Aging 
↓ 
Retirement 
↓ 
Disposal 
↓ 
Archive 
Each transition is timestamped and audited. 
Remaining Useful Life (RUL) 
Displays: 
 Estimated remaining life  
 Confidence score  
 Maintenance cost trend  
 Failure probability  
Visualized using: 
 Progress bar  
 Trend graph  
 AI confidence indicator  
Tab 2 — Retirement 
Retirement is initiated when: 
 Asset reaches end-of-life  
 Repair cost exceeds threshold  
 Asset becomes unsafe  
 Technology becomes obsolete  
 Regulatory compliance fails  
Retirement Request 
Fields: 
 Asset  
 Reason  
 Supporting documents  
 Inspection reports  
 Cost comparison  
 Replacement recommendation  
Approval Workflow 
Asset Manager 
↓ 
Zone Supervisor 
↓ 
Finance 
↓ 
Disaster Head 
↓ 
Commissioner 
↓ 
Approved 
Approval levels are configurable based on asset value. 
AI Retirement Recommendation 
Example 
Recommendation 
Retire Pump P-042 
Reason 
Maintenance costs exceeded replacement cost for 18 consecutive months. 
Confidence 
95% 
Tab 3 — Disposal 
Supported disposal methods: 
 Auction  
 Recycling  
 Scrapping  
 Transfer  
 Donation  
 Vendor Buyback  
Disposal Record 
Fields: 
 Disposal Case ID  
 Disposal Method  
 Disposal Date  
 Approved By  
 Disposal Vendor  
 Financial Recovery  
Disposal Workflow 
Retirement Approved 
↓ 
Disposal Scheduled 
↓ 
Asset Removed 
↓ 
Financial Settlement 
↓ 
Environmental Clearance 
↓ 
Archived 
Environmental Compliance 
Tracks: 
 Hazardous materials  
 Electronic waste  
 Fuel disposal  
 Battery recycling  
 Oil disposal  
Compliance status: 
Environmental Clearance 
Approved 
Required certificates are attached to the disposal record. 
Tab 4 — Refurbishment 
Displays assets suitable for refurbishment. 
Fields: 
 Asset  
 Estimated Cost  
 Expected Life Extension  
 Downtime  
 ROI  
Example 
Asset 
Cost Life Extension 
Generator G-011 ₹2.5 L +5 Years 
Pump P-017 
₹1.2 L +3 Years 
AI Refurbishment Recommendation 
Recommendation 
Refurbish Generator G-011 
Estimated Savings 
₹18 Lakhs 
Expected Life Extension 
5 Years 
Confidence 
91% 
Tab 5 — Financial Management 
Displays: 
 Original Purchase Cost  
 Current Book Value  
 Depreciation  
 Total Maintenance Cost  
 Disposal Revenue  
 Net Asset Value  
Depreciation Chart 
Shows: 
 Annual depreciation  
 Current valuation  
 Residual value  
 Replacement cost  
Replacement Budget 
Displays: 
Category Required Budget 
Generators ₹4.8 Cr 
Pumps 
CCTV 
₹2.1 Cr 
₹1.6 Cr 
Tab 6 — Historical Archive 
Archived assets remain searchable. 
Stored information: 
 Lifecycle history  
 Maintenance records  
 Inspection reports  
 Documents  
 Photos  
 Financial records  
 Audit trail  
Archived records are read-only. 
Tab 7 — Lifecycle Analytics 
KPIs: 
 Average Asset Lifespan  
 Refurbishment Success Rate  
 Disposal Revenue  
 Replacement Costs  
 Environmental Compliance  
 Asset Age Distribution  
Charts: 
 Lifecycle funnel  
 Replacement forecast  
 Depreciation trend  
 Disposal method distribution  
 Category-wise aging  
AI Lifecycle Intelligence Panel 
Persistent panel. 
Example 
Lifecycle Insight 
63 assets should be replaced before the next cyclone season. 
Expected maintenance savings 
₹5.8 Crores 
Estimated readiness improvement 
4.7% 
Confidence 
94% 
Notifications 
Real-time alerts: 
 Asset nearing end-of-life  
 Retirement request pending  
 Disposal approval required  
 Environmental certificate missing  
 Refurbishment approved  
 Replacement project initiated  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Lifecycle table  
 Financial charts  
 Timeline  
 AI insights  
Empty State 
No lifecycle records match the selected filters. 
Adjust filters or clear search criteria. 
[Reset Filters] 
Error State 
Unable to retrieve lifecycle information. 
Retry 
View Cached Records 
Contact Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-accessible lifecycle tables  
 Screen-reader summaries  
 High-contrast visualizations  
 Accessible approval dialogs  
Responsive Behavior 
Desktop 
 Full lifecycle workspace  
 Multi-panel financial analytics  
 Interactive timelines  
Tablet 
 Simplified approval workflows  
 Responsive lifecycle charts  
 Touch-friendly document review  
Mobile 
Read-only lifecycle overview with approval notifications for authorized users. 
Performance Targets 
Metric 
Dashboard load 
Asset search 
Lifecycle timeline 
Target 
< 2 seconds 
< 300 ms 
< 500 ms 
Financial chart rendering < 1 second 
Archive retrieval 
Report generation 
< 2 seconds 
< 10 seconds 
API Dependencies 
Asset Services 
 Lifecycle API  
 Asset Archive API  
 Replacement Planning API  
Financial Services 
 Depreciation API  
 Asset Valuation API  
 Disposal Revenue API  
Compliance Services 
 Environmental Compliance API  
 Certification API  
Intelligence Services 
 Lifecycle Prediction API  
 Refurbishment Recommendation API  
 Replacement Optimization API  
Infrastructure 
 Authentication API  
 Notification Service  
 Audit Logging API  
 Report Generation API  
Analytics Events 
Track: 
 Retirement request created  
 Disposal approved  
 Refurbishment initiated  
 Lifecycle report generated  
 Archive viewed  
 AI recommendation accepted  
 Replacement plan created  
 Financial analysis exported  
Security & Permissions 
Role 
Commissioner 
Disaster Head 
Asset Manager 
Finance OAicer 
Permission 
Final approval for high-value retirements and disposal 
Approve operational retirement and replacement plans 
Manage lifecycle workflows, initiate retirement, archive records 
Validate depreciation, disposal value, and financial write-oAs 
Environmental OAicer Verify compliance and disposal certifications 
Retirement approvals, disposal transactions, financial write-oAs, and archive 
operations must be protected by multi-level approval workflows. Disposal 
documentation, environmental certificates, and financial settlements must be 
permanently retained in immutable audit storage. 
Figma Design Notes 
The Asset Lifecycle & Disposal Management module should communicate long-term 
governance and sustainability rather than day-to-day operations. The interface should 
emphasize lifecycle progression, replacement planning, environmental responsibility, 
and financial stewardship. AI-generated recommendations should help decision
makers optimize capital expenditure, reduce operational risk, and ensure disaster
critical assets are replaced or refurbished before they become liabilities. 
PART 4 – Asset Management Module Status: Complete  
Screens Completed 
Screen Title 
16 
17 
18 
19 
20 
21 
22 
23 
24 
25 
26 
Asset Registry  
Asset Details (360° Digital Twin)  
Asset Registration Wizard  
Maintenance Management  
Work Order Details & Execution  
Inspection Management  
Mobile Inspection Execution  
Asset Analytics & Health Intelligence  
Spare Parts & Inventory Management  
Procurement & Vendor Management  
Asset Lifecycle & Disposal Management  
Status 
PART 5 — Incident & Emergency Operations Management 
This module is the mission-critical command layer of CycloneGuard. It coordinates 
people, assets, emergency response teams, shelters, logistics, and decision
making during all phases of a cyclone. 
It is designed to be comparable to: 
 FEMA National Incident Management System (NIMS)  
 ESRI Emergency Management Suite  
 Microsoft Dynamics 365 Emergency Response  
 IBM Intelligent Operations Center  
 Hexagon HxGN OnCall  
 Everbridge Critical Event Management  
SCREEN 27 
Emergency Incident Dashboard 
Screen Metadata 
Property 
Value 
Screen Name Emergency Incident Dashboard 
Module 
Incident & Emergency Operations 
Primary Users Commissioner, Disaster Management Head 
Secondary 
Users 
Priority 
Zone Supervisors, Emergency Operations Center (EOC), Police, 
Fire, Health OAicials 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Large Command Center Displays, Tablet 
Light, Dark, High-Contrast Emergency Mode 
Refresh Interval Real-Time (1–5 seconds during active incidents) 
Screen Purpose 
The Emergency Incident Dashboard is the central operational view for monitoring, 
coordinating, and managing all active emergencies across the city. 
It provides: 
 Real-time incident monitoring  
 GIS operational awareness  
 Resource availability  
 Rescue team tracking  
 Critical infrastructure status  
 Citizen emergency requests  
 Weather intelligence  
 AI-generated operational recommendations  
This dashboard serves as the single source of truth during disaster response. 
Primary UX Goals 
Within 5 seconds, leadership should understand: 
 Current emergency severity  
 Number of active incidents  
 Zones requiring immediate intervention  
 Rescue resource availability  
 Weather threat level  
Within 30 seconds, operators should be able to: 
 Open any incident  
 Dispatch resources  
 Escalate emergencies  
 View aAected assets  
 Coordinate response teams  
Information Hierarchy 
Priority: 
1. Emergency Status Banner  
2. Critical KPI Cards  
3. Live GIS Incident Map  
4. Active Incident Feed  
5. Resource Readiness  
6. Weather Intelligence  
7. AI Operational Recommendations  
8. Communication Panel  
Desktop Layout 
+--------------------------------------------------------------------------------------------------------------------+ 
| Emergency Header | Cyclone Status | Search | Global Filters | Notifications | 
Commander Profile                  
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| Emergency Status Banner                                                                                             
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| KPI Cards                                                                                                           
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| Left Panel               
| 
| Central GIS Command Map                      
| Right Intelligence Panel                
|--------------------------|----------------------------------------------|-----------------------------------------| 
| Active Incidents         
| 
| Live Incident Map                            
| AI Incident Intelligence                
| Incident Queue           
| Team Locations                               
| Decision Support                        
| 
| Incident Filters         
| Escalation Queue         
Recommendations             
| Weather Overlay                              
| Critical Alerts                         
| Operational 
| 
| Asset Overlay                                
| 
+--------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Timeline | Communications | Resources | Shelter Status | Logistics | 
Weather | Analytics            
| 
+--------------------------------------------------------------------------------------------------------------------+ 
Emergency Status Banner 
Always fixed at the top. 
Displays overall city emergency condition. 
Example: 
CYCLONE ALERT LEVEL 
RED 
Cyclone "VAYU" 
Expected Landfall 
6 Hours 
Wind Speed 
145 km/h 
AAected Population 
1.42 Million 
Emergency Operations Center 
ACTIVE 
Banner colors: 
Level 
Normal 
Advisory 
Watch 
Warning 
Color 
Green 
Blue 
Yellow 
Orange 
Emergency Red 
Catastrophic Dark Red 
The banner remains visible on every Emergency Operations screen. 
Executive KPI Cards 
Active Incidents 
128 
Critical Incidents 
19 
Red 
Resources Deployed 
742 
Rescue Teams Active 
84 
Emergency Shelters Open 
63 
Citizens AAected 
148,720 
Roads Blocked 
41 
Infrastructure Failures 
32 
Each KPI supports click-through filtering. 
Live GIS Command Map 
The GIS map is the centerpiece of the dashboard. 
Layers available: 
 Incident locations  
 Rescue teams  
 Ambulances  
 Fire services  
 Police  
 Medical facilities  
 Emergency shelters  
 Flood extent  
 Wind intensity  
 Rainfall  
 Power outages  
 Communication towers  
 Critical infrastructure  
 Evacuation routes  
 Road closures  
 Citizen SOS requests  
 
Incident Visualization 
Each incident is displayed as an icon. 
Examples: 
 Fire 
 Flood 
 Power Failure 
 Fallen Tree 
 Medical Emergency 
�
� Building Collapse 
 Road Block 
⚠ Hazardous Material 
Clicking an incident opens the Incident Detail Drawer. 
 
Incident Detail Drawer 
Displays: 
Incident ID 
 
INC-2048 
Category 
Flooding 
Priority 
Critical 
Zone 
Zone 4 
Ward 
18 
Reported 
12 Minutes Ago 
Reporter 
Citizen SOS 
Current Status 
Resources Dispatched 
Quick actions: 
 Open Incident  
 Dispatch Team  
 Escalate  
 View Timeline  
 Open Camera Feed  
Incident Queue 
Left-side operational queue. 
Columns: 
Incident 
Flood 
Tree Fall 
Priority Zone Age Status 
Critical Zone 4 12 min Active 
High 
Zone 2 6 min Assigned 
Power Failure Medium Zone 6 4 min Pending 
Sorting: 
 Priority  
 Age  
 Zone  
 Category  
 Escalation Level  
Incident Severity Matrix 
Severity levels: 
Level Description 
Level 1 Informational 
Level 2 Minor 
Level Description 
Level 3 Moderate 
Level 4 Major 
Level 5 Critical 
Color-coded throughout the system. 
Weather Intelligence Panel 
Displays: 
Current: 
 Wind Speed  
 Rainfall  
 Pressure  
 Temperature  
 Humidity  
 Storm Movement  
 Lightning Risk  
 Flood Risk  
Forecast: 
 Next 1 hour  
 Next 3 hours  
 Next 6 hours  
 Next 24 hours  
Interactive radar animation available. 
Critical Infrastructure Status 
Real-time status of: 
 Hospitals  
 Shelters  
 Water Pumping Stations  
 Power Substations  
 Communication Towers  
 Emergency Control Centers  
 Bridges  
 Major Roads  
Status: 
Green 
Operational 
Yellow 
Degraded 
Red 
OAline 
Gray 
Unknown 
Resource Readiness 
Displays availability of: 
 Fire Engines  
 Ambulances  
 Police Vehicles  
 Boats  
 Drones  
 Excavators  
 Medical Teams  
 Utility Crews  
 Volunteers  
Each resource shows: 
 Available  
 Assigned  
 En Route  
 Busy  
 Maintenance  
Rescue Team Overview 
Each rescue team card includes: 
Team 
RT-14 
Current Mission 
Flood Rescue 
Personnel 
8 
Distance 
2.8 km 
ETA 
6 Minutes 
Status 
En Route 
Live GPS updates every few seconds. 
AI Operational Intelligence 
Persistent right-side panel. 
Example: 
Operational Insight 
Floodwater is expected to reach Ward 18 within 47 minutes. 
Recommend: 
Deploy two additional rescue boats. 
Open Shelter S-12. 
Pre-position medical team near Highway Junction. 
Estimated response improvement 
23% 
Confidence 
96% 
Critical Alerts 
Examples: 
 Hospital generator failure  
 Shelter reaching 95% capacity  
 Bridge closure  
 Communication tower oAline  
 Road inaccessible  
 High-priority citizen SOS unanswered  
 Rescue team delayed  
Critical alerts remain pinned until acknowledged. 
Operational Timeline 
Bottom panel. 
Chronological event log. 
Example: 
09:12 
Cyclone upgraded to RED alert 
↓ 
09:18 
Flood Incident INC-2048 reported 
↓ 
09:20 
Boat Team RT-14 dispatched 
↓ 
09:27 
Road closure confirmed 
↓ 
09:31 
Shelter S-12 activated 
Supports filtering by: 
 Incident  
 Zone  
 Resource  
 Time  
Communication Panel 
Integrated communication center. 
Channels: 
 Emergency Operations Center  
 Police  
 Fire  
 Medical  
 Electricity  
 Water Department  
 Public Works  
 Volunteers  
Supports: 
 Text messaging  
 Voice dispatch  
 Video conference  
 Broadcast announcements  
Notifications 
Real-time notifications include: 
 New incident reported  
 Incident escalated  
 Resource unavailable  
 Team arrived  
 Team delayed  
 Shelter full  
 Weather escalation  
 AI recommendation issued  
Loading State 
Skeleton loaders for: 
 KPI cards  
 GIS map  
 Incident list  
 Resource cards  
 Weather panel  
Empty State 
No active incidents. 
City operating under NORMAL conditions. 
System continues monitoring. 
[View Historical Incidents] 
Error State 
Unable to retrieve live emergency data. 
Retry 
Switch to Cached Operational View 
Contact System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 High-contrast emergency mode  
 Screen-reader summaries  
 Keyboard navigation  
 Large typography for command centers  
 Color-independent severity indicators  
Responsive Behavior 
Large Command Center Display 
 Multi-monitor optimized  
 Persistent GIS map  
 Expanded KPIs  
 Continuous operational timeline  
 Auto-refresh enabled  
Desktop 
 Full command dashboard  
 Interactive GIS  
 Multi-panel coordination workspace  
Tablet 
 Simplified dashboard  
 Touch-friendly incident management  
 Swipeable operational panels  
Mobile 
Command summary only: 
 Active incidents  
 Alerts  
 Resource availability  
 AI recommendations  
 Quick escalation actions  
Performance Targets 
Metric 
Target 
Dashboard initial load < 2 seconds 
Live incident refresh 
1–5 seconds 
Metric 
Target 
GIS interaction 
< 300 ms 
Incident drawer opening < 250 ms 
Notification delivery 
WebSocket latency 
< 2 seconds 
< 500 ms 
API Dependencies 
Incident Services 
 Incident Management API  
 Incident Status API  
 Incident Timeline API  
GIS Services 
 Live Incident Map API  
 Route Optimization API  
 Layer Management API  
Weather Services 
 Cyclone Forecast API  
 Rainfall API  
 Flood Prediction API  
 Lightning API  
Resource Services 
 Fleet Tracking API  
 Personnel Tracking API  
 Shelter Status API  
 Asset Status API  
Intelligence Services 
 AI Decision Support API  
 Incident Severity Prediction API  
 Resource Optimization API  
 Risk Assessment API  
Communication Services 
 Notification API  
 Messaging API  
 Voice Dispatch API  
 Video Collaboration API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 WebSocket Gateway  
 Analytics API  
Analytics Events 
Track: 
 Dashboard opened  
 Incident selected  
 GIS layer enabled/disabled  
 Resource dispatched  
 AI recommendation expanded  
 Critical alert acknowledged  
 Weather overlay viewed  
 Communication channel opened  
 Timeline filtered  
 Executive report exported  
Security & Permissions 
Role 
Permission 
Commissioner 
Full command authority across all incidents and 
operational modules 
Disaster Management Head Full operational control, incident escalation, 
resource deployment 
Emergency Operations 
Center Operator 
Zone Supervisor 
Police / Fire / Medical 
Coordinators 
Read-only Executive 
Create, update, assign, and monitor incidents 
Manage incidents and resources within assigned 
jurisdiction 
Access discipline-specific incidents, dispatch 
resources, update operational status 
View dashboards, analytics, and incident 
summaries without operational controls 
All incident updates, dispatch actions, escalation decisions, AI recommendation 
acknowledgements, and communication events must be recorded in an immutable 
audit log. Mission-critical operations should support role-based approvals for high
impact actions (e.g., city-wide evacuation, emergency procurement activation). 
Figma Design Notes 
The Emergency Incident Dashboard is the primary operational cockpit of 
CycloneGuard. The design should prioritize situational awareness, rapid decision
making, and minimal cognitive load during high-pressure disaster events. The GIS 
map should dominate the interface, while KPIs, AI recommendations, weather 
intelligence, and communications remain continuously visible. Every critical 
action—dispatch, escalation, and incident navigation—should require as few 
interactions as possible, enabling commanders to respond decisively even during 
rapidly evolving cyclone conditions. 
SCREEN 28 
Incident Creation & Intelligent Triage 
Screen Metadata 
Property 
Value 
Screen Name Incident Creation & Intelligent Triage 
Module 
Primary Users 
Incident & Emergency Operations 
Emergency Operations Center Operators 
Secondary Users Zone Supervisors, Disaster Head, Call Center Operators 
Priority 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet 
Light, Dark, Emergency High Contrast 
Refresh Interval Real-Time 
Screen Purpose 
This screen provides the complete workflow for receiving, validating, classifying, 
prioritizing, enriching, and assigning emergency incidents. 
Supported incident sources include: 
 Citizen SOS Mobile App  
 Emergency Helpline (112/Control Room)  
 Field OAicer Reports  
 IoT Flood Sensors  
 Rain Gauges  
 Water Level Sensors  
 CCTV AI Detection  
 Drone Surveillance  
 Weather Intelligence  
 Social Media Monitoring (Configured Sources)  
 Manual Incident Entry  
 Third-Party Government Systems  
Every incident receives: 
 Unique Incident ID  
 AI Severity Score  
 SLA  
 Priority  
 Suggested Resources  
 Recommended Response Plan  
Primary UX Goals 
Within 30 seconds, operators should be able to: 
 Register an incident  
 Verify its authenticity  
 Determine severity  
 Assign response teams  
 Notify stakeholders  
Information Hierarchy 
Priority: 
1. Incoming Incident Queue  
2. Incident Source Verification  
3. Incident Details  
4. AI Severity Assessment  
5. Resource Recommendation  
6. Assignment  
7. Notifications  
8. SLA Tracking  
Desktop Layout 
+-------------------------------------------------------------------------------------------------------------------+ 
| 
| Header | Incident Search | Global Filters | Emergency Status | Notifications | Operator 
Profile                  
+-------------------------------------------------------------------------------------------------------------------+ 
| Incoming Incident Queue                                                                                           
| 
+-------------------------------------------------------------------------------------------------------------------+ 
| Left Panel                
| Incident Workspace                     
| AI Decision Support                        
| 
|---------------------------|----------------------------------------|--------------------------------------------| 
| New Reports               
| Pending Validation        
| Escalations               
| SLA Queue                 
| Incident Form                         
| GIS Location                          
| Attachments                           
| Timeline                              
| Severity Prediction                        
| Duplicate Detection                        
| Resource Recommendation                    
| Recommended Actions                        
| 
| 
| 
| 
+-------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Communications | History | Audit | Notes | Notifications | Activity Log                           
| 
+-------------------------------------------------------------------------------------------------------------------+ 
Incoming Incident Queue 
Displays all newly received incidents awaiting triage. 
Columns: 
Incident 
Source 
Time Zone Status 
INC-TMP-1041 Citizen SOS 09:42 Zone 4 Awaiting Validation 
INC-TMP-1042 IoT Sensor 09:43 Zone 2 AI Verified 
Incident 
Source 
Time Zone Status 
INC-TMP-1043 CCTV AI 
09:43 Zone 5 Awaiting Review 
Queue auto-refreshes every few seconds. 
Incident Sources 
Supported source badges: 
Source 
Citizen SOS  
Emergency Call  
Field OAicer  
IoT Sensor  
Drone  
CCTV AI  
Icon 
Weather System 🌪 
Police  
Fire Department  
Hospital  
Each source has configurable trust and confidence levels. 
Incident Creation Form 
Basic Information 
Fields: 
 Incident Title  
 Category  
 Description  
 Reporter  
 Contact Number  
 Alternate Contact  
 Incident Source  
 Incident Time  
Mandatory fields are clearly marked. 
Incident Categories 
Examples: 
 Flooding  
 Cyclone Damage  
 Fallen Trees  
 Road Block  
 Landslide  
 Medical Emergency  
 Fire  
 Building Collapse  
 Power Failure  
 Water Supply Failure  
 Hazardous Material  
 Missing Person  
 Rescue Request  
 Animal Rescue  
 Infrastructure Failure  
Categories are configurable by administrators. 
GIS Location Selection 
Operators can specify location using: 
 Interactive GIS map  
 GPS coordinates  
 Address lookup  
 Landmark search  
 What3Words (optional integration)  
 Dropped map pin  
Map overlays display: 
 Flood zones  
 Cyclone impact projections  
 Evacuation routes  
 Administrative boundaries  
 Nearby critical assets  
Automatic Geocoding 
When an address is entered: 
The system automatically determines: 
 Latitude  
 Longitude  
 Zone  
 Ward  
 Municipality  
 Risk Area  
AI Incident Classification 
After suAicient information is entered: 
Predicted Category 
Urban Flooding 
Confidence 
97% 
Severity 
High 
AAected Population 
~1,800 
Estimated Response Time 
15 Minutes 
Operators may: 
 Accept  
 Modify  
 Override (with justification)  
Duplicate Incident Detection 
Before creating a new incident: 
The AI compares: 
 Location  
 Time  
 Category  
 Reporter  
 Photos  
 Sensor Events  
Example: 
Possible Duplicate 
92% Match 
Existing Incident 
INC-2044 
Distance 
35 meters 
Reported 
4 Minutes Ago 
Actions: 
 Merge  
 Continue as New  
 Link as Related  
Evidence Collection 
Supported attachments: 
 Images  
 Videos  
 Audio  
 PDF Documents  
 Sensor Logs  
 Drone Images  
 CCTV Snapshots  
Automatic metadata captured: 
 GPS  
 Timestamp  
 Device  
 Source  
AI Image Analysis 
Uploaded media is analyzed for: 
 Flood depth  
 Fallen trees  
 Road blockage  
 Building collapse  
 Fire  
 Crowd density  
 Damaged infrastructure  
 Waterlogging  
Example: 
AI Analysis 
Detected 
Road Block 
Confidence 
94% 
Estimated Clearance DiAiculty 
Medium 
Incident Severity Engine 
Severity is calculated using multiple factors: 
 Human life risk  
 Population exposure  
 Infrastructure impact  
 Weather severity  
 Flood depth  
 TraAic disruption  
 Utility failures  
 Critical asset proximity  
Severity Levels 
Level Color Response Target 
1 
2 
3 
4 
5 
Green Monitor 
Blue Standard Response 
Yellow Priority Response 
Orange Major Incident 
Red Critical Emergency 
Dynamic SLA Assignment 
Based on severity: 
Severity Initial Response SLA 
Level 1 60 Minutes 
Level 2 30 Minutes 
Level 3 15 Minutes 
Level 4 10 Minutes 
Level 5 5 Minutes 
SLA countdown begins immediately after incident creation. 
Resource Recommendation Engine 
AI recommends: 
 Fire Units  
 Ambulances  
 Police  
 Boats  
 Medical Teams  
 Utility Crews  
 Volunteers  
 Heavy Machinery  
Example: 
Recommended Response 
2 Rescue Boats 
1 Ambulance 
1 Police Patrol 
Estimated Arrival 
8 Minutes 
Confidence 
95% 
Assignment Panel 
Assign incident to: 
 Zone  
 Supervisor  
 Response Team  
 Department  
 Incident Commander  
Assignment modes: 
 Manual  
 AI Assisted  
 Automatic Rules  
Escalation Rules 
Automatic escalation occurs when: 
 SLA exceeded  
 Severity increases  
 Multiple incidents merge  
 Critical infrastructure aAected  
 Casualties reported  
 Incident spreads geographically  
Escalation notifications are sent to higher authorities. 
Notification Workflow 
Stakeholders notified may include: 
 Disaster Head  
 Zone Supervisor  
 Police Control Room  
 Fire Department  
 Medical Services  
 Utility Departments  
 Public Information OAicer  
Delivery channels: 
 Push Notification  
 SMS  
 Email  
 Secure In-App Alerts  
Communication Panel 
Integrated communications include: 
 Internal incident chat  
 Voice call initiation  
 Video conferencing  
 Broadcast messages  
 Inter-agency coordination  
All communications are linked to the incident record. 
Incident Timeline 
Automatically records: 
09:42 Incident Report Received 
↓ 
09:43 AI Classified 
↓ 
09:44 Operator Validated 
↓ 
09:45 Assigned to RT-14 
↓ 
09:46 Notification Sent 
↓ 
09:48 Team En Route 
Timeline is immutable and fully auditable. 
AI Decision Support Panel 
Persistent right-side panel. 
Example: 
Operational Recommendation 
Heavy rainfall expected to intensify within 20 minutes. 
Escalate incident to Level 4. 
Deploy one additional rescue boat. 
Notify nearby shelter managers. 
Confidence 
96% 
Loading State 
Skeleton loaders for: 
 Incident queue  
 GIS map  
 Forms  
 AI recommendations  
 Timeline  
Empty State 
No pending incidents. 
All incoming reports have been processed. 
System continues monitoring all connected sources. 
Error State 
Unable to create incident. 
Retry 
Save as Draft 
Notify System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Full keyboard navigation  
 Screen-reader support  
 High-contrast emergency theme  
 Large clickable controls  
 Color-independent severity indicators  
 Speech-to-text for incident descriptions  
Responsive Behavior 
Desktop 
 Full triage workspace  
 Simultaneous GIS, forms, AI panel, and communications  
Tablet 
 Optimized split-view  
 Touch-friendly incident creation  
 Collapsible intelligence panel  
Mobile 
Limited emergency reporting interface for authorized personnel: 
 Create incident  
 Upload media  
 Assign teams  
 Update status  
Advanced triage remains desktop/tablet focused. 
Performance Targets 
Metric 
Form load 
AI classification 
Target 
< 1 second 
< 2 seconds 
Duplicate detection < 2 seconds 
GIS rendering 
< 1 second 
Assignment action < 500 ms 
Notification dispatch < 2 seconds 
API Dependencies 
Incident Services 
 Incident Creation API  
 Incident Validation API  
 Incident Assignment API  
 Incident Timeline API  
GIS Services 
 Geocoding API  
 Reverse Geocoding API  
 Administrative Boundary API  
 Risk Zone API  
Intelligence Services 
 Incident Classification API  
 Duplicate Detection API  
 Severity Scoring API  
 Resource Recommendation API  
 Image Analysis API  
Communication Services 
 Notification API  
 Messaging API  
 Voice Dispatch API  
 SMS Gateway  
 Email Service  
External Integrations 
 IoT Sensor Gateway  
 CCTV Analytics Platform  
 Drone Operations Platform  
 Weather Intelligence API  
 Emergency Helpline Integration  
Infrastructure 
 Authentication API  
 Audit Logging API  
 WebSocket Gateway  
 Analytics Service  
Analytics Events 
Track: 
 Incident created  
 Source validated  
 AI classification accepted  
 Severity overridden  
 Duplicate merged  
 Assignment completed  
 SLA timer started  
 Escalation triggered  
 Notification delivered  
 Incident draft saved  
Security & Permissions 
Role 
Emergency Operations 
Center Operator 
Zone Supervisor 
Permission 
Create, validate, classify, and assign incidents 
Review, update, and reassign incidents within assigned 
zones 
Disaster Management Head Override severity, approve major escalations, assign 
incident commanders 
Commissioner 
Call Center Operator 
View all incidents, authorize city-wide emergency 
actions, monitor operational performance 
Register citizen reports and attach supporting 
information; no dispatch authority 
All incident creation, severity overrides, AI recommendation rejections, assignments, 
escalations, and communications must be immutably logged with timestamps, user 
identity, and justification where required. 
Figma Design Notes 
The Incident Creation & Intelligent Triage screen is the operational gateway to the 
emergency response lifecycle. The interface should guide operators through a 
structured yet rapid workflow, minimizing manual eAort through AI-assisted 
classification, duplicate detection, geolocation, and resource recommendations. 
Critical information should be surfaced progressively, ensuring operators can process 
high volumes of incoming reports during major cyclone events without losing situational 
awareness. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 29 
Emergency Operations Center (EOC) 
Screen Metadata 
Property 
Value 
Screen Name Emergency Operations Center 
Module 
Incident & Emergency Operations 
Primary Users Disaster Management Head 
Secondary 
Users 
Priority 
Commissioner, Incident Commander, Police, Fire, Health, Utility 
Departments 
Mission Critical 
Authentication Required 
Devices 
Theme 
Command Center Video Wall, Desktop, Tablet 
Dark Operations (Primary), Light, High-Contrast 
Refresh Interval Real-Time (≤1 second during active operations) 
Screen Purpose 
The Emergency Operations Center provides a single operational command interface 
for coordinating all emergency activities during cyclone preparedness, landfall, 
response, and recovery. 
The platform must enable: 
 Unified command  
 Multi-agency coordination  
 Incident Command System (ICS)  
 Resource orchestration  
 Operational planning  
 Executive decision support  
 Situation awareness  
 Live communications  
 Operational analytics  
This becomes the primary workspace used throughout the disaster. 
Primary UX Goals 
Within 5 seconds, commanders should understand: 
 Overall city operational status  
 Active critical incidents  
 Available resources  
 Weather evolution  
 Major operational risks  
Within 30 seconds, they should be able to: 
 Issue operational orders  
 Reallocate resources  
 Open Situation Reports  
 Activate Incident Action Plans  
 Escalate operations  
Information Hierarchy 
Priority: 
1. City Operational Status  
2. Unified Command  
3. Incident Command Structure  
4. GIS Operations  
5. Resource Coordination  
6. Operational Planning  
7. Situation Reports  
8. AI Decision Support  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Operational Period | Search | Notifications | Commander Profile                                            
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| City Emergency Status Banner                                                                                          
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| KPI Cards                                                                                                             
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Operations Panel | Central GIS Command Map | Right Intelligence Panel                                            
| 
|-----------------------|-------------------------|----------------------------------------------------------------------| 
| Active Incidents      | Live Assets             
| Operational Tasks     | Rescue Teams            
| 
| ICS Structure         
| Weather Layers          
| AI Operational Advisor                                                
| Executive Recommendations                                              
| Critical Risks                                                         
| Operational Orders    | Evacuation Routes       | Predictive Intelligence                                                
| 
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: SITREP | Communications | Decision Log | Resources | Logistics | 
Analytics | Timeline               
| 
+----------------------------------------------------------------------------------------------------------------------+ 
City Emergency Status Banner 
Always visible. 
Displays: 
CITY STATUS 
CYCLONE RESPONSE 
LEVEL 5 
Emergency Operations Center 
ACTIVE 
Operational Period 
08:00–20:00 
Incident Commander 
Dr. S. Kumar 
Status colors: 
Green 
Normal Operations 
Blue 
Monitoring 
Yellow 
Preparedness 
Orange 
Response 
Red 
Full Emergency 
Dark Red 
Catastrophic 
Incident Command System (ICS) 
The EOC follows the National Incident Management System hierarchy. 
Commissioner 
↓ 
Emergency Operations Director 
↓ 
Incident Commander 
↓ 
Operations Section 
Planning Section 
Logistics Section 
Finance Section 
↓ 
Branch Directors 
↓ 
Division Supervisors 
↓ 
Field Teams 
Each node shows: 
 Name  
 Status  
 Active workload  
 Current assignments  
 Contact availability  
Unified Command Panel 
Displays participating agencies. 
Example: 
Agency 
Status 
Disaster Management Active 
Police 
Active 
Agency 
Status 
Fire & Rescue 
Active 
Health Department Active 
Electricity Board 
Water Supply 
Active 
Active 
Municipal Engineering Active 
NDRF 
Deployed 
Selecting an agency opens: 
 Personnel  
 Resources  
 Active missions  
 Communications  
Operational KPI Cards 
Active Incidents 
128 
Critical Incidents 
19 
Active Responders 
742 
Resources Available 
312 
Shelters Operational 
63 
Evacuation Progress 
71% 
Roads Closed 
41 
Citizens in Shelters 
38,240 
Operational Period Management 
Supports multiple operational periods. 
Displays: 
 Current period  
 Start time  
 End time  
 Objectives  
 Assigned commander  
Example: 
Operational Period 
08:00–20:00 
Objectives 
Complete coastal evacuation 
Restore electricity 
Maintain hospital operations 
Historical periods remain accessible. 
Incident Action Plan (IAP) 
Each operational period contains an Incident Action Plan. 
Sections: 
Mission Objectives 
Operational Priorities 
Resource Allocation 
Safety Messages 
Weather Forecast 
Medical Plan 
Communication Plan 
Contingency Actions 
Version history maintained. 
Situation Report (SITREP) 
Real-time summary. 
Sections: 
Executive Summary 
Current Situation 
Weather 
Operations 
Infrastructure 
Health 
Shelters 
Logistics 
Forecast 
Recommendations 
Each SITREP can be: 
 Drafted collaboratively  
 Approved  
 Published  
 Archived  
GIS Command Center 
The largest visual element. 
Supports layers: 
Incidents 
Flood Depth 
Wind 
Rainfall 
Lightning 
Evacuation 
Shelters 
Hospitals 
Road Status 
TraAic 
Utilities 
Communication Towers 
Critical Assets 
Rescue Teams 
Drones 
Live Cameras 
Users may save custom map configurations. 
Resource Coordination 
Displays all deployable assets. 
Categories: 
Vehicles 
Boats 
Helicopters 
Medical Teams 
Police Units 
Fire Units 
Generators 
Excavators 
Water Pumps 
Volunteers 
Status: 
Available 
Assigned 
En Route 
Busy 
Maintenance 
OAline 
Task Management 
Every operational order becomes a tracked task. 
Columns: 
Task 
Owner 
Status 
ETA 
Evacuate Ward 18 Zone 4 
Deploy Pumps 
Utilities 
In Progress 32 min 
Assigned 18 min 
Open Shelter S-15 Relief Team Completed — 
Task states: 
Pending 
Assigned 
Accepted 
In Progress 
Completed 
Blocked 
Cancelled 
Decision Log 
Every strategic decision is recorded. 
Example: 
09:12 
Activate Emergency Operations Center 
↓ 
09:35 
Close Coastal Highway 
↓ 
09:47 
Deploy NDRF Team 
↓ 
10:05 
Issue Public Evacuation Order 
Each decision records: 
 Decision maker  
 Justification  
 Supporting data  
 Outcome  
Immutable after approval. 
Executive Briefing Mode 
One-click presentation mode. 
Shows: 
 KPIs  
 GIS overview  
 Major incidents  
 Operational objectives  
 AI recommendations  
 Weather  
 Resource readiness  
Optimized for: 
 Large displays  
 Ministerial briefings  
 Press coordination  
AI Operational Advisor 
Persistent intelligence panel. 
Example: 
Operational Recommendation 
Cyclone landfall expected 2 hours earlier than forecast. 
Recommended Actions 
Expand evacuation radius by 5 km. 
Activate three additional shelters. 
Deploy backup generators to hospitals. 
Confidence 
97% 
Predictive Operational Intelligence 
AI predicts: 
 Shelter overflow  
 Road congestion  
 Flood spread  
 Power failures  
 Resource shortages  
 Communication failures  
 Medical demand  
Forecast horizon: 
 30 minutes  
 1 hour  
 3 hours  
 6 hours  
 24 hours  
Communications Hub 
Integrated communications. 
Supports: 
 Secure Chat  
 Voice Dispatch  
 Video Conference  
 Radio Gateway  
 SMS Broadcast  
 Public Information Coordination  
Channels: 
Police 
Fire 
Health 
Utilities 
Field Teams 
Government 
Volunteers 
Notifications 
Examples: 
 Incident escalated  
 Resource exhausted  
 Weather warning upgraded  
 Shelter full  
 Hospital oAline  
 Critical infrastructure failure  
 AI alert generated  
Notifications support: 
 Acknowledge  
 Escalate  
 Assign  
 Snooze  
Operational Timeline 
Chronological city-wide log. 
08:00 
Operational Period Started 
↓ 
08:45 
Cyclone upgraded to Level 5 
↓ 
09:15 
Coastal evacuation initiated 
↓ 
09:50 
Hospital backup power activated 
↓ 
10:20 
NDRF deployed 
Timeline filters: 
 Agency  
 Zone  
 Incident  
 Resource  
 Time  
Loading State 
Skeleton loaders for: 
 KPI cards  
 GIS map  
 SITREP  
 Communications  
 Operational timeline  
Empty State 
No active emergency operations. 
Emergency Operations Center is on standby. 
Monitoring continues. 
[View Preparedness Dashboard] 
Error State 
Unable to synchronize Emergency Operations Center. 
Retry 
Open Cached Operational View 
Notify System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard shortcuts for command operations  
 Screen-reader summaries  
 High-contrast operational theme  
 Large-font command center mode  
 Color-independent operational indicators  
Responsive Behavior 
Command Center Display 
 Multi-screen optimized  
 Persistent GIS visualization  
 Auto-refresh dashboards  
 Executive briefing mode  
 Always-on operational timeline  
Desktop 
 Full command workspace  
 Multi-pane coordination  
 Advanced planning tools  
Tablet 
 Optimized operational controls  
 Touch-friendly map interactions  
 Collapsible intelligence panels  
Mobile 
Executive monitoring mode only: 
 Incident summaries  
 Critical alerts  
 Operational objectives  
 Approvals  
 Communications  
Complex command operations remain desktop/command-center only. 
Performance Targets 
Metric 
Target 
Initial workspace load 
GIS refresh 
Task update latency 
SITREP publish 
<2 seconds 
≤1 second 
<500 ms 
<2 seconds 
Operational order dispatch <1 second 
Notification delivery 
<2 seconds 
API Dependencies 
Emergency Operations 
 EOC Dashboard API  
 Operational Period API  
 Incident Action Plan API  
 Situation Report API  
 Decision Log API  
Incident Services 
 Incident Management API  
 Assignment API  
 Timeline API  
GIS Services 
 Live Operations Map API  
 Layer Management API  
 Route Optimization API  
Resource Services 
 Resource Tracking API  
 Fleet Management API  
 Personnel API  
 Shelter API  
Intelligence Services 
 AI Operations Advisor API  
 Operational Forecast API  
 Risk Assessment API  
 Predictive Analytics API  
Communications 
 Messaging API  
 Voice Dispatch API  
 Video Collaboration API  
 Broadcast API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 WebSocket Gateway  
 Analytics API  
Analytics Events 
Track: 
 EOC opened  
 Operational period changed  
 SITREP published  
 IAP updated  
 Operational order issued  
 Decision recorded  
 AI recommendation accepted  
 GIS layer modified  
 Executive briefing launched  
 Communication session initiated  
Security & Permissions 
Role 
Commissioner 
Disaster Management Head 
Incident Commander 
Section Chiefs (Operations, 
Planning, Logistics, Finance) 
Agency Coordinators 
Executive Observer 
Permission 
Full city-wide command authority, strategic 
approvals, executive reporting 
Full operational command, IAP approval, 
resource coordination 
Manage active incidents, issue operational 
orders, oversee field execution 
Control assigned functional areas and update 
operational status 
Update agency resources, tasks, and 
communications within delegated scope 
Read-only access to dashboards, SITREPs, and 
operational analytics 
Critical actions such as city-wide evacuation orders, Incident Action Plan publication, 
operational period closure, and unified command decisions require configurable multi
level authorization. All commands, approvals, and operational communications must 
be permanently logged with timestamps and digital signatures where applicable. 
Figma Design Notes 
The Emergency Operations Center is the highest-priority interface in the 
CycloneGuard platform. It should communicate authority, clarity, and confidence 
under extreme operational pressure. The GIS command map should dominate the 
workspace, while the Incident Command System, Situation Reports, AI Operational 
Advisor, and communications remain continuously visible. Information density should 
be high but organized through clear visual hierarchy, ensuring commanders can make 
informed decisions within seconds during rapidly evolving cyclone emergencies. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 30 
Resource & Personnel Dispatch Management 
Screen Metadata 
Property 
Value 
Screen Name Resource & Personnel Dispatch 
Module 
Primary Users 
Incident & Emergency Operations 
Dispatch OAicers, Emergency Operations Center Operators 
Secondary Users Incident Commander, Zone Supervisors, Agency Coordinators 
Priority 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet, Command Center Display 
Dark Operations, Light, High-Contrast 
Refresh Interval Live (1–3 seconds) 
Screen Purpose 
The Resource & Personnel Dispatch module coordinates the deployment of emergency 
resources across the city. 
Supported dispatch entities: 
 Rescue Teams  
 Police Units  
 Fire Engines  
 Ambulances  
 NDRF Teams  
 Medical Response Units  
 Utility Crews  
 Volunteers  
 Heavy Equipment  
 Boats  
 Drones  
 Relief Vehicles  
The module continuously optimizes deployment based on: 
 Distance  
 TraAic  
 Flood conditions  
 Resource availability  
 Team capability  
 Fatigue  
 Incident priority  
Primary UX Goals 
Within 10 seconds, dispatch oAicers should: 
 View available resources  
 Identify nearest response teams  
 Dispatch resources  
 Monitor ETA  
 Detect resource shortages  
Within 30 seconds, commanders should: 
 Reallocate teams  
 Override AI recommendations  
 Launch multi-agency deployments  
 View mission progress  
Information Hierarchy 
Priority: 
1. Dispatch Queue  
2. Available Resources  
3. GIS Live Tracking  
4. Route Optimization  
5. Personnel Status  
6. Mission Timeline  
7. AI Dispatch Recommendations  
8. Safety Alerts  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Incident Search | Dispatch Filters | Emergency Status | Notifications | 
Dispatcher Profile                
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Dispatch KPI Cards                                                                                                   
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Dispatch Panel | Central GIS Live Operations Map | Right Intelligence Panel                                     
| 
|---------------------|---------------------------------|---------------------------------------------------------------| 
| Dispatch Queue      | Live Fleet Tracking             
| Available Resources | Active Routes                   
| Crew Availability   | Incident Locations              
| 
| Mission Queue       | Weather Layers                  
| AI Dispatch Advisor                                           
| ETA Predictions                                               
| Resource Optimization                                         
| Safety Alerts                                                 
| 
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Mission Timeline | Communications | Personnel | Fleet | Analytics | Audit                            
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Dispatch KPI Cards 
Available Responders 
742 
Active Missions 
126 
Resources En Route 
184 
Average Response Time 
8.4 Minutes 
Vehicles Available 
146 
Crews on Standby 
53 
Delayed Missions 
9 
Red 
Fuel Readiness 
97% 
Green 
Dispatch Queue 
Displays incidents awaiting resource allocation. 
Incident 
Flood - Zone 4 
Priority Required Resources SLA Remaining 
Critical 2 Boats, 1 Medical Team 3 min 
Building Collapse High 
Road Block 
Fire, Ambulance 
Medium Excavator 
Queue automatically sorts by: 
 Priority  
 Remaining SLA  
 Threat to life  
 Incident age  
8 min 
18 min 
Available Resources Panel 
Grouped by agency. 
Example: 
Fire Department 
Available: 
18 
Busy: 
7 
Maintenance: 
2 
Police 
Available: 
64 
Busy: 
21 
Medical 
Available: 
31 
Busy: 
8 
Utility 
Available: 
52 
Busy: 
11 
Each resource card displays: 
 Crew members  
 Equipment  
 Current location  
 Fuel/Battery  
 Estimated readiness  
Resource Detail Card 
Unit 
RT-14 
Type 
Flood Rescue Boat 
Crew 
8 
Fuel 
82% 
Equipment Ready 
YES 
Current Location 
Zone 3 Depot 
Estimated Deployment Time 
2 Minutes 
Personnel Management 
Each responder profile displays: 
 Name  
 Role  
 Agency  
 Certifications  
 Current assignment  
 Shift  
 Hours worked  
 Fatigue indicator  
 Medical restrictions  
Fatigue Monitoring 
AI evaluates: 
 Shift duration  
 Consecutive deployments  
 Rest periods  
 High-risk exposure  
Status: 
Green 
Ready 
Yellow 
Monitor 
Orange 
Relief Recommended 
Red 
Immediate Rotation Required 
Intelligent Dispatch Recommendation 
AI automatically evaluates: 
 Incident severity  
 Skill requirements  
 Distance  
 Route safety  
 Resource availability  
 Team specialization  
 Historical performance  
Example: 
Recommended Team 
RT-14 
Reason 
Nearest qualified flood rescue team 
ETA 
6 Minutes 
Confidence 
97% 
Dispatcher may: 
 Accept  
 Override  
 Compare Alternatives  
Multi-Resource Dispatch 
Supports simultaneous deployment. 
Example: 
Incident 
Flood Zone 4 
Dispatch 
✓ 2 Rescue Boats 
✓ 1 Ambulance 
✓ 1 Police Unit 
✓ Utility Crew 
✓ Drone 
Dispatch executes as a single coordinated mission. 
GIS Live Operations Map 
Displays: 
 Live vehicle positions  
 Rescue boats  
 Ambulances  
 Fire trucks  
 Police vehicles  
 Drones  
 Utility crews  
 Incident locations  
 Road closures  
 Flood depth  
 Weather overlays  
 Evacuation routes  
Icons update every few seconds. 
Route Optimization Engine 
Considers: 
 Live traAic  
 Flooded roads  
 Fallen trees  
 Bridge closures  
 Road restrictions  
 Vehicle type  
 Water depth  
 Weather forecasts  
Displays: 
Primary Route 
Alternative Route 
Emergency Route 
ETA Prediction 
Example: 
Current ETA 
6 Minutes 
Confidence 
94% 
Delay Risk 
Low 
ETA recalculates continuously. 
Dynamic Re-routing 
Automatic rerouting occurs when: 
 Road becomes blocked  
 Flood depth increases  
 TraAic congestion  
 New hazard detected  
 Bridge closure  
Dispatcher receives recommendation before execution. 
Mission Lifecycle 
Dispatch Created 
↓ 
Crew Accepted 
↓ 
Vehicle Departed 
↓ 
En Route 
↓ 
Arrived 
↓ 
Mission Active 
↓ 
Mission Completed 
↓ 
Return to Base 
↓ 
Available 
Every transition is timestamped. 
Mission Timeline 
Example 
09:42 
Mission Assigned 
↓ 
09:43 
Crew Accepted 
↓ 
09:46 
Vehicle Departed 
↓ 
09:53 
Arrived 
↓ 
09:55 
Rescue Started 
Crew Check-in 
When arriving: 
Crew taps: 
Arrived 
System records: 
 GPS  
 Timestamp  
 Incident  
 Vehicle  
 Commander  
Crew Safety Monitoring 
Continuously monitors: 
 GPS position  
 SOS activation  
 Device battery  
 Communication status  
 Environmental risk  
 Inactivity  
Emergency alerts: 
 Lost communication  
 SOS activated  
 Crew stopped unexpectedly  
 High-risk zone entry  
Equipment Assignment 
Each mission includes: 
 Radios  
 Medical Kits  
 Chainsaws  
 Pumps  
 Life Jackets  
 Rescue Rope  
 Generators  
 Satellite Phones  
Missing equipment generates dispatch warnings. 
Shift & Crew Scheduling 
Displays: 
 Current shift  
 Upcoming shift  
 Overtime  
 Relief schedule  
 Standby personnel  
Automatic shift balancing supported. 
AI Dispatch Advisor 
Persistent intelligence panel. 
Example: 
Dispatch Insight 
Boat Team RT-14 can respond 4 minutes faster than RT-09. 
Suggested Action 
Dispatch RT-14. 
Expected SLA improvement 
31% 
Confidence 
96% 
Operational Alerts 
Examples: 
 Vehicle breakdown  
 Crew fatigue exceeded  
 Route blocked  
 Equipment unavailable  
 Resource shortage  
 Fuel below threshold  
 Communication lost  
Critical alerts remain pinned. 
Communications Panel 
Integrated with: 
 Voice Dispatch  
 Secure Messaging  
 Video Call  
 Push-to-Talk  
 Radio Gateway  
Supports communication with: 
 Individual crews  
 Agencies  
 Incident commanders  
 Entire mission groups  
Loading State 
Skeleton loaders for: 
 Dispatch queue  
 Fleet map  
 Personnel cards  
 Timeline  
 AI panel  
Empty State 
No pending dispatch requests. 
All incidents currently have assigned resources. 
Resources remain on standby. 
Error State 
Unable to complete dispatch. 
Retry 
Save Assignment 
Escalate to Dispatcher Supervisor 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard dispatch shortcuts  
 Screen-reader compatible mission tables  
 High-contrast operational mode  
 Large touch controls  
 Voice-assisted dispatch commands  
Responsive Behavior 
Command Center 
 Multi-monitor fleet visualization  
 Persistent GIS  
 Large dispatch queue  
 Always-visible AI advisor  
Desktop 
 Full dispatch workspace  
 Multi-panel coordination  
Tablet 
 Optimized touch dispatch  
 Simplified routing interface  
Mobile 
Dispatch supervisor mode: 
 Accept assignments  
 View crews  
 Track vehicles  
 Update mission status  
Complex dispatch planning remains desktop-focused. 
Performance Targets 
Metric 
Target 
Dispatch workspace load <2 seconds 
GPS refresh 
Route calculation 
1–3 seconds 
<1 second 
Dispatch confirmation <500 ms 
ETA recalculation 
<1 second 
Vehicle tracking latency <500 ms 
API Dependencies 
Dispatch Services 
 Dispatch Management API  
 Mission Assignment API  
 Crew Scheduling API  
 Personnel Availability API  
Fleet Services 
 Vehicle Tracking API  
 Fleet Status API  
 Fuel Monitoring API  
 Equipment Inventory API  
GIS Services 
 Live Tracking API  
 Route Optimization API  
 TraAic API  
 Hazard Overlay API  
Intelligence Services 
 Dispatch Recommendation API  
 ETA Prediction API  
 Fatigue Assessment API  
 Route Risk Analysis API  
Communications 
 Push-to-Talk API  
 Messaging API  
 Voice Dispatch API  
 Notification API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 WebSocket Gateway  
 Analytics API  
Analytics Events 
Track: 
 Dispatch created  
 AI recommendation accepted  
 Resource reassigned  
 Crew checked in  
 Route changed  
 ETA updated  
 Mission completed  
 Crew SOS activated  
 Equipment assignment modified  
 Dispatch cancelled  
Security & Permissions 
Role 
Permission 
Dispatch OAicer 
Incident Commander 
Disaster Management 
Head 
Agency Coordinator 
Field Team Leader 
Create, modify, and manage dispatches 
Approve multi-agency deployments and redirect missions 
Override dispatch priorities and authorize cross-zone 
deployments 
Manage agency personnel, fleet, and equipment 
assignments 
Accept missions, update mission status, report crew 
conditions 
Mission assignments, route overrides, cross-jurisdiction deployments, and emergency 
recalls require comprehensive audit logging. Access to responder personal information 
and live GPS locations must be governed by role-based permissions and encrypted in 
transit and at rest. 
Figma Design Notes 
The Resource & Personnel Dispatch Management screen should emphasize speed, 
operational clarity, and trust. Dispatchers should be able to evaluate AI 
recommendations, verify resource readiness, and deploy personnel with minimal 
clicks. The GIS map and dispatch queue should dominate the workspace, while crew 
safety, communications, and mission progress remain continuously visible. The design 
should support sustained operations during prolonged cyclone response with clear 
visual prioritization, minimal cognitive load, and immediate feedback for every dispatch 
action. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 31 
Rescue Team Live Tracking & Field Operations 
Screen Metadata 
Property 
Value 
Screen Name Rescue Team Live Tracking & Field Operations 
Property 
Value 
Module 
Primary Users 
Incident & Emergency Operations 
Incident Commander, Dispatch OAicers 
Secondary Users Disaster Head, Zone Supervisors, Agency Coordinators 
Priority 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop, Command Center Display, Tablet 
Dark Operations (Default), Light, High-Contrast 
Refresh Interval Live (1–3 seconds) 
Screen Purpose 
This module provides continuous operational visibility into every deployed rescue 
team and mission. 
The platform enables: 
 Live responder GPS tracking  
 Team safety monitoring  
 Mission execution tracking  
 Environmental hazard awareness  
 Communications  
 AI operational guidance  
 Geofencing  
 Mission completion management  
 Evidence collection  
Primary UX Goals 
Within 5 seconds, commanders should know: 
 Team locations  
 Mission progress  
 Safety status  
 Hazard exposure  
 Teams requiring assistance  
Within 30 seconds, operators should: 
 Contact teams  
 Redirect missions  
 Deploy reinforcements  
 Respond to SOS alerts  
 Monitor mission KPIs  
Information Hierarchy 
Priority: 
1. Live Team Status  
2. GIS Tactical Map  
3. Mission Progress  
4. Safety Monitoring  
5. Communications  
6. AI Tactical Advisor  
7. Hazard Alerts  
8. Mission Timeline  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Mission Search | Filters | Emergency Status | Notifications | Commander 
Profile                           
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Tactical Operations KPI Cards                                                                                         
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Team Panel | Central Tactical GIS Map | Right Intelligence Panel                                                
| 
|-----------------|---------------------------|-------------------------------------------------------------------------| 
| Active Teams    | Live GPS Tracking         
| AI Tactical Advisor                                                      
| Mission Queue   | Hazard Layers             
| Team Status     | Drone Overlay             
| Safety Alerts   | Incident Overlay          
| 
| Team Health                                                              
| Operational Alerts                                                       
| Recommended Actions                                                      
| 
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Timeline | Communications | Telemetry | Evidence | Analytics | Audit                                 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Tactical KPI Cards 
Active Rescue Teams 
84 
Teams On Mission 
71 
Teams Returning 
9 
SOS Alerts 
2 
Critical (Red) 
Personnel Deployed 
742 
Average Mission Duration 
47 min 
Communication Status 
99.4% 
Green 
Team Safety Score 
96% 
Live Rescue Team Panel 
Displays every deployed team. 
Columns: 
Team Mission 
Status ETA Safety 
RT-14 Flood Rescue Active — Safe 
RT-09 Evacuation En Route 4 min Safe 
RT-22 Medical 
Sorting: 
 Priority  
 Safety  
 Incident  
Active 
— Warning 
 Zone  
 Mission Duration  
Team Detail Card 
Selecting a team opens: 
Team 
RT-14 
Agency 
NDRF 
Mission 
Flood Rescue 
Commander 
A. Kumar 
Personnel 
8 
Vehicle 
Boat-04 
Fuel 
82% 
Status 
Active 
Personnel Roster 
Displays each responder. 
Information: 
 Name  
 Rank  
 Role  
 Certification  
 Medical Qualification  
 Shift Status  
 Current Assignment  
 Device Status  
Live GPS Tracking 
Every responder and vehicle appears on the GIS map. 
Tracking interval: 
1–3 seconds. 
Supported objects: 
 Personnel  
 Boats  
 Fire Engines  
 Ambulances  
 Police Units  
 Drones  
 Utility Vehicles  
Trail history available for replay. 
GIS Tactical Layers 
Available overlays: 
 Flood depth  
 Wind speed  
 Rainfall intensity  
 Hazard zones  
 Road closures  
 Evacuation routes  
 Safe staging areas  
 Hospitals  
 Shelters  
 Incident boundaries  
 Utility outages  
 Communication coverage  
Operators can save custom tactical views. 
Mission Progress 
Each mission displays: 
Mission Progress 
68% 
Current Phase 
Civilian Evacuation 
Estimated Completion 
22 Minutes 
Mission stages: 
Assigned 
↓ 
En Route 
↓ 
Arrival 
↓ 
Assessment 
↓ 
Operations 
↓ 
Extraction 
↓ 
Return 
↓ 
Completed 
Geofencing 
Automatic alerts generated when: 
 Team exits assigned operational area  
 Team enters restricted zone  
 Team approaches high-risk flood depth  
 Team enters landslide-prone region  
 Team crosses jurisdiction boundary  
Configurable geofence rules by mission type. 
Team Health & Safety Monitoring 
The system continuously evaluates: 
 Mission duration  
 Heat exposure  
 Shift hours  
 Fatigue  
 Device battery  
 Connectivity  
 Environmental hazards  
Safety indicators: 
Level Status 
Green Normal 
Yellow Monitor 
Orange Elevated Risk 
Red Immediate Intervention 
Wearable Telemetry (Optional Integration) 
Supported data: 
 Heart rate  
 Body temperature  
 Motion status  
 Fall detection  
 Manual distress signal  
Example: 
Responder 
R-248 
Heart Rate 
88 BPM 
Body Temp 
36.9°C 
Status 
Normal 
Emergency SOS 
Every responder has an SOS capability. 
When activated: 
Immediate actions: 
 High-priority alert  
 GPS lock  
 Nearby teams notified  
 Incident Commander notified  
 Audio channel opened  
 Mission highlighted in red  
Example: 
Responder SOS 
RT-22 
Zone 5 
Immediate Assistance Required 
Body-Worn Camera Integration 
Supports: 
 Live video  
 Snapshot capture  
 Recording  
 Evidence bookmarking  
Commander can: 
 Open live feed  
 Capture still image  
 Request recording  
Bandwidth automatically adapts to network conditions. 
Drone Operations Overlay 
Displays: 
 Drone location  
 Live camera feed  
 Flight path  
 Battery  
 Mission objective  
Example: 
Drone 
DR-05 
Mission 
Flood Survey 
Battery 
64% 
ETA 
18 min 
Geotagged Evidence Collection 
Teams can upload: 
 Photos  
 Videos  
 Voice notes  
 Measurements  
 Damage assessments  
Automatic metadata: 
 GPS  
 Timestamp  
 Team ID  
 Mission ID  
 Incident ID  
Evidence is linked to the corresponding incident. 
Tactical Communications 
Channels: 
 Team  
 Incident  
 Agency  
 Zone  
 Command Broadcast  
Supports: 
 Secure chat  
 Push-to-talk  
 Voice call  
 Video call  
 Emergency broadcast  
AI Tactical Advisor 
Persistent right panel. 
Example: 
Tactical Recommendation 
Flood water rising rapidly near RT-14. 
Suggested Action 
Move team 300 meters east. 
Deploy secondary rescue boat. 
Confidence 
96% 
Hazard Alerts 
Examples: 
 Flash flood approaching  
 Lightning within 5 km  
 Bridge instability  
 High wind zone  
 Chemical spill  
 Communication dead zone  
Alerts include: 
 Severity  
 Distance  
 Recommended action  
Operational Timeline 
Example: 
09:42 
Mission Assigned 
↓ 
09:48 
Team Arrived 
↓ 
09:55 
Evacuation Started 
↓ 
10:07 
12 Citizens Rescued 
↓ 
10:18 
Extraction Complete 
Mission Completion 
Before closing a mission: 
Checklist: 
 Objectives completed  
 Civilians accounted for  
 Equipment recovered  
 Team health verified  
 Evidence uploaded  
 Incident updated  
After-Mission Debrief 
Commander completes: 
 Mission outcome  
 Challenges encountered  
 Lessons learned  
 Resource utilization  
 Safety observations  
 Improvement recommendations  
Mission is then archived for analytics. 
Loading State 
Skeleton loaders for: 
 Team cards  
 Tactical map  
 Telemetry  
 Mission timeline  
 AI advisor  
Empty State 
No active field missions. 
All rescue teams are currently available or on standby. 
Error State 
Unable to retrieve live team telemetry. 
Retry 
View Last Known Positions 
Notify Communications Team 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatible mission tables  
 High-contrast operational theme  
 Large touch targets  
 Voice-assisted command actions  
Responsive Behavior 
Command Center Display 
 Full-screen tactical GIS  
 Continuous telemetry updates  
 Dedicated AI intelligence panel  
 Large-font operational mode  
Desktop 
 Complete tactical workspace  
 Multi-panel coordination  
Tablet 
 Optimized mission tracking  
 Touch-enabled GIS  
 Collapsible telemetry panel  
Mobile 
Team leader mode: 
 View assigned mission  
 Update status  
 Send SOS  
 Upload evidence  
 Communicate with command  
Strategic monitoring remains desktop-focused. 
Performance Targets 
Metric 
Target 
Tactical workspace load 
GPS update latency 
SOS notification delivery 
Telemetry refresh 
Video stream startup 
<2 seconds 
≤3 seconds 
<1 second 
<2 seconds 
<3 seconds 
Evidence upload confirmation <2 seconds (metadata), background upload for media 
API Dependencies 
Field Operations Services 
 Mission Tracking API  
 Team Status API  
 Mission Completion API  
 Debrief API  
GIS Services 
 Live Tracking API  
 Geofence API  
 Hazard Layer API  
 Route Monitoring API  
Personnel Services 
 Personnel Tracking API  
 Shift Management API  
 Certification API  
Telemetry Services 
 Wearable Telemetry API  
 Vehicle Telemetry API  
 Drone Telemetry API  
 Device Health API  
Evidence Services 
 Media Upload API  
 Evidence Metadata API  
 Chain of Custody API  
Intelligence Services 
 Tactical Recommendation API  
 Hazard Prediction API  
 Safety Scoring API  
Communications 
 Push-to-Talk API  
 Messaging API  
 Video Streaming API  
 Emergency SOS API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 WebSocket Gateway  
 Analytics API  
Analytics Events 
Track: 
 Mission started  
 Team location viewed  
 Geofence alert triggered  
 SOS activated  
 AI recommendation accepted  
 Live camera opened  
 Evidence uploaded  
 Mission completed  
 Debrief submitted  
 Safety alert acknowledged  
Security & Permissions 
Role 
Incident 
Commander 
Dispatch OAicer 
Permission 
Full operational oversight, mission control, and reassignment 
authority 
Monitor teams, update mission status, coordinate 
communications 
Agency Coordinator View and manage agency-specific teams and equipment 
Team Leader 
Update mission progress, submit evidence, initiate SOS, 
complete debrief 
Executive Observer Read-only access to mission status, analytics, and operational 
summaries 
Responder locations, wearable telemetry, live video streams, and mission evidence 
must be encrypted in transit and at rest. Access to personally identifiable responder 
information should be limited to authorized operational roles, and all mission updates, 
SOS activations, and evidence access must be recorded in immutable audit logs. 
Figma Design Notes 
The Rescue Team Live Tracking & Field Operations screen should provide continuous 
tactical situational awareness without overwhelming operators. The GIS map should 
remain the focal point, surrounded by responder status, mission progress, safety 
indicators, communications, and AI guidance. Critical events—such as SOS 
activations, geofence violations, and hazard alerts—must interrupt the normal visual 
hierarchy through persistent banners and high-priority notifications while preserving 
operator focus on active missions. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 32 
Public Alert & Mass Notification Management 
Screen Metadata 
Property 
Value 
Screen Name Public Alert & Mass Notification 
Module 
Primary Users 
Incident & Emergency Operations 
Public Information OAicer (PIO), Disaster Management Head 
Secondary Users Commissioner, Emergency Operations Center, Communication Team 
Priority 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet 
Light, Dark, High-Contrast 
Refresh Interval Live (5–10 seconds for delivery analytics) 
Screen Purpose 
This module enables authorities to create and disseminate emergency alerts to citizens 
using multiple communication channels while ensuring message accuracy, approval 
governance, localization, accessibility, and delivery monitoring. 
Supported use cases: 
 Cyclone warnings  
 Flood alerts  
 Evacuation orders  
 Shelter availability  
 Road closure notices  
 Utility outage notifications  
 Public health advisories  
 Missing person alerts  
 Relief distribution announcements  
 All-clear notifications  
Primary UX Goals 
Within 2 minutes, authorized users should be able to: 
 Author an emergency alert  
 Target the aAected population  
 Obtain approvals  
 Broadcast across all configured channels  
Within 30 seconds, executives should understand: 
 Delivery progress  
 Reach  
 Failed deliveries  
 Public acknowledgement rate  
Information Hierarchy 
Priority: 
1. Active Alerts  
2. Alert Composer  
3. Geographic Targeting  
4. Delivery Channels  
5. Approval Workflow  
6. Delivery Analytics  
7. Citizen Feedback  
8. Alert History  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Alert Search | Filters | Emergency Status | Notifications | User Profile                                 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Alert KPI Cards                                                                                                      
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Alert Panel | Alert Composition Workspace | Right Intelligence Panel                                             
| 
|------------------|-----------------------------|-----------------------------------------------------------------------| 
| Active Alerts    | Message Editor              
| AI Message Review                                                     
| Templates        
| Drafts           
| GIS Targeting               
| Delivery Channels           
| Approval Queue   | Preview                     
| Translation Status                                                    
| Audience Reach Prediction                                             
| Compliance Validation                                                 
| 
| 
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Delivery Analytics | Citizen Feedback | Audit | History | Reports                                     
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Alert KPI Cards 
Active Public Alerts 
12 
Citizens Targeted 
1,482,450 
Successful Deliveries 
1,436,118 
Delivery Rate 
96.9% 
Green 
Pending Approval 
3 
Failed Deliveries 
18,420 
Orange 
Citizen Acknowledgements 
72% 
Average Broadcast Time 
38 Seconds 
Active Alert Panel 
Displays all alerts currently in eAect. 
Alert 
Severity Area 
Status Expiry 
Cyclone Warning Extreme Coastal Zone Active 18:00 
Flood Advisory High 
Road Closure 
Ward 18 
Medium NH16 
Each alert supports: 
Active 12:00 
Active Until Cleared 
 View  
 Edit  
 Extend  
 Cancel  
 Archive  
Alert Templates 
Pre-approved templates include: 
 Cyclone Watch  
 Cyclone Warning  
 Mandatory Evacuation  
 Voluntary Evacuation  
 Flood Warning  
 Heavy Rainfall Alert  
 Shelter Open  
 Shelter Full  
 Power Restoration Update  
 Drinking Water Advisory  
 Curfew Notification  
 All Clear  
Templates ensure standardized messaging. 
Alert Composer 
Fields: 
 Alert Title  
 Alert Category  
 Severity  
 Headline  
 Detailed Message  
 Recommended Citizen Actions  
 EAective Time  
 Expiration Time  
 Contact Information  
 Reference Incident  
Rich text editor supports: 
 Bullet lists  
 Hyperlinks  
 Emergency icons  
 Embedded maps (optional)  
Severity Levels 
Level 
Color 
Advisory Blue 
Watch 
Yellow 
Purpose 
Awareness 
Prepare 
Warning Orange Immediate Readiness 
Emergency Red 
Immediate Action 
Extreme Dark Red Life Threatening 
Severity drives notification priority. 
AI Message Review 
Persistent right-side panel. 
AI validates: 
 Clarity  
 Readability  
 Ambiguity  
 Regulatory compliance  
 Missing safety instructions  
 Accessibility  
Example: 
AI Review 
Reading Level 
Grade 6 
Clarity Score 
98% 
Recommendation 
Add nearest shelter information. 
Mention emergency helpline. 
Confidence 
97% 
Multilingual Translation 
Supported languages: 
 English  
 Telugu  
 Hindi  
 Odia  
 Urdu  
 Tamil (configurable)  
 Additional regional languages  
Workflow: 
Draft → AI Translation → Human Review → Approval 
Each translation shows: 
 Completion  
 Reviewer  
 Last Modified  
Geographic Targeting 
Interactive GIS targeting supports: 
 Administrative boundaries  
 Wards  
 Zones  
 Villages  
 Coastal buAer  
 Radius selection  
 Polygon drawing  
 Flood extent overlay  
Preview displays: 
 Population  
 Households  
 Schools  
 Hospitals  
 Shelters  
Audience Filters 
Target based on: 
 Location  
 Risk zone  
 Age group (where available and permitted)  
 Registered volunteers  
 Shelter occupants  
 Fishermen registry  
 Field responders  
 Businesses  
 Schools  
 Healthcare facilities  
Privacy controls must enforce data minimization. 
Delivery Channels 
Supported channels: 
 SMS  
 Cell Broadcast  
 Mobile App Push Notification  
 Email  
 IVRS (Automated Voice Calls)  
 WhatsApp Business (where integrated)  
 Social Media  
 Government Website Banner  
 Digital Signage  
 Public Sirens  
 Community Radio  
Users can enable one or multiple channels. 
Alert Preview 
Displays how the message appears on: 
 Android  
 iPhone  
 SMS  
 Email  
 WhatsApp  
 Website Banner  
 LED Display Board  
 Public Information Screen  
Approval Workflow 
Workflow: 
Draft 
↓ 
Communication OAicer Review 
↓ 
Disaster Management Head Approval 
↓ 
Commissioner Approval (Extreme Alerts) 
↓ 
Broadcast 
↓ 
Archive 
Emergency bypass supported with mandatory justification and audit logging. 
Delivery Analytics 
Live metrics: 
 Messages Sent  
 Delivered  
 Failed  
 Pending  
 Acknowledged  
 Expired  
Charts: 
 Delivery timeline  
 Geographic reach  
 Channel performance  
 Failure heatmap  
Citizen Acknowledgements 
Citizens may: 
 Acknowledge receipt  
 Request assistance  
 Confirm evacuation  
 Report inability to comply  
Dashboard displays: 
Response 
Acknowledged 
Count 
1,031,225 
Need Assistance 4,120 
Already Evacuated 28,341 
No Response 
419,764 
Rumor & Misinformation Management 
Dedicated panel displaying: 
 Viral misinformation reports  
 Social media monitoring flags  
 Fact-check status  
 OAicial clarification drafts  
Actions: 
 Publish correction  
 Escalate to PIO  
 Mark resolved  
Emergency Press Release Management 
Supports: 
 Press release drafting  
 Approval workflow  
 Media distribution lists  
 Press conference scheduling  
 Media asset attachments  
Integrated with alert history. 
Accessibility Features 
Alerts support: 
 Screen-reader friendly formatting  
 Text-to-speech generation  
 Sign-language video attachment  
 Large-font mode  
 Color-independent severity indicators  
 Plain-language summaries  
Alert Lifecycle 
Draft 
↓ 
Review 
↓ 
Translate 
↓ 
Approve 
↓ 
Broadcast 
↓ 
Monitor 
↓ 
Update (Optional) 
↓ 
Expire 
↓ 
Archive 
Loading State 
Skeleton loaders for: 
 Alert list  
 Composer  
 GIS targeting  
 Delivery charts  
 AI review  
Empty State 
No active public alerts. 
The city is currently operating under normal conditions. 
[Create New Alert] 
Error State 
Unable to broadcast alert. 
Retry 
Save as Draft 
Notify Communications Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatibility  
 High-contrast theme  
 Full multilingual interface  
 Accessible message previews  
Responsive Behavior 
Desktop 
 Full alert composition workspace  
 GIS targeting  
 Live analytics  
 Approval workflow  
Tablet 
 Optimized alert editing  
 Touch-enabled GIS targeting  
 Simplified analytics  
Mobile 
Authorized users can: 
 Approve alerts  
 View delivery status  
 Publish pre-approved templates  
 Monitor acknowledgements  
Complex authoring remains desktop-first. 
Performance Targets 
Metric 
Composer load 
Target 
<2 seconds 
GIS targeting response <500 ms 
Translation generation 
Broadcast initiation 
<5 seconds 
<10 seconds 
Delivery analytics refresh ≤10 seconds 
Alert preview rendering <1 second 
API Dependencies 
Alert Services 
 Alert Authoring API  
 Alert Publishing API  
 Alert Lifecycle API  
 Template Management API  
GIS Services 
 Audience Targeting API  
 Polygon Selection API  
 Population Estimation API  
Communication Services 
 SMS Gateway API  
 Cell Broadcast API  
 Push Notification API  
 Email API  
 IVRS API  
 Social Media Publishing API  
 Website Banner API  
 Siren Control API  
Intelligence Services 
 AI Message Review API  
 Translation API  
 Readability Analysis API  
 Audience Reach Prediction API  
Citizen Services 
 Acknowledgement API  
 Assistance Request API  
 Feedback API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Alert created  
 Template selected  
 Translation approved  
 Geographic area selected  
 Alert approved  
 Alert broadcast  
 Delivery failure detected  
 Citizen acknowledgement received  
 Rumor correction published  
 Alert archived  
Security & Permissions 
Role 
Public Information 
OAicer 
Disaster Management 
Head 
Commissioner 
Permission 
Draft, edit, and publish approved public alerts 
Approve high-priority alerts, manage templates, monitor 
delivery 
Approve extreme alerts, authorize emergency broadcasts, 
oversee communications 
Communication OAicer Draft alerts, manage translations, review content 
Executive Observer 
Read-only access to alerts, analytics, and delivery reports 
All alerts, approval decisions, emergency overrides, translations, and citizen feedback 
must be immutably logged. Public communication APIs must use authenticated, 
encrypted channels with delivery confirmation where supported. 
Figma Design Notes 
The Public Alert & Mass Notification screen should emphasize clarity, speed, and 
public trust. The alert composer must guide users through a structured workflow with 
strong visual emphasis on severity, geographic targeting, and approval state. Delivery 
analytics and citizen acknowledgements should remain continuously visible after 
broadcast, enabling authorities to rapidly assess message reach, identify underserved 
areas, and issue follow-up communications when necessary. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 33 
Evacuation Planning & Shelter Operations 
Screen Metadata 
Property 
Value 
Screen Name Evacuation Planning & Shelter Operations 
Module 
Primary Users 
Secondary 
Users 
Priority 
Incident & Emergency Operations 
Disaster Management Head, Shelter Operations Manager 
Commissioner, Zone Supervisors, Transport Coordinator, Relief 
Agencies 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop, Command Center Display, Tablet 
Dark Operations, Light, High-Contrast 
Refresh Interval Live (5 seconds) 
Screen Purpose 
This module manages the complete evacuation lifecycle, from planning and execution 
to shelter occupancy and humanitarian support. 
Core capabilities include: 
 Evacuation zone planning  
 Route optimization  
 Shelter allocation  
 Citizen transportation  
 Vulnerable population management  
 Shelter inventory tracking  
 Family reunification  
 AI occupancy forecasting  
 Relief resource monitoring  
Primary UX Goals 
Within 10 seconds, operators should know: 
 Evacuation progress  
 Shelter occupancy  
 Remaining transport capacity  
 High-risk zones  
 Critical shortages  
Within 30 seconds, they should be able to: 
 Open new shelters  
 Redirect evacuees  
 Allocate transport  
 Update shelter status  
 Monitor humanitarian supplies  
Information Hierarchy 
Priority: 
1. Evacuation Status  
2. Shelter Capacity  
3. GIS Evacuation Map  
4. Transportation Allocation  
5. Vulnerable Population  
6. Resource Availability  
7. AI Recommendations  
8. Shelter Analytics  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Evacuation Search | Filters | Emergency Status | Notifications | User Profile                            
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Evacuation KPI Cards                                                                                                 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Operations Panel | Central GIS Evacuation Map | Right Intelligence Panel                                        
| 
|-----------------------|----------------------------|--------------------------------------------------------------------| 
| Active Evacuations    | Evacuation Routes          
| 
| Shelter List          
| Shelter Locations          
| AI Evacuation Advisor                                              
| Shelter Overflow Prediction                                        
| 
| Transport Queue       | Flood Overlay              
| 
| Logistics Recommendations                                          
| Vulnerable Citizens   | Live Vehicle Tracking      | Operational Alerts                                                  
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Shelter Details | Transport | Supplies | Analytics | Timeline | Audit                               
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Evacuation KPI Cards 
Citizens Evacuated 
128,420 
Evacuation Progress 
74% 
Active Shelters 
63 
Shelter Occupancy 
81% 
Transport Vehicles Active 
142 
High-Risk Zones Remaining 
5 
Vulnerable Citizens Awaiting Evacuation 
1,124 
Critical (Orange) 
Relief Supply Readiness 
93% 
GIS Evacuation Map 
The GIS map is the operational centerpiece. 
Available layers: 
 Evacuation zones  
 Flood projections  
 Cyclone wind zones  
 Road closures  
 Safe routes  
 Shelter locations  
 Vehicle locations  
 Medical facilities  
 Police checkpoints  
 Rescue teams  
 Hazard areas  
 Population density  
 Administrative boundaries  
Evacuation Zone Management 
Each zone displays: 
Zone 
Coastal Zone A 
Population 
18,450 
Evacuated 
14,980 
Progress 
81% 
Risk Level 
Extreme 
Status colors: 
 Green – Complete  
 Yellow – In Progress  
 Orange – Delayed  
 Red – Immediate Action Required  
Dynamic Route Optimization 
The routing engine continuously evaluates: 
 Flood depth  
 TraAic congestion  
 Fallen trees  
 Bridge status  
 Road closures  
 Wind exposure  
 Vehicle restrictions  
Displays: 
 Primary Route  
 Alternate Route  
 Emergency Route  
Each route includes: 
 Distance  
 Estimated travel time  
 Safety score  
Shelter Directory 
Displays all registered shelters. 
Shelter Capacity Occupied Status 
S-12 
S-18 
S-25 
Sorting: 
1,500 
900 
2,000 
 Distance  
 Capacity  
 Occupancy  
1,230 
900 
640 
 Available beds  
 Accessibility  
Open 
Full 
Available 
Shelter Detail Panel 
Selecting a shelter displays: 
Shelter 
S-12 
Location 
Rajam High School 
Capacity 
1,500 
Current Occupancy 
1,230 
Available Beds 
270 
Generator 
Operational 
Water Supply 
Available 
Medical Team 
Present 
Shelter Facilities 
Track availability of: 
 Drinking water  
 Food  
 Toilets  
 Showers  
 Electricity  
 Generator  
 Medical room  
 Isolation room  
 Child care area  
 Women's safety area  
 Charging stations  
 Internet connectivity  
Status indicators: 
 Available  
 Limited  
 Unavailable  
Shelter Occupancy Analytics 
Visualizations include: 
 Occupancy trend  
 Gender distribution  
 Age distribution  
 Daily arrivals  
 Daily departures  
 Capacity utilization  
AI Shelter Overflow Prediction 
Persistent intelligence panel. 
Example: 
Prediction 
Shelter S-12 will reach full capacity within 48 minutes. 
Recommendation 
Redirect new evacuees to S-21. 
Activate overflow shelter S-34. 
Confidence 
97% 
Transportation Management 
Supported transport assets: 
 Buses  
 Mini buses  
 Boats  
 Ambulances  
 Special-needs vehicles  
 Trucks  
 Volunteer vehicles  
Each vehicle displays: 
 Driver  
 Capacity  
 Current occupancy  
 Route  
 ETA  
 Fuel level  
Vehicle Assignment Card 
Vehicle 
Bus-14 
Capacity 
48 
Passengers 
43 
Destination 
Shelter S-12 
ETA 
18 Minutes 
Status 
En Route 
Vulnerable Population Tracking 
Special categories: 
 Elderly  
 Persons with disabilities  
 Pregnant women  
 Infants  
 Chronically ill  
 Dialysis patients  
 Oxygen-dependent citizens  
 Registered high-risk individuals  
Dashboard displays: 
 Awaiting evacuation  
 In transit  
 Safely sheltered  
 Requires medical transport  
Family Reunification 
Supports: 
 Family group registration  
 Dependent linking  
 Missing family reporting  
 Shelter lookup  
 Reunification status tracking  
Example: 
Family ID 
FAM-10248 
Members 
5 
Current Status 
All Reunited 
Shelter 
S-21 
Shelter Check-in Workflow 
Methods: 
 QR Code  
 Aadhaar (where legally permitted and configured)  
 Government ID  
 Mobile Number  
 Manual Registration  
Captured information: 
 Name  
 Age  
 Gender  
 Medical conditions  
 Special needs  
 Family ID  
 Arrival time  
Shelter Check-out Workflow 
Records: 
 Departure time  
 Destination  
 Transportation used  
 Follow-up assistance  
 Final status  
Relief Supply Inventory 
Track: 
 Rice  
 Ready-to-eat meals  
 Drinking water  
 Blankets  
 Mattresses  
 Medicines  
 Baby food  
 Sanitary products  
 Fuel  
 Generator diesel  
Each item includes: 
 Current stock  
 Daily consumption  
 Reorder threshold  
 Days remaining  
Inventory Alert 
Example: 
Alert 
Shelter S-18 
Drinking Water 
Remaining 
6 Hours 
Recommended Action 
Dispatch Supply Vehicle 
Priority 
High 
Medical Monitoring 
Displays: 
 On-site medical staA 
 Daily consultations  
 Emergency referrals  
 Isolation occupancy  
 Medication stock  
 Ambulance availability  
Operational Timeline 
08:15 
Evacuation Order Issued 
↓ 
09:05 
Shelter S-12 Activated 
↓ 
09:40 
Bus-14 Departed 
↓ 
10:02 
420 Citizens Checked In 
↓ 
10:18 
Overflow Alert Generated 
AI Evacuation Advisor 
Example: 
Recommendation 
Evacuation progress in Coastal Zone A is below target. 
Deploy six additional buses. 
Open Shelter S-34. 
Estimated completion improvement 
22% 
Confidence 
95% 
Loading State 
Skeleton loaders for: 
 Shelter list  
 GIS map  
 Vehicle table  
 Occupancy charts  
 AI recommendations  
Empty State 
No active evacuation operations. 
All shelters are currently on standby. 
[View Preparedness Plans] 
Error State 
Unable to synchronize evacuation data. 
Retry 
Open Cached Operational View 
Notify Operations Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 High-contrast mode  
 Screen-reader compatible shelter tables  
 Large touch targets  
 Plain-language citizen information  
Responsive Behavior 
Command Center Display 
 Full GIS visualization  
 Shelter occupancy dashboard  
 Transport monitoring  
 AI advisory panel  
Desktop 
 Complete evacuation management workspace  
 Multi-panel logistics coordination  
Tablet 
 Optimized shelter operations  
 Touch-enabled route management  
Mobile 
Shelter manager mode: 
 Check-in/check-out  
 Occupancy updates  
 Supply requests  
 Incident reporting  
 Medical status updates  
Advanced planning remains desktop-focused. 
Performance Targets 
Metric 
Workspace load 
Target 
<2 seconds 
Shelter occupancy refresh ≤5 seconds 
Route recalculation 
Vehicle tracking update 
Check-in transaction 
Inventory update 
<2 seconds 
≤3 seconds 
<1 second 
<500 ms 
API Dependencies 
Evacuation Services 
 Evacuation Planning API  
 Route Optimization API  
 Population Tracking API  
 Family Reunification API  
Shelter Services 
 Shelter Registry API  
 Occupancy API  
 Check-in/Check-out API  
 Facility Status API  
Transportation Services 
 Vehicle Assignment API  
 Fleet Tracking API  
 Driver Management API  
Relief Logistics 
 Inventory API  
 Supply Dispatch API  
 Consumption Analytics API  
Intelligence Services 
 Overflow Prediction API  
 Evacuation Progress API  
 Vulnerability Assessment API  
 Logistics Recommendation API  
GIS Services 
 Evacuation Layer API  
 Hazard Overlay API  
 Live Tracking API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Evacuation order issued  
 Shelter activated  
 Citizen checked in  
 Citizen checked out  
 Transport assigned  
 Overflow prediction viewed  
 Supply request created  
 Medical referral logged  
 Family reunited  
 Shelter closed  
Security & Permissions 
Role 
Disaster Management 
Head 
Shelter Operations 
Manager 
Transport Coordinator 
Permission 
Full control over evacuation plans, shelter activation, and 
transport allocation 
Manage shelter occupancy, facilities, check-in/check-out, 
and inventory 
Assign vehicles, optimize routes, and monitor fleet 
operations 
Role 
Permission 
Zone Supervisor 
Monitor evacuation progress and coordinate local 
operations 
Update assigned shelter resources and humanitarian 
services 
Read-only access to evacuation dashboards and analytics 
Relief Agency 
Representative 
Executive Observer 
Citizen identity information, medical needs, family relationships, and shelter records 
must be protected using role-based access control, encryption at rest and in transit, 
and comprehensive audit logging. Emergency access to sensitive records should 
support configurable break-glass procedures with mandatory justification and post
event review. 
Figma Design Notes 
The Evacuation Planning & Shelter Operations screen should communicate control, 
safety, and humanitarian awareness. The GIS evacuation map should dominate the 
workspace, while shelter occupancy, transportation, vulnerable population status, and 
AI recommendations remain continuously visible. Visual hierarchy should prioritize life
safety information, capacity constraints, and logistics bottlenecks, allowing operators 
to make rapid, evidence-based decisions during large-scale evacuations. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 34 
Relief Distribution & Humanitarian Assistance Management 
Screen Metadata 
Property 
Value 
Screen Name Relief Distribution & Humanitarian Assistance 
Module 
Incident & Emergency Operations 
Primary Users Relief Operations Manager 
Secondary 
Users 
Disaster Management Head, NGO Coordinators, Warehouse 
Managers, Shelter Managers 
Property 
Value 
Priority 
Mission Critical 
Authentication Required 
Devices 
Theme 
Desktop, Tablet 
Light, Dark, High-Contrast 
Refresh Interval Live (5–10 seconds) 
Screen Purpose 
This module manages the complete humanitarian assistance process after evacuation. 
Supported operations: 
 Relief camp management  
 Beneficiary registration  
 Food distribution  
 Water distribution  
 Medical aid  
 Relief package management  
 NGO coordination  
 Volunteer management  
 Warehouse logistics  
 Cash assistance  
 Aid tracking  
 Demand forecasting  
Primary UX Goals 
Within 10 seconds, relief managers should understand: 
 Relief camp status  
 Supply availability  
 Distribution progress  
 Beneficiary demand  
 Critical shortages  
Within 30 seconds, operators should: 
 Dispatch relief supplies  
 Register beneficiaries  
 Allocate volunteers  
 Request replenishment  
 Coordinate NGOs  
Information Hierarchy 
Priority: 
1. Relief Operations Status  
2. Beneficiary Distribution  
3. Warehouse Inventory  
4. Camp Operations  
5. Medical Support  
6. NGO Coordination  
7. Volunteer Operations  
8. AI Demand Forecast  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Relief Search | Filters | Emergency Status | Notifications | User Profile                                
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Relief KPI Cards                                                                                                     
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Operations Panel | Central Relief GIS Map | Right Intelligence Panel                                            
| 
|-----------------------|------------------------|-----------------------------------------------------------------------| 
| Relief Camps          
| Warehouse Locations    | AI Demand Forecast                                                    
| 
| Beneficiary Queue     | Delivery Vehicles      | Supply Optimization                                                   
| 
| NGO Partners          
| Distribution Routes    | Critical Shortages                                                    
| Volunteer Teams       | Relief Centers         
| Recommendations                                                       
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| 
| Bottom Panel: Inventory | Distribution | Beneficiaries | Medical | Analytics | Timeline | 
Audit                  
+----------------------------------------------------------------------------------------------------------------------+ 
| 
Relief KPI Cards 
Relief Camps Active 
63 
Registered Beneficiaries 
148,920 
Food Packages Distributed 
112,540 
Drinking Water Distributed 
1.86 Million Liters 
Medical Cases Treated 
6,820 
Volunteers Active 
2,148 
NGOs Coordinating 
38 
Supply Readiness 
91% 
Green 
Relief Camp Directory 
Displays all operational camps. 
Camp Capacity Occupancy Supplies Status 
RC-12 1,500 
RC-18 900 
1,238 
892 
Good 
Active 
Low Water Attention 
RC-25 2,000 
1,020 
Good 
Active 
Relief Camp Detail Panel 
Displays: 
Camp 
RC-12 
Location 
Rajam Relief Camp 
Population 
1,238 
Families 
352 
Children 
286 
Senior Citizens 
142 
Persons with Disabilities 
38 
Camp Facility Status 
Track: 
 Food kitchen  
 Drinking water  
 Toilets  
 Showers  
 Electricity  
 Generator  
 Medical clinic  
 Pharmacy  
 Child-safe space  
 Women's support center  
 Internet  
 Waste management  
Status: 
 Operational  
 Limited  
 Unavailable  
Beneficiary Registration 
Registration methods: 
 QR Code  
 Government ID  
 Aadhaar (where legally permitted)  
 Mobile Number  
 Manual Registration  
Captured fields: 
 Name  
 Family ID  
 Shelter/Camp  
 Medical conditions  
 Dietary restrictions  
 Disabilities  
 Relief eligibility  
 Assistance history  
Beneficiary Profile 
Beneficiary ID 
BEN-20481 
Family Members 
5 
Camp 
RC-12 
Assistance Received 
Food 
Water 
Blankets 
Medical Kit 
Cash Assistance 
Pending 
Relief Package Management 
Package categories: 
 Food Kit  
 Water Kit  
 Hygiene Kit  
 Baby Care Kit  
 Medical Kit  
 Women's Dignity Kit  
 Elderly Care Kit  
 Emergency Shelter Kit  
Each package displays: 
 SKU  
 Contents  
 Quantity  
 Expiry  
 Stock availability  
Distribution Workflow 
Warehouse 
↓ 
Vehicle Loaded 
↓ 
Camp Arrival 
↓ 
Beneficiary Verification 
↓ 
Package Issued 
↓ 
Digital Confirmation 
↓ 
Inventory Updated 
Every step is timestamped. 
Warehouse Management 
Displays: 
Warehouse Stock Level Vehicles Status 
WH-01 
WH-02 
WH-03 
92% 
64% 
28% 
18 
12 
5 
Active 
Active 
Low Stock 
Inventory Categories 
Track: 
 Rice  
 Wheat  
 Ready-to-Eat Meals  
 Drinking Water  
 Medicines  
 ORS  
 Blankets  
 Tarpaulins  
 Baby Food  
 Sanitary Products  
 Fuel  
 Diesel  
 LPG  
Each item includes: 
 Available quantity  
 Reserved quantity  
 Daily consumption  
 Days remaining  
 Reorder threshold  
AI Demand Forecast 
Persistent intelligence panel. 
Example: 
Prediction 
Camp RC-18 will exhaust drinking water within 7 hours. 
Recommendation 
Dispatch 15,000 liters immediately. 
Expected shortage avoided 
100% 
Confidence 
98% 
Medical Aid Coordination 
Displays: 
 Doctors on duty  
 Nurses  
 Ambulances  
 Medicines  
 Isolation beds  
 Vaccination support  
 Emergency referrals  
Medical metrics: 
 Daily consultations  
 Disease surveillance  
 Outbreak alerts  
Cash Assistance Management 
Supported programs: 
 Government relief grants  
 NGO cash transfers  
 Direct Benefit Transfer (DBT)  
 Emergency compensation  
Tracks: 
 Beneficiary eligibility  
 Approval status  
 Payment reference  
 Disbursement date  
 Audit history  
NGO Coordination 
Partner organizations displayed with: 
NGO 
Focus 
Camps Assigned Status 
Red Cross Medical 8 
Goonj 
Relief Kits 12 
Local NGO Food 
Capabilities: 
5 
 Resource requests  
 Task assignments  
 Daily reporting  
 Volunteer deployment  
Active 
Active 
Active 
Volunteer Management 
Volunteer profile: 
Volunteer 
VOL-248 
Skills 
Medical 
Current Assignment 
Camp RC-12 
Shift 
08:00–16:00 
Status 
Available 
Track: 
 Skills  
 Certifications  
 Availability  
 Attendance  
 Assigned tasks  
Supply Distribution Analytics 
Charts include: 
 Daily distribution trend  
 Camp-wise allocations  
 Package category breakdown  
 Warehouse throughput  
 Distribution completion rate  
 Beneficiary coverage  
Operational Timeline 
08:00 
Warehouse Dispatch Approved 
↓ 
08:40 
Vehicle Loaded 
↓ 
09:25 
Camp RC-12 Delivery Completed 
↓ 
10:05 
Food Distribution Started 
↓ 
11:10 
Water Supply Replenished 
AI Relief Advisor 
Example: 
Recommendation 
Increase baby food allocation to Camp RC-25. 
Reason 
High concentration of infants. 
Suggested Quantity 
480 additional units. 
Confidence 
96% 
Loading State 
Skeleton loaders for: 
 Camp list  
 Warehouse inventory  
 Beneficiary table  
 Distribution charts  
 AI panel  
Empty State 
No active relief operations. 
Relief warehouses remain on standby. 
[View Preparedness Inventory] 
Error State 
Unable to synchronize relief operations. 
Retry 
Open Cached Inventory 
Notify Logistics Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 High-contrast mode  
 Screen-reader compatible tables  
 Large touch targets  
 Plain-language beneficiary workflows  
Responsive Behavior 
Desktop 
 Full logistics workspace  
 Multi-panel warehouse and camp coordination  
Tablet 
 Camp management  
 Beneficiary registration  
 Distribution tracking  
Mobile 
Relief worker mode: 
 Register beneficiaries  
 Issue relief packages  
 Scan QR codes  
 Update inventory  
 Report shortages  
Performance Targets 
Metric 
Workspace load 
Beneficiary registration 
Inventory update 
Distribution confirmation 
Dashboard refresh 
Target 
<2 seconds 
<1 second 
<500 ms 
<1 second 
≤5 seconds 
Demand forecast generation <3 seconds 
API Dependencies 
Relief Services 
 Beneficiary Registration API  
 Relief Distribution API  
 Camp Management API  
 Assistance Tracking API  
Warehouse Services 
 Warehouse Inventory API  
 Stock Movement API  
 Vehicle Dispatch API  
 Procurement API  
Medical Services 
 Medical Camp API  
 Disease Surveillance API  
 Referral API  
NGO & Volunteer Services 
 NGO Coordination API  
 Volunteer Registry API  
 Task Assignment API  
Intelligence Services 
 Demand Forecast API  
 Distribution Optimization API  
 Inventory Prediction API  
 Equity Analysis API  
GIS Services 
 Camp Mapping API  
 Distribution Route API  
 Warehouse Location API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Beneficiary registered  
 Relief package issued  
 Warehouse dispatch created  
 Camp inventory updated  
 Medical referral logged  
 Volunteer assigned  
 NGO report submitted  
 Cash assistance approved  
 Demand forecast viewed  
 Supply shortage acknowledged  
Security & Permissions 
Role 
Relief Operations 
Manager 
Permission 
Full control of relief distribution, camps, warehouses, and 
beneficiary management 
Warehouse Manager Manage inventory, dispatches, and stock reconciliation 
Shelter/Camp 
Manager 
Register beneficiaries, issue relief, report shortages 
Role 
Permission 
NGO Coordinator 
Manage assigned camps, volunteers, and distribution records 
Medical Coordinator Access medical records, referrals, and disease surveillance 
Executive Observer 
Read-only access to dashboards and humanitarian analytics 
Beneficiary identity, health information, financial assistance records, and distribution 
history must be protected through role-based access control, encryption in transit and 
at rest, and immutable audit logs. Relief distribution workflows should support oAline 
operation with secure synchronization when connectivity is restored. 
Figma Design Notes 
The Relief Distribution & Humanitarian Assistance screen should emphasize equity, 
transparency, and operational eAiciency. The interface should clearly communicate 
camp status, inventory levels, beneficiary needs, and logistics bottlenecks. Visual 
hierarchy should prioritize critical shortages, vulnerable populations, and AI 
recommendations, while enabling field teams to process distributions quickly with 
minimal interaction. Every relief item should be traceable from warehouse dispatch to 
beneficiary receipt, ensuring accountability and reducing duplication or fraud. 
PART 5 — Incident & Emergency Operations Management 
SCREEN 35 
Damage Assessment & Recovery Management 
Screen Metadata 
Property 
Value 
Screen Name Damage Assessment & Recovery Management 
Module 
Recovery & Reconstruction 
Primary Users Recovery Operations Manager, Municipal Engineering Department 
Secondary 
Users 
Priority 
Commissioner, Disaster Management Head, Utility Departments, 
Public Works, Insurance Coordination Team 
High 
Property 
Value 
Authentication Required 
Devices 
Theme 
Desktop (Primary), Tablet, Field Inspection Devices 
Light, Dark, High-Contrast 
Refresh Interval Live (10 seconds) 
Screen Purpose 
This module manages the complete recovery lifecycle following cyclone impact. 
Supported functions: 
 Rapid Damage Assessment (RDA)  
 Detailed engineering inspections  
 Infrastructure restoration  
 Utility recovery  
 Debris clearance  
 Drone and satellite analysis  
 Insurance coordination  
 Compensation tracking  
 Reconstruction planning  
 Recovery analytics  
Primary UX Goals 
Within 10 seconds, decision-makers should know: 
 Overall recovery progress  
 Infrastructure status  
 Restoration priorities  
 Financial impact  
 Outstanding assessments  
Within 30 seconds, operators should: 
 Assign inspection teams  
 Prioritize repairs  
 Track restoration work  
 Generate recovery reports  
 Coordinate reconstruction  
Information Hierarchy 
Priority: 
1. Recovery Status  
2. Damage Assessment  
3. GIS Recovery Map  
4. Utility Restoration  
5. Reconstruction Projects  
6. Compensation Tracking  
7. AI Recovery Recommendations  
8. Recovery Analytics  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Recovery Search | Filters | Recovery Status | Notifications | User Profile                                
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Recovery KPI Cards                                                                                                   
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Recovery Panel | Central GIS Recovery Map | Right Intelligence Panel                                            
| 
|---------------------|--------------------------|-----------------------------------------------------------------------| 
| Damage Assessments  | Damaged Assets           
| 
| AI Recovery Advisor                                                   
| Inspection Queue    | Utility Restoration      | Restoration Priorities                                                
| 
| Recovery Projects   | Debris Operations        
| 
| Compensation Claims | Drone Imagery            
| 
| Financial Impact                                                      
| Predictive Recovery Timeline                                          
+----------------------------------------------------------------------------------------------------------------------+ 
| 
| Bottom Panel: Assessments | Projects | Utilities | Compensation | Analytics | Timeline | 
Audit                  
+----------------------------------------------------------------------------------------------------------------------+ 
Recovery KPI Cards 
Structures Assessed 
18,742 
Critical Infrastructure Restored 
81% 
Roads Reopened 
126 / 142 
Power Restored 
92% 
Water Supply Restored 
88% 
Recovery Projects Active 
54 
Estimated Financial Damage 
₹482 Crore 
Overall Recovery Progress 
74% 
Damage Assessment Dashboard 
Assessment categories: 
 Residential Buildings  
 Commercial Buildings  
 Government Buildings  
 Schools  
 Hospitals  
 Roads  
 Bridges  
 Power Infrastructure  
 Water Infrastructure  
 Communication Towers  
 Coastal Protection Structures  
 Drainage Systems  
Each category displays: 
 Total Assets  
 Assessed  
 Damaged  
 Destroyed  
 Under Repair  
Damage Classification 
Standardized damage levels: 
Level Description 
D0 No Damage 
D1 Minor Damage 
D2 Moderate Damage 
D3 Major Damage 
D4 Severe Damage 
D5 Total Loss 
Each level includes configurable engineering criteria. 
GIS Recovery Map 
Interactive recovery layers: 
 Damaged buildings  
 Infrastructure failures  
 Utility outages  
 Cleared roads  
 Debris locations  
 Drone imagery  
 Satellite imagery  
 Reconstruction sites  
 Flood recession map  
 Landslide zones  
 Temporary shelters  
 Ongoing repair projects  
Users can compare: 
 Before Cyclone  
 Immediately After  
 Current Recovery State  
Rapid Damage Assessment (RDA) 
Field assessment form includes: 
 Structure type  
 GPS location  
 Damage category  
 Structural safety  
 Occupancy status  
 Estimated repair cost  
 Photos  
 Drone imagery reference  
 Inspector comments  
AI Damage Classification 
Uploaded drone or satellite imagery is analyzed. 
Example: 
Building 
Ward-18 Block-42 
Predicted Damage 
Major Structural Damage 
Confidence 
97% 
Estimated Repair Cost 
₹12.4 Lakhs 
Priority 
High 
Operators may: 
 Accept  
 Modify  
 Request Manual Review  
Engineering Inspection Queue 
Inspection Priority Assigned Engineer Status 
Hospital H-02 Critical Eng-102 
Bridge BR-14 High 
Eng-118 
School SC-08 Medium Eng-211 
Supports: 
 Assignment  
In Progress 
Scheduled 
Pending 
 Rescheduling  
 Escalation  
 Closure  
Utility Restoration Panel 
Tracks restoration for: 
 Electricity  
 Water Supply  
 Sewerage  
 Telecommunications  
 Internet  
 Street Lighting  
 Gas Supply (if applicable)  
Status indicators: 
 Operational  
 Partial  
 Outage  
 Under Repair  
 Awaiting Inspection  
Utility Detail Card 
Service 
Electricity 
AAected Consumers 
12,420 
Restored 
11,438 
Remaining 
982 
Expected Completion 
18:30 Today 
Debris Clearance Management 
Tracks: 
 Fallen trees  
 Building debris  
 Road obstructions  
 Hazardous waste  
 Sand accumulation  
 Flood sediment  
Each task records: 
 Location  
 Volume estimate  
 Assigned contractor  
 Equipment  
 Completion percentage  
Recovery Project Management 
Projects include: 
 Road reconstruction  
 Bridge repairs  
 School restoration  
 Hospital repairs  
 Coastal embankments  
 Drainage improvements  
 Utility upgrades  
Each project tracks: 
 Budget  
 Contractor  
 Timeline  
 Progress  
 Risks  
 Dependencies  
Compensation & Insurance Tracking 
Supports: 
 Government compensation  
 Insurance claims  
 Relief grants  
 Livelihood restoration  
Claim lifecycle: 
Submitted 
↓ 
Verified 
↓ 
Approved 
↓ 
Payment Initiated 
↓ 
Completed 
AI Recovery Advisor 
Persistent right-side panel. 
Example: 
Recommendation 
Prioritize restoration of Pumping Station PS-04 before Road R-18. 
Expected Benefit 
Restore water supply to 18,000 citizens. 
Confidence 
98% 
Recovery Timeline 
Day 1 
Rapid Damage Assessment Started 
↓ 
Day 2 
Power Restoration 45% 
↓ 
Day 4 
Major Roads Cleared 
↓ 
Day 7 
Schools Reopened 
↓ 
Day 15 
Recovery Progress 74% 
Recovery Analytics 
Dashboards include: 
 Recovery completion by zone  
 Utility restoration trends  
 Infrastructure damage heatmaps  
 Cost breakdown  
 Contractor performance  
 Average restoration time  
 Recovery milestone tracking  
Recovery Reports 
Generate: 
 Daily Recovery Report  
 Infrastructure Status Report  
 Damage Assessment Summary  
 Financial Impact Report  
 Compensation Progress Report  
 Executive Recovery Dashboard  
 GIS Recovery Maps  
 Recovery KPI Scorecards  
Supported export formats: 
 PDF  
 Excel  
 CSV  
 GeoJSON  
 Shapefile  
Loading State 
Skeleton loaders for: 
 Recovery KPIs  
 GIS map  
 Inspection queue  
 Project dashboards  
 AI recommendations  
Empty State 
No active recovery operations. 
All recovery milestones have been completed. 
[View Historical Recovery Reports] 
Error State 
Unable to synchronize recovery data. 
Retry 
Open Cached Recovery View 
Notify System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatible inspection forms  
 High-contrast mode  
 Large touch targets  
 Accessible GIS controls  
Responsive Behavior 
Desktop 
 Full recovery management workspace  
 Multi-panel GIS and project monitoring  
Tablet 
 Engineering inspections  
 Damage assessment forms  
 Project updates  
Mobile 
Field engineer mode: 
 Complete inspections  
 Capture photos  
 Upload drone references  
 Update restoration progress  
 Submit assessments  
Strategic analytics remain desktop-focused. 
Performance Targets 
Metric 
Workspace load 
GIS rendering 
Target 
<2 seconds 
<1 second 
Metric 
Target 
Damage classification 
Assessment submission 
<3 seconds 
<1 second 
Recovery dashboard refresh ≤10 seconds 
Report generation 
<5 seconds 
API Dependencies 
Damage Assessment Services 
 Rapid Damage Assessment API  
 Engineering Inspection API  
 Damage Classification API  
 Assessment Workflow API  
Recovery Services 
 Recovery Project API  
 Utility Restoration API  
 Debris Clearance API  
 Milestone Tracking API  
Compensation Services 
 Claim Management API  
 Insurance Integration API  
 Payment Status API  
Intelligence Services 
 AI Damage Assessment API  
 Recovery Prioritization API  
 Cost Estimation API  
 Recovery Forecast API  
GIS Services 
 Recovery Mapping API  
 Drone Imagery API  
 Satellite Imagery API  
 Infrastructure Layer API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Damage assessment submitted  
 AI classification accepted  
 Inspection assigned  
 Utility restoration updated  
 Recovery project created  
 Compensation claim approved  
 Recovery milestone completed  
 Recovery report generated  
 GIS layer enabled  
 AI recommendation acknowledged  
Security & Permissions 
Role 
Recovery Operations 
Manager 
Permission 
Full recovery planning, prioritization, and project 
oversight 
Role 
Permission 
Municipal Engineer 
Perform inspections, submit assessments, update 
restoration status 
Utility Department Manager Manage restoration activities for assigned utilities 
Finance & Compensation 
OAicer 
Process compensation and financial recovery workflows 
Contractor Coordinator 
Executive Observer 
Update project progress and resource utilization 
Read-only access to recovery dashboards, reports, and 
analytics 
All engineering assessments, financial estimates, compensation decisions, and 
recovery project updates must be immutably logged. Drone imagery, infrastructure 
data, and citizen compensation records should be encrypted in transit and at rest with 
fine-grained role-based access controls. 
Figma Design Notes 
The Damage Assessment & Recovery Management screen should represent the 
transition from crisis response to long-term resilience. The interface should 
combine engineering precision with executive visibility, emphasizing infrastructure 
restoration, financial accountability, and transparent recovery progress. The GIS 
recovery map should remain the primary visualization, while assessment queues, 
restoration metrics, AI recommendations, and project dashboards support informed 
decision-making throughout the recovery lifecycle. 
PART 6 — Recovery, Citizen Services & Long-Term Resilience 
SCREEN 36 
Citizen Service Recovery & Grievance Management 
Screen Metadata 
Property 
Value 
Screen Name Citizen Service Recovery & Grievance Management 
Module 
Recovery & Citizen Services 
Property 
Value 
Primary Users 
Citizen Service OAicers, Recovery Case Managers 
Secondary Users Commissioner, Disaster Management Head, Municipal Departments 
Priority 
High 
Authentication Required 
Devices 
Theme 
Desktop, Tablet, Mobile 
Light, Dark, High-Contrast 
Refresh Interval Live (10 seconds) 
Screen Purpose 
This module provides a centralized platform for managing all citizen recovery-related 
interactions following a cyclone. 
Supported services: 
 Damage compensation requests  
 Public infrastructure complaints  
 Relief assistance requests  
 Recovery service requests  
 Grievance registration  
 Case management  
 Document verification  
 Citizen communication  
 Satisfaction surveys  
 SLA monitoring  
Primary UX Goals 
Within 10 seconds, oAicers should understand: 
 Pending grievances  
 High-priority citizen requests  
 SLA breaches  
 Compensation backlog  
 Department workload  
Within 30 seconds, they should be able to: 
 Open a citizen case  
 Verify submitted documents  
 Assign departments  
 Update case status  
 Communicate with citizens  
Information Hierarchy 
Priority: 
1. Citizen Cases  
2. Compensation Requests  
3. Grievance Queue  
4. Case Details  
5. AI Classification  
6. SLA Monitoring  
7. Citizen Communication  
8. Performance Analytics  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Citizen Search | Filters | Notifications | User Profile                                                    
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Citizen Recovery KPI Cards                                                                                           
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Operations Panel | Case Management Workspace | Right Intelligence Panel                                         
| 
|-----------------------|---------------------------|---------------------------------------------------------------------| 
| New Requests          
| 
| Active Cases          
| Citizen Case Details      | AI Case Classification                                              
| Documents                
| Escalated Cases       | Timeline                 
| 
| SLA Risk Prediction                                                  
| Recommended Actions                                                  
| Compensation Queue    | Communication            
| 
| Citizen Sentiment                                                    
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Documents | Audit | Surveys | Analytics | Reports | Activity Log                                 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Citizen Recovery KPI Cards 
Active Recovery Cases 
8,462 
Compensation Requests 
3,218 
Pending Grievances 
1,174 
SLA Compliance 
94.2% 
Green 
Cases Resolved Today 
428 
Average Resolution Time 
3.8 Days 
Citizen Satisfaction 
4.7 / 5 
Escalated Cases 
84 
Red 
Recovery Service Categories 
Supported requests: 
 House Damage Compensation  
 Crop Loss Assistance  
 Business Recovery Support  
 Utility Restoration Complaint  
 Road Repair Request  
 Drainage Issue  
 Fallen Tree Removal  
 Debris Clearance  
 Medical Assistance  
 Relief Distribution Issue  
 Shelter Issue  
 Livelihood Support  
 Insurance Coordination  
 Other Public Grievances  
Citizen Case Queue 
Columns: 
Case ID Category 
Priority SLA 
Status 
RC-10428 House Damage High 1 Day Verification 
RC-10435 Utility Complaint Medium 3 Days Assigned 
RC-10441 Debris Removal High 
Filters: 
 Category  
 Department  
 Ward  
 Zone  
 Priority  
 SLA  
 Status  
12 Hours In Progress 
Citizen Profile Panel 
Displays: 
Citizen 
Ramesh Kumar 
Family ID 
FAM-10892 
Ward 
18 
AAected Property 
Residential 
Relief Received 
Yes 
Compensation Status 
Under Verification 
Case Detail Workspace 
Sections: 
 Case Summary  
 Submitted Information  
 Damage Assessment  
 Supporting Documents  
 Assigned Department  
 SLA  
 Communication Timeline  
 Internal Notes  
 Resolution History  
Document Management 
Supported uploads: 
 Property photographs  
 Government ID  
 Property ownership proof  
 Insurance documents  
 Damage assessment reports  
 Utility bills  
 Bank account details  
 Medical certificates  
Features: 
 OCR extraction  
 Duplicate detection  
 Virus scanning  
 Version history  
AI Case Classification 
The AI automatically determines: 
 Complaint category  
 Responsible department  
 Priority  
 Estimated eAort  
 Suggested SLA  
Example: 
Predicted Category 
Major House Damage 
Priority 
High 
Responsible Department 
Municipal Engineering 
Confidence 
96% 
Compensation Workflow 
Lifecycle: 
Application Submitted 
↓ 
Document Verification 
↓ 
Damage Validation 
↓ 
Approval 
↓ 
Payment Processing 
↓ 
Citizen Confirmation 
↓ 
Case Closed 
Grievance Workflow 
Citizen Submitted 
↓ 
AI Categorization 
↓ 
Department Assignment 
↓ 
Investigation 
↓ 
Resolution 
↓ 
Citizen Feedback 
↓ 
Closure 
SLA Monitoring 
Each case displays: 
 Target resolution date  
 Remaining SLA  
 Breach risk  
 Escalation level  
Status colors: 
 Green – On Track  
 Yellow – Approaching SLA  
 Orange – At Risk  
 Red – SLA Breached  
AI SLA Risk Prediction 
Example: 
Prediction 
Case RC-10428 has an 89% probability of SLA breach. 
Recommendation 
Assign additional verification oAicer. 
Expected delay reduction 
42% 
Department Assignment 
Cases may be assigned to: 
 Municipal Engineering  
 Electricity Department  
 Water Supply  
 Roads Department  
 Revenue Department  
 Social Welfare  
 Disaster Management  
 Health Department  
 Relief Operations  
Assignments support: 
 Manual routing  
 AI-assisted routing  
 Rule-based automation  
Citizen Communication Timeline 
09:12 
Application Submitted 
↓ 
10:03 
Verification Started 
↓ 
13:20 
Additional Documents Requested 
↓ 
Next Day 
Citizen Uploaded Documents 
↓ 
Verification Continued 
Communication channels: 
 SMS  
 Email  
 Mobile App  
 WhatsApp (if integrated)  
 In-app notifications  
Internal Collaboration 
OAicers can: 
 Add notes  
 Mention departments  
 Attach files  
 Request field inspections  
 Schedule callbacks  
Internal notes remain hidden from citizens. 
Satisfaction Survey 
Sent automatically after case closure. 
Questions: 
 Was your issue resolved?  
 Was communication timely?  
 Was staA helpful?  
 Overall satisfaction  
 Additional comments  
Dashboard displays: 
 Response rate  
 Average rating  
 Department-wise satisfaction  
 Improvement trends  
Recovery Reports 
Generate: 
 Daily Citizen Recovery Report  
 Compensation Status Report  
 SLA Compliance Report  
 Department Performance Report  
 Grievance Resolution Report  
 Citizen Satisfaction Dashboard  
Export: 
 PDF  
 Excel  
 CSV  
AI Recovery Advisor 
Persistent right-side panel. 
Example: 
Recommendation 
Ward 18 has a high concentration of unresolved housing claims. 
Deploy two additional verification teams. 
Expected backlog reduction 
34% 
Confidence 
95% 
Loading State 
Skeleton loaders for: 
 Case queue  
 Citizen profile  
 Documents  
 AI panel  
 Analytics  
Empty State 
No pending recovery service requests. 
All citizen cases have been resolved. 
[View Historical Cases] 
Error State 
Unable to retrieve citizen recovery records. 
Retry 
Open Cached Case List 
Notify System Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatible forms  
 High-contrast mode  
 Plain-language workflows  
 Multilingual interface  
Responsive Behavior 
Desktop 
 Full case management workspace  
 Multi-panel review and communication  
Tablet 
 Case verification  
 Document review  
 Field inspection coordination  
Mobile 
Recovery oAicer mode: 
 View assigned cases  
 Upload inspection findings  
 Verify documents  
 Update case status  
 Communicate with citizens  
Citizen self-service functionality is handled in the dedicated citizen portal. 
Performance Targets 
Metric 
Target 
Workspace load <2 seconds 
Metric 
Target 
Case search 
<500 ms 
Document upload <2 seconds (metadata), background upload for files 
Case assignment <500 ms 
Dashboard refresh ≤10 seconds 
Report generation <5 seconds 
API Dependencies 
Citizen Recovery Services 
 Recovery Case API  
 Compensation API  
 Grievance API  
 Case Assignment API  
 SLA Management API  
Document Services 
 Document Upload API  
 OCR API  
 Verification API  
 Digital Signature API  
Intelligence Services 
 AI Case Classification API  
 SLA Prediction API  
 Sentiment Analysis API  
 Recommendation API  
Communication Services 
 Notification API  
 SMS API  
 Email API  
 WhatsApp Integration API  
 In-App Messaging API  
Analytics Services 
 Satisfaction Survey API  
 Performance Dashboard API  
 Department Analytics API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Recovery case created  
 Compensation request submitted  
 AI classification accepted  
 Case assigned  
 Documents verified  
 SLA warning triggered  
 Case resolved  
 Citizen feedback submitted  
 Report generated  
 Department escalation initiated  
Security & Permissions 
Role 
Permission 
Citizen Service OAicer Create, update, assign, and resolve recovery cases 
Recovery Case Manager Manage compensation workflows, approve case progression, 
monitor SLAs 
Department OAicer 
Disaster Management 
Head 
Commissioner 
Executive Observer 
Process assigned requests and update resolution progress 
View all recovery operations, approve escalations, monitor 
performance 
Executive oversight, analytics, policy-level approvals 
Read-only access to dashboards, reports, and performance 
metrics 
Citizen personal information, financial details, compensation records, uploaded 
documents, and communication history must be protected using role-based access 
control, encryption at rest and in transit, and immutable audit logging. Sensitive actions 
such as compensation approvals, document overrides, and SLA exceptions require 
justification and are fully traceable. 
Figma Design Notes 
The Citizen Service Recovery & Grievance Management screen should communicate 
transparency, responsiveness, and accountability. Case queues, citizen profiles, and 
SLA indicators should be immediately visible, while AI recommendations help oAicers 
prioritize work. The interface should reduce administrative burden through intelligent 
routing, document verification assistance, and clear communication timelines, 
ensuring citizens remain informed throughout the recovery process. 
PART 6 — Recovery, Citizen Services & Long-Term Resilience 
SCREEN 37 
Disaster Analytics, Executive Reporting & City Resilience Intelligence 
Screen Metadata 
Property 
Value 
Screen Name Disaster Analytics, Executive Reporting & City Resilience Intelligence 
Property 
Value 
Module 
Primary Users 
Secondary 
Users 
Priority 
Executive Intelligence & Strategic Planning 
Commissioner, Municipal Commissioner, Disaster Management 
Head 
Department Heads, Finance OAicers, Planning Department 
Executive Critical 
Authentication Required 
Devices 
Theme 
Desktop, Executive Display Wall, Tablet 
Executive Dark, Light, High-Contrast 
Refresh Interval Live (30 seconds) 
Screen Purpose 
This module provides strategic insights across the entire disaster lifecycle, enabling 
leadership to monitor city resilience, evaluate department performance, optimize 
investments, and guide future preparedness initiatives. 
Key capabilities include: 
 Executive dashboards  
 Disaster lifecycle analytics  
 Department scorecards  
 Financial oversight  
 Climate resilience analytics  
 Predictive intelligence  
 Compliance reporting  
 KPI benchmarking  
 AI strategic recommendations  
 Custom report generation  
Primary UX Goals 
Within 15 seconds, executives should understand: 
 Overall city resilience  
 Disaster response eAectiveness  
 Recovery performance  
 Financial utilization  
 Department performance  
 Emerging future risks  
Within 60 seconds, decision-makers should: 
 Identify weak areas  
 Compare historical events  
 Review investment priorities  
 Generate executive reports  
 Evaluate resilience trends  
Information Hierarchy 
Priority: 
1. Executive KPI Overview  
2. City Resilience Index  
3. Disaster Lifecycle Analytics  
4. Department Performance  
5. Financial Analytics  
6. Climate Risk Intelligence  
7. AI Strategic Advisor  
8. Executive Reports  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Analytics Search | Date Range | Filters | Notifications | User Profile                                    
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Executive KPI Cards                                                                                                  
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Insights Panel | Central Analytics Workspace | Right Intelligence Panel                                          
| 
|---------------------|-----------------------------|---------------------------------------------------------------------| 
| Resilience Index    | Multi-Year Trends           
| Department Scores   | GIS Risk Maps              
| AI Strategic Advisor                                                
| Forecasts                                                           
| Financial Overview  | Executive Dashboards       | Investment Recommendations                                          
| 
| Compliance          
| Comparative Analytics      | Emerging Risks                                                      
| 
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Reports | Scorecards | Benchmarks | Audit | Exports | Timeline                                     
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Executive KPI Cards 
City Resilience Index 
84 / 100 
Preparedness Score 
91% 
Emergency Response EAectiveness 
88% 
Recovery Completion 
74% 
Infrastructure Resilience 
82% 
Climate Risk Level 
Moderate 
Annual Disaster Expenditure 
₹612 Crore 
AI Readiness Score 
89% 
City Resilience Index 
A composite indicator derived from: 
 Infrastructure readiness  
 Emergency preparedness  
 Shelter readiness  
 Response time  
 Recovery eAiciency  
 Community awareness  
 Resource availability  
 Climate adaptation  
 Financial preparedness  
 Digital infrastructure resilience  
Displayed as: 
 Overall score  
 Department contribution  
 Historical trend  
 Benchmark against targets  
Disaster Lifecycle Analytics 
Visualizes performance across four phases: 
Preparedness 
↓ 
Response 
↓ 
Relief 
↓ 
Recovery 
↓ 
Resilience 
Each phase includes: 
 KPIs  
 Timeline  
 Bottlenecks  
 Lessons learned  
 Improvement opportunities  
Historical Event Comparison 
Compare multiple cyclone events. 
Example: 
Metric 
Cyclone 2023 Cyclone 2025 Current Event 
Response Time 95 min 
Evacuation Rate 72% 
Shelter Readiness 70% 
Recovery Duration 62 days 
68 min 
86% 
88% 
48 days 
41 min 
94% 
97% 
31 days (Projected) 
Department Performance Scorecards 
Departments monitored: 
 Disaster Management  
 Engineering  
 Roads & Buildings  
 Water Supply  
 Electricity  
 Health  
 Revenue  
 Police  
 Fire & Rescue  
 Communications  
Metrics: 
 SLA compliance  
 Response time  
 Resource utilization  
 Citizen satisfaction  
 Budget utilization  
 Operational eAiciency  
GIS Strategic Intelligence 
Interactive map layers: 
 Multi-year cyclone paths  
 Flood recurrence  
 Coastal erosion  
 Vulnerable communities  
 Infrastructure resilience  
 Critical asset density  
 Population growth  
 Climate exposure  
 Historical damage heatmaps  
Supports side-by-side comparison across years. 
Financial Analytics 
Executive financial dashboard tracks: 
 Preparedness budget  
 Emergency expenditure  
 Relief distribution costs  
 Recovery expenditure  
 Infrastructure reconstruction  
 Grant utilization  
 Insurance recovery  
 Contingency fund usage  
Visualizations: 
 Budget vs Actual  
 Cost by department  
 Monthly expenditure  
 Funding source distribution  
Investment Prioritization Dashboard 
Projects ranked by: 
 Risk reduction  
 Population protected  
 Cost-benefit ratio  
 Climate resilience impact  
 Regulatory priority  
 Expected ROI  
Example: 
Project 
Coastal Embankment Upgrade 
Investment 
₹58 Crore 
Expected Risk Reduction 
38% 
Priority 
Very High 
Climate Risk Intelligence 
Displays: 
 Cyclone frequency trend  
 Rainfall anomaly  
 Sea-level rise  
 Storm surge probability  
 Heat map of vulnerable zones  
 Climate adaptation score  
Forecast horizons: 
 1 year  
 5 years  
 10 years  
 25 years  
AI Strategic Advisor 
Persistent right-side intelligence panel. 
Example: 
Recommendation 
Increase investment in coastal pumping stations within Zones 3 and 4. 
Expected Benefits 
Reduce flood exposure for approximately 42,000 residents. 
Estimated Return 
31% reduction in future emergency response costs. 
Confidence 
97% 
Executive Timeline 
Preparedness Campaign Completed 
↓ 
Cyclone Warning Issued 
↓ 
Mass Evacuation 
↓ 
Emergency Response 
↓ 
Relief Operations 
↓ 
Recovery Projects 
↓ 
Resilience Improvements 
Predictive Analytics 
AI forecasts: 
 Future evacuation demand  
 Shelter expansion needs  
 Budget requirements  
 Infrastructure failures  
 Resource shortages  
 Volunteer requirements  
 Emergency staAing  
 Climate vulnerability  
Each forecast includes: 
 Confidence interval  
 Assumptions  
 Recommended mitigation actions  
Compliance Dashboard 
Tracks compliance with: 
 NDMA Guidelines  
 SDMA Procedures  
 Municipal SOPs  
 ISO 22320  
 Internal Audit Requirements  
 Disaster Management Act  
Displays: 
 Compliance %  
 Open findings  
 Corrective actions  
 Audit schedule  
Executive Report Builder 
Generate reports: 
 Executive Summary  
 Disaster Performance Review  
 Preparedness Assessment  
 Financial Summary  
 Recovery Status  
 Climate Risk Assessment  
 Department Scorecards  
 Annual Resilience Report  
Output formats: 
 PDF  
 Excel  
 PowerPoint  
 CSV  
Supports scheduled delivery and digital signatures. 
Benchmarking 
Compare with: 
 Previous disaster events  
 Other municipalities  
 State averages  
 National targets  
 SDG indicators  
 UNDRR resilience benchmarks  
Analytics Dashboard 
Includes: 
 KPI trends  
 Heatmaps  
 Sankey diagrams  
 Radar charts  
 Geographic analytics  
 Waterfall charts  
 Time-series forecasting  
 Correlation analysis  
Users can: 
 Drill down  
 Filter  
 Bookmark  
 Share  
 Export  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Charts  
 GIS maps  
 AI insights  
 Reports  
Empty State 
No analytics available for the selected period. 
Adjust filters or select another reporting range. 
Error State 
Unable to retrieve executive analytics. 
Retry 
Load Last Successful Snapshot 
Notify Analytics Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard-only navigation  
 Screen-reader optimized dashboards  
 High-contrast visualizations  
 Accessible chart descriptions  
 Adjustable font scaling  
Responsive Behavior 
Executive Display Wall 
 Large KPI cards  
 Live resilience index  
 Rotating strategic dashboards  
 Auto-refresh analytics  
Desktop 
 Complete executive workspace  
 Interactive drill-down analytics  
Tablet 
 KPI review  
 Report approval  
 Strategic summaries  
Mobile 
Executive snapshot mode: 
 Key KPIs  
 Critical alerts  
 AI recommendations  
 Report access  
Advanced analytics editing remains desktop-first. 
Performance Targets 
Metric 
Dashboard load 
Chart rendering 
Target 
<3 seconds 
<1 second 
Metric 
Target 
GIS layer switch 
<1.5 seconds 
Forecast generation <5 seconds 
Report generation <10 seconds 
Dashboard refresh ≤30 seconds 
API Dependencies 
Analytics Services 
 Executive Dashboard API  
 KPI Aggregation API  
 Benchmarking API  
 Forecast API  
Financial Services 
 Budget API  
 Expenditure API  
 Grant Management API  
Intelligence Services 
 AI Strategic Advisor API  
 Risk Prediction API  
 Investment Prioritization API  
 Climate Analytics API  
GIS Services 
 Historical Hazard API  
 Resilience Mapping API  
 Infrastructure Exposure API  
Reporting Services 
 Report Builder API  
 Scheduled Reports API  
 Export API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics Warehouse API  
 WebSocket Gateway  
Analytics Events 
Track: 
 Executive dashboard viewed  
 Forecast generated  
 Benchmark comparison opened  
 Report exported  
 AI recommendation acknowledged  
 KPI drill-down accessed  
 Compliance report reviewed  
 Investment scenario evaluated  
 Dashboard shared  
 Scheduled report configured  
Security & Permissions 
Role 
Commissioner 
Disaster Management 
Head 
Permission 
Full access to executive analytics, forecasts, reports, and 
strategic recommendations 
View and manage resilience analytics, preparedness metrics, 
and department scorecards 
Role 
Permission 
Finance OAicer 
Department Head 
Executive Observer 
Access financial analytics, budgets, expenditure, and funding 
reports 
View department-specific KPIs, benchmarks, and 
improvement plans 
Read-only access to dashboards, reports, and historical 
analytics 
Executive dashboards may include sensitive operational, financial, and strategic 
planning data. Access must be protected using role-based permissions, encryption, 
immutable audit logs, and configurable report-level security. Forecast assumptions and 
AI recommendations should be versioned and traceable to ensure governance and 
accountability. 
Figma Design Notes 
The Disaster Analytics, Executive Reporting & City Resilience Intelligence screen should 
embody executive clarity, strategic insight, and long-term resilience planning. The 
interface should prioritize concise KPIs, trend analysis, and actionable intelligence 
while enabling seamless drill-down into operational details. The City Resilience Index 
should be the visual centerpiece, surrounded by financial health, department 
performance, climate risk, and AI-driven investment recommendations to support 
evidence-based governance. 
PART 7 — Platform Administration & Governance 
SCREEN 38 
System Administration, Configuration & Platform Governance 
Screen Metadata 
Property 
Value 
Screen Name System Administration & Platform Governance 
Module 
Primary Users 
Administration 
Super Administrator 
Property 
Value 
Secondary Users Security Administrator, IT Operations, Platform Administrator 
Priority 
Critical 
Authentication MFA Mandatory 
Devices 
Theme 
Desktop 
Dark, Light 
Refresh Interval 30 Seconds 
Screen Purpose 
Provides centralized administration for the complete CycloneGuard ecosystem. 
This module governs: 
 User management  
 Identity  
 RBAC  
 Departments  
 Approval workflows  
 Master data  
 Security  
 Notifications  
 Integrations  
 APIs  
 Monitoring  
 Compliance  
 Audit  
 Backup  
 Disaster Recovery  
Primary UX Goals 
Within 20 seconds administrators should know: 
 Platform health  
 Active users  
 Security posture  
 Failed integrations  
 Pending approvals  
 System alerts  
Within 2 minutes they should be able to: 
 Create users  
 Modify permissions  
 Configure workflows  
 Connect integrations  
 Review audit logs  
 Change platform settings  
Information Hierarchy 
Priority 
1. Platform Health  
2. Identity & Access  
3. Organization  
4. Workflows  
5. Integrations  
6. Security  
7. Monitoring  
8. Audit  
Desktop Layout 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Header | Search | Global Settings | Alerts | Notifications | Admin Profile                                           
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Platform KPI Cards                                                                                                    
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Navigation             
| 
| Configuration Workspace                
| Intelligence Panel                                  
|------------------------|----------------------------------------|-----------------------------------------------------| 
| Users                  
| Roles                  
| Departments            
| Workflows              
| Notifications          
| APIs                   
| Security               
| Monitoring             
| Audit                  
| Selected Configuration                 
| Forms                                 
| Security Advisor                                    
| Compliance Score                                    
| Tables                                
| Editors                               
| Live Preview                          
|                                       
|                                       
|                                       
|                                       
| Health Alerts                                       
| AI Recommendations                                  
|                                                     
|                                                     
|                                                     
|                                                     
|                                                     
| 
| 
| 
| 
| 
| 
| 
| 
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel : Logs | Changes | Version History | Activity Timeline | Export                                         
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
Platform KPI Cards 
Active Users 
1,482 
Online Users 
328 
Platform Health 
99.97% 
Healthy 
Green 
Failed Integrations 
2 
Orange 
Pending Workflow Approvals 
14 
Security Alerts 
3 
Critical 
Failed Login Attempts 
12 
Compliance Score 
96% 
Administration Navigation 
Modules 
 User Management  
 Role Management  
 Permission Matrix  
 Departments  
 Organizational Hierarchy  
 Workflow Configuration  
 Master Data  
 Notification Center  
 API Management  
 Integration Hub  
 Monitoring  
 Security Center  
 Audit Center  
 Backup  
 Disaster Recovery  
 Tenant Settings  
User Management 
Displays 
User 
Department 
Role 
Status 
Rahul Sharma Disaster Management Operator Active 
Priya Rao 
Kumar 
Actions 
 Create  
 Edit  
Engineering 
Manager Active 
Commissioner OAice Executive Inactive 
 Disable  
 Lock  
 Reset Password  
 Force Logout  
 MFA Reset  
User Profile 
Displays 
Name 
Rahul Sharma 
Employee ID 
EMP-10428 
Department 
Emergency Operations 
Role 
Operations Manager 
Status 
Active 
MFA 
Enabled 
Last Login 
Today 09:22 
Location 
GVMC HQ 
Identity & Authentication 
Supports 
 Microsoft Entra ID  
 LDAP  
 Active Directory  
 OAuth2  
 OpenID Connect  
 SAML 2.0  
Authentication methods 
 Password  
 MFA  
 Authenticator App  
 FIDO2 Security Keys  
 Smart Cards  
 OTP  
 Biometric Authentication (optional)  
Role-Based Access Control (RBAC) 
Built-in Roles 
 Super Administrator  
 Platform Administrator  
 Security Administrator  
 Commissioner  
 Disaster Management Head  
 Department Head  
 Field Supervisor  
 Shelter Manager  
 Relief Manager  
 Read-Only Executive  
Permission Matrix 
Granular permissions include: 
Resource View Create Update Delete Approve Export 
Assets 
✓ ✓ ✓ ✓ ✓ ✓ 
Incidents ✓ 
Alerts 
✓ 
✓ 
— ✓ ✓ 
✓ ✓ ✓ ✓ ✓ ✓ 
Reports ✓ — — — ✓ ✓ 
Supports: 
 Resource-level permissions  
 Action-level permissions  
 Attribute-level restrictions  
 Time-based access  
 Location-based access  
 Emergency override permissions  
Organization Management 
Supports hierarchical administration: 
Commissioner 
↓ 
Municipal Commissioner 
↓ 
Departments 
↓ 
Zones 
↓ 
Wards 
↓ 
Field OAices 
↓ 
Individual Users 
Department Configuration 
Departments include: 
 Disaster Management  
 Engineering  
 Roads & Buildings  
 Water Supply  
 Electricity  
 Health  
 Police  
 Fire & Rescue  
 Revenue  
 IT  
 Finance  
 Communications  
Each department defines: 
 Managers  
 Approval chain  
 Budget owner  
 Contact information  
Workflow Configuration 
Administrators can configure: 
 Incident approval  
 Public alert approval  
 Procurement workflow  
 Compensation approval  
 Recovery project approval  
 User onboarding  
 Leave approvals  
 Escalation policies  
Workflow Designer: 
Trigger 
↓ 
Conditions 
↓ 
Approvals 
↓ 
Notifications 
↓ 
Completion 
↓ 
Audit 
Supports drag-and-drop editing and versioning. 
Master Data Management 
Maintain configurable reference data: 
 Asset categories  
 Incident types  
 Hazard classifications  
 Shelter types  
 Vehicle types  
 Vendor categories  
 Geographic boundaries  
 Notification templates  
 Department lists  
 Severity levels  
Each change requires approval (configurable). 
Notification Configuration 
Channels: 
 SMS  
 Email  
 Push Notifications  
 WhatsApp  
 IVRS  
 Teams  
 Slack (optional)  
 Webhooks  
Settings include: 
 Templates  
 Variables  
 Localization  
 Retry policies  
 Quiet hours  
 Escalation rules  
API & Integration Management 
Integrated systems: 
 IMD Weather  
 CWC Flood Data  
 ISRO Satellite Services  
 Police CAD  
 Fire Dispatch  
 Hospital Information Systems  
 GIS Services  
 ERP  
 Finance Systems  
 HRMS  
 IoT Platform  
 Azure Services  
Each integration displays: 
 Status  
 Last Sync  
 Response Time  
 Error Rate  
 Authentication Method  
Security Center 
Security dashboard includes: 
 MFA adoption  
 Password policy compliance  
 Account lockouts  
 Suspicious logins  
 Session monitoring  
 Device trust  
 Privileged access usage  
 Encryption status  
 Certificate expiry  
Security Policies 
Configurable policies: 
 Password complexity  
 Password expiration  
 Session timeout  
 Idle timeout  
 Device restrictions  
 IP allowlists  
 Geo-fencing  
 Concurrent session limits  
 API rate limits  
Audit Center 
Tracks every platform action. 
Each audit entry contains: 
 User  
 Timestamp  
 Module  
 Action  
 Previous Value  
 New Value  
 IP Address  
 Device  
 Correlation ID  
Audit records are immutable. 
Monitoring Dashboard 
Real-time monitoring: 
 CPU  
 Memory  
 Database  
 Storage  
 Queue health  
 API latency  
 WebSocket connections  
 Background jobs  
 Integration status  
Health indicators: 
 Healthy  
 Warning  
 Critical  
Backup & Disaster Recovery 
Configuration includes: 
 Daily backups  
 Hourly incremental backups  
 Cross-region replication  
 Point-in-time restore  
 Backup retention  
 Recovery testing schedule  
Displays: 
Last Backup 
02:00 Today 
Status 
Successful 
Restore Point 
Available 
RPO 
15 Minutes 
RTO 
30 Minutes 
Tenant Configuration 
Supports: 
 Multi-tenant deployment  
 Branding  
 Localization  
 Time zone  
 Date formats  
 Currency  
 Regional compliance  
 Feature flags  
AI Security Advisor 
Persistent right panel. 
Example: 
Recommendation 
Enable mandatory MFA for remaining 18 privileged accounts. 
Expected Improvement 
Reduce account compromise risk by 84%. 
Priority 
Critical 
Confidence 
99% 
Loading State 
Skeleton loaders for: 
 User tables  
 Permission matrix  
 Monitoring dashboard  
 Audit logs  
 Integrations  
Empty State 
No configuration available. 
Create your first organization configuration. 
[Start Setup Wizard] 
Error State 
Unable to load platform configuration. 
Retry 
Load Cached Configuration 
Notify Platform Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatibility  
 High-contrast mode  
 Accessible forms  
 Focus indicators  
 ARIA-compliant tables and dialogs  
Responsive Behavior 
Desktop 
Complete administration experience. 
Tablet 
Read-only monitoring plus limited user management. 
Mobile 
Emergency administration only: 
 Unlock accounts  
 View health alerts  
 Approve emergency workflows  
 Review audit events  
Configuration editing remains desktop-only. 
Performance Targets 
Metric 
Console load 
User search 
Permission update 
Monitoring refresh 
Audit query 
Target 
<2.5 seconds 
<300 ms 
<500 ms 
≤30 seconds 
<2 seconds 
Backup status refresh <10 seconds 
API Dependencies 
Identity Services 
 User Management API  
 Authentication API  
 MFA API  
 RBAC API  
 Session Management API  
Configuration Services 
 Workflow API  
 Master Data API  
 Organization API  
 Notification Template API  
Integration Services 
 API Gateway  
 Integration Hub API  
 Webhook Management API  
 External Connector API  
Security Services 
 Security Policy API  
 Audit Log API  
 Compliance API  
 Threat Detection API  
Monitoring Services 
 Infrastructure Metrics API  
 Health Monitoring API  
 Backup API  
 Disaster Recovery API  
Infrastructure 
 Authentication Gateway  
 Analytics API  
 Notification API  
 Configuration Store  
Analytics Events 
Track: 
 User created  
 Role assigned  
 Permission modified  
 Workflow published  
 Integration added  
 Security policy updated  
 MFA reset  
 Backup initiated  
 Restore executed  
 Audit report exported  
Security & Permissions 
Role 
Super Administrator 
Permission 
Unrestricted platform administration 
Platform Administrator Platform configuration, integrations, monitoring, and 
maintenance 
Security Administrator Identity, RBAC, MFA, audit, security policies, and compliance 
IT Operations 
Department 
Administrator 
Infrastructure monitoring, backups, disaster recovery, and 
system health 
Manage users and configuration within assigned department 
only 
Role 
Permission 
Auditor 
Read-only access to audit logs, compliance reports, and 
security events 
All administrative actions must require strong authentication, generate immutable audit 
records, and support configurable approval workflows for high-risk changes. Critical 
operations—such as RBAC modifications, integration credential updates, tenant 
configuration changes, and disaster recovery actions—should support four-eyes 
approval and optional just-in-time privileged access. 
Figma Design Notes 
The System Administration, Configuration & Platform Governance screen should convey 
enterprise control, security, and operational trust. The navigation should clearly 
separate identity, configuration, integrations, monitoring, and governance functions. 
Platform health and security alerts should always remain visible, while administrative 
workflows should minimize the risk of accidental changes through confirmations, 
previews, version history, and rollback capabilities. 
PART 7 — Platform Administration & Governance 
SCREEN 39 
AI Operations Center (AIOps), Platform Monitoring & Incident Management 
Screen Metadata 
Property 
Value 
Screen Name AI Operations Center (AIOps) 
Module 
Primary Users 
Platform Operations 
Site Reliability Engineers (SRE), IT Operations 
Secondary Users Security Operations, Platform Administrators, DevOps Engineers 
Priority 
Critical 
Authentication Required + MFA 
Devices 
Desktop, NOC Display Wall 
Property 
Value 
Theme 
Dark Operations, Light 
Refresh Interval Live (1–5 seconds) 
Screen Purpose 
This module continuously monitors every component of the CycloneGuard platform, 
detects anomalies, predicts failures, automates remediation where appropriate, and 
provides complete operational observability. 
Supported capabilities: 
 Infrastructure monitoring  
 Application performance monitoring (APM)  
 Distributed tracing  
 Log analytics  
 AI anomaly detection  
 Incident management  
 Capacity planning  
 SLA/SLO monitoring  
 Auto-remediation  
 Root cause analysis  
Primary UX Goals 
Within 10 seconds, operators should know: 
 Platform health  
 Critical incidents  
 Service availability  
 Infrastructure utilization  
 AI service health  
 API failures  
Within 60 seconds, operators should: 
 Identify root cause  
 Execute remediation  
 Escalate incidents  
 Review logs and traces  
 Restore degraded services  
Information Hierarchy 
Priority: 
1. Platform Health  
2. Critical Alerts  
3. Service Dependency Map  
4. Infrastructure Metrics  
5. AI Insights  
6. Incident Queue  
7. Observability  
8. Capacity Forecasts  
Desktop Layout 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Header | Search | Time Range | Environment | Alerts | Notifications | Operator Profile                              
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Platform Health KPI Cards                                                                                             
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Left Operations Panel | Central Observability Workspace | Right AI Intelligence Panel                                 
| 
|-----------------------|---------------------------------|---------------------------------------------------------------------| 
| Active Incidents      | Service Dependency Graph        
| 
| Alerts               
| Live Metrics                    
| AI Root Cause Analysis                                              
| Failure Predictions                                                 
| Services             
| 
| Infrastructure       
| Distributed Traces              
| Log Explorer                    
| Auto-Remediation Suggestions                                        
| Capacity Forecast                                                   
| 
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Timeline | Audit | Incidents | Changes | Metrics Explorer | Reports                                
| 
+-----------------------------------------------------------------------------------------------------------------------+ 
Platform Health KPI Cards 
Overall Platform Health 
99.98% 
Healthy 
Active Critical Incidents 
2 
Service Availability 
99.995% 
Average API Response Time 
142 ms 
Active AI Models 
14 / 14 Healthy 
Infrastructure Utilization 
68% 
Log Events / Minute 
18,240 
Automated Recoveries Today 
27 
Global Platform Health 
Monitors: 
 Web Frontend  
 Mobile Backend  
 API Gateway  
 Authentication Service  
 GIS Engine  
 AI Services  
 Database Cluster  
 Notification Engine  
 Integration Hub  
 File Storage  
 Message Queue  
 Analytics Engine  
Status colors: 
 Green – Healthy  
 Blue – Scaling  
 Yellow – Degraded  
 Orange – Warning  
 Red – Critical  
 Grey – OAline  
Service Dependency Map 
Interactive topology graph showing relationships between: 
Users 
↓ 
Web Frontend 
↓ 
API Gateway 
↓ 
Authentication 
↓ 
Business Services 
↓ 
AI Engine 
↓ 
Database Cluster 
↓ 
External Integrations 
Selecting a node highlights: 
 Upstream dependencies  
 Downstream impact  
 Current latency  
 Error rate  
 TraAic volume  
Infrastructure Monitoring 
Tracks: 
 CPU  
 Memory  
 Disk  
 Network  
 GPU utilization  
 Storage IOPS  
 Kubernetes nodes  
 Containers  
 Virtual Machines  
 Load Balancers  
Each metric supports: 
 Historical trends  
 Threshold alerts  
 Forecasts  
 Drill-down  
Application Performance Monitoring (APM) 
Displays: 
 Request throughput  
 Average latency  
 Error rate  
 Slow transactions  
 Exception frequency  
 Database query performance  
 Cache hit ratio  
Distributed Tracing 
Visualizes end-to-end request flow. 
Example: 
Citizen Portal 
↓ 
API Gateway 
↓ 
Authentication 
↓ 
Compensation Service 
↓ 
Database 
↓ 
Notification Service 
↓ 
Response Returned 
Each span displays: 
 Duration  
 Errors  
 Retries  
 Dependencies  
Log Analytics 
Unified search across: 
 Application logs  
 Security logs  
 API logs  
 Audit logs  
 Kubernetes logs  
 Infrastructure logs  
 Integration logs  
Features: 
 Full-text search  
 Saved queries  
 Live streaming  
 Log correlation  
 Export  
AI Anomaly Detection 
Continuously detects: 
 Unusual CPU spikes  
 Latency increases  
 TraAic anomalies  
 Login anomalies  
 Database slowdowns  
 Integration failures  
 Memory leaks  
Each anomaly includes: 
 Severity  
 Confidence  
 Probable cause  
 Suggested action  
AI Root Cause Analysis 
Persistent intelligence panel. 
Example: 
Detected Issue 
High API latency 
Probable Root Cause 
Database index fragmentation 
Confidence 
96% 
AAected Services 
Incident Management 
Citizen Portal 
Analytics API 
Suggested Action 
Execute automated index optimization. 
Incident Management 
Incident lifecycle: 
Detected 
↓ 
Validated 
↓ 
Assigned 
↓ 
Investigating 
↓ 
Mitigated 
↓ 
Resolved 
↓ 
Post-Incident Review 
Incident card displays: 
 Priority  
 Impact  
 Owner  
 ETA  
 Linked alerts  
 Related changes  
Auto-Remediation Center 
Supported automated actions: 
 Restart service  
 Scale deployment  
 Clear cache  
 Rotate credentials  
 Reconnect integrations  
 Restart failed jobs  
 Drain unhealthy node  
 Rebalance workloads  
Automation policies: 
 Manual Approval  
 Semi-Automatic  
 Fully Automatic  
Capacity Planning 
Forecasts: 
 CPU exhaustion  
 Storage growth  
 Database capacity  
 API traAic  
 AI inference demand  
 Concurrent users  
 Disaster peak loads  
Forecast horizons: 
 24 Hours  
 7 Days  
 30 Days  
 6 Months  
SLA & SLO Dashboard 
Tracks: 
 API uptime  
 Incident response SLA  
 Recovery time objective (RTO)  
 Recovery point objective (RPO)  
 Error budget  
 MTTR (Mean Time to Recovery)  
 MTBF (Mean Time Between Failures)  
Example: 
Metric 
Availability 
MTTR 
Current Target 
99.995% 99.99% 
11 min <15 min 
Error Budget Used 18% 
<25% 
AI Failure Prediction 
Example: 
Prediction 
Notification Service memory usage will exceed safe threshold within 3 hours. 
Confidence 
94% 
Recommendation 
Scale service to four instances. 
Change Correlation 
Displays recent deployments and configuration changes alongside incidents to identify 
change-related failures. 
Fields: 
 Change ID  
 Deployment time  
 Service aAected  
 Approval status  
 Rollback available  
Operational Timeline 
09:10 
TraAic Spike Detected 
↓ 
09:12 
AI Generated Alert 
↓ 
09:14 
Database Latency Increased 
↓ 
09:16 
Auto Scaling Triggered 
↓ 
09:18 
Latency Normalized 
↓ 
09:21 
Incident Closed 
Reports 
Generate: 
 Daily Operations Report  
 Availability Report  
 Incident Summary  
 Capacity Forecast  
 SLA Compliance Report  
 Root Cause Analysis Report  
 Executive Operations Summary  
Export: 
 PDF  
 Excel  
 CSV  
 JSON  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Service graph  
 Metrics  
 Logs  
 AI recommendations  
Empty State 
No active operational incidents. 
All monitored services are healthy. 
Error State 
Unable to retrieve observability metrics. 
Retry 
Load Cached Dashboard 
Notify Platform Operations 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatible monitoring tables  
 High-contrast mode  
 Accessible charts with text summaries  
 Adjustable refresh controls  
Responsive Behavior 
Network Operations Center (NOC) 
 Large wallboard mode  
 Auto-rotating dashboards  
 Continuous live metrics  
 Alert prioritization  
Desktop 
 Complete observability workspace  
 Multi-panel incident investigation  
Tablet 
 Incident monitoring  
 Alert acknowledgment  
 Basic remediation actions  
Mobile 
Operations on-call mode: 
 Receive critical alerts  
 Acknowledge incidents  
 Execute approved remediation runbooks  
 View service health  
 Join incident bridge  
Complex observability workflows remain desktop-focused. 
Performance Targets 
Metric 
Dashboard load 
Metric refresh 
Log search 
Trace rendering 
Incident creation 
Target 
<2 seconds 
1–5 seconds 
<2 seconds 
<1 second 
<500 ms 
AI analysis generation <5 seconds 
API Dependencies 
Observability Services 
 Metrics API  
 Logs API  
 Tracing API  
 Health Check API  
 Alert Management API  
Incident Services 
 Incident Management API  
 Problem Management API  
 Change Management API  
 Runbook Automation API  
Intelligence Services 
 AI Root Cause API  
 Failure Prediction API  
 Capacity Forecast API  
 Anomaly Detection API  
Infrastructure Services 
 Kubernetes API  
 VM Monitoring API  
 Database Monitoring API  
 Network Monitoring API  
Notification Services 
 SMS API  
 Email API  
 Teams Integration API  
 Pager Integration API  
 Push Notification API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics Warehouse API  
 Configuration Store  
Analytics Events 
Track: 
 Alert acknowledged  
 Incident created  
 Root cause analysis opened  
 Auto-remediation executed  
 Manual remediation initiated  
 Capacity forecast viewed  
 SLA breach detected  
 Change correlated  
 Report exported  
 Incident closed  
Security & Permissions 
Role 
Site Reliability Engineer 
(SRE) 
IT Operations Engineer 
Platform Administrator 
Security Operations 
Analyst 
Executive Observer 
Permission 
Full observability, incident response, and remediation 
management 
Monitor infrastructure, acknowledge alerts, execute 
approved runbooks 
Configure monitoring, thresholds, integrations, and alert 
policies 
View security-related telemetry and correlate operational 
incidents 
Read-only access to operational dashboards and 
availability reports 
All operational actions—including incident acknowledgements, remediation 
executions, configuration changes, and AI recommendation approvals—must be 
authenticated, authorized, and immutably audited. Automated remediation policies 
should support configurable approval gates and rollback mechanisms for high-impact 
actions. 
Figma Design Notes 
The AI Operations Center should resemble a modern Network Operations Center 
(NOC) with an emphasis on real-time awareness, rapid diagnosis, and operational 
confidence. The service dependency graph should dominate the center of the 
workspace, while AI-generated insights, active incidents, and platform health remain 
persistently visible. Color usage should clearly distinguish healthy systems from 
degraded and critical states without overwhelming operators. 
PART 7 — Platform Administration & Governance 
SCREEN 40 
Platform Audit, Compliance, Data Governance & Digital Twin Governance 
Screen Metadata 
Property 
Value 
Screen Name Platform Audit, Compliance & Governance 
Module 
Enterprise Governance 
Primary Users Chief Governance OAicer, Chief Information Security OAicer (CISO), 
Compliance Manager 
Secondary 
Users 
Priority 
Commissioner, Internal Audit Team, Data Stewards, AI Governance 
Committee 
Enterprise Critical 
Authentication MFA + Privileged Access 
Devices 
Theme 
Desktop 
Executive Dark, Light 
Refresh Interval 1 Minute 
Screen Purpose 
This module ensures that every aspect of CycloneGuard operates under strong 
governance, accountability, transparency, and regulatory compliance. 
Core capabilities include: 
 Enterprise audit management  
 Regulatory compliance  
 Data governance  
 Metadata catalog  
 Data lineage  
 Data quality monitoring  
 Privacy governance  
 AI model governance  
 Digital Twin governance  
 Policy management  
 Enterprise risk management  
Primary UX Goals 
Within 30 seconds, governance oAicers should understand: 
 Compliance posture  
 Outstanding audit findings  
 Data quality issues  
 AI governance risks  
 Digital Twin integrity  
 Enterprise policy violations  
Within 2 minutes, they should be able to: 
 Investigate compliance gaps  
 Review audit evidence  
 Approve governance actions  
 Track remediation  
 Generate compliance reports  
Information Hierarchy 
Priority: 
1. Governance Scorecard  
2. Compliance Status  
3. Audit Center  
4. Data Governance  
5. AI Governance  
6. Digital Twin Governance  
7. Enterprise Risk  
8. Policy Management  
Desktop Layout 
+----------------------------------------------------------------------------------------------------------------------+ 
| Header | Governance Search | Framework Filter | Notifications | User Profile                                       
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Governance KPI Cards                                                                                                 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Left Governance Panel | Central Governance Workspace | Right Intelligence Panel                                      
| 
|-----------------------|------------------------------|------------------------------------------------------------------| 
| Compliance            
| Data Catalog          
| 
| Policies              
| AI Models             
| 
| Audit Evidence               
| Data Lineage                
| Risk Register               
| Governance Dashboard        
| AI Governance Advisor                                            
| Compliance Risk Prediction                                       
| Remediation Suggestions                                          
| Data Quality Insights                                            
| 
| 
+----------------------------------------------------------------------------------------------------------------------+ 
| Bottom Panel: Audit | Policies | Evidence | Reports | Version History | Activity Log                           
| 
+----------------------------------------------------------------------------------------------------------------------+ 
Governance KPI Cards 
Overall Governance Score 
95 / 100 
Compliance Score 
97% 
Open Audit Findings 
12 
Data Quality Score 
98.1% 
AI Models Governed 
14 / 14 
Policy Violations 
3 
Privacy Incidents 
0 
Digital Twin Integrity 
99.4% 
Enterprise Compliance Dashboard 
Supported frameworks: 
 NDMA Disaster Management Guidelines  
 Andhra Pradesh SDMA SOPs  
 Disaster Management Act  
 ISO 22320  
 ISO 27001  
 ISO 27701  
 NIST Cybersecurity Framework  
 NIST AI RMF  
 Organizational Governance Policies  
Each framework displays: 
 Overall compliance %  
 Controls implemented  
 Open gaps  
 Upcoming assessments  
 Evidence completeness  
Compliance Status Matrix 
Framework Score Findings Status 
ISO 22320 98% 1 
ISO 27001 96% 3 
NDMA SOP 99% 0 
NIST AI RMF 94% 2 
Compliant 
Minor Gaps 
Compliant 
Review Required 
Enterprise Audit Center 
Supports: 
 Internal audits  
 External audits  
 Regulatory inspections  
 Vendor audits  
 Security audits  
 AI governance audits  
Each audit records: 
 Auditor  
 Scope  
 Controls tested  
 Evidence  
 Findings  
 Risk level  
 Corrective actions  
 Due dates  
Audit Evidence Repository 
Evidence types: 
 Documents  
 SOPs  
 Screenshots  
 Logs  
 Reports  
 API records  
 Workflow approvals  
 Digital signatures  
 System exports  
 Configuration snapshots  
Supports: 
 Version history  
 Evidence expiration reminders  
 Immutable storage  
 Digital integrity verification  
Data Governance Center 
Governed domains: 
 Citizens  
 Assets  
 Incidents  
 Shelters  
 Relief  
 Weather  
 IoT  
 GIS  
 Financial  
 AI  
Each domain displays: 
 Owner  
 Steward  
 Classification  
 Quality  
 Retention policy  
Data Classification 
Supported classifications: 
 Public  
 Internal  
 Confidential  
 Restricted  
 Critical Infrastructure Sensitive  
Policies define: 
 Storage  
 Encryption  
 Sharing  
 Retention  
 Disposal  
Metadata Catalog 
Displays metadata for every dataset. 
Fields include: 
 Dataset name  
 Business definition  
 Owner  
 Steward  
 Source system  
 Update frequency  
 Sensitivity  
 Quality score  
 API dependency  
Supports semantic search. 
Data Lineage 
Interactive lineage graph. 
Example: 
IoT Sensors 
↓ 
Message Broker 
↓ 
Data Lake 
↓ 
Analytics Engine 
↓ 
AI Prediction Model 
↓ 
Executive Dashboard 
Users can trace upstream and downstream dependencies. 
Data Quality Dashboard 
Measures: 
 Completeness  
 Accuracy  
 Timeliness  
 Consistency  
 Uniqueness  
 Validity  
Example: 
Citizen Registry 
Completeness 
99.8% 
Duplicate Rate 
0.12% 
Quality 
Excellent 
Privacy & Consent Management 
Tracks: 
 Consent records  
 Data access requests  
 Data correction requests  
 Retention schedules  
 Data deletion requests  
 Legal holds  
Privacy metrics: 
 Consent coverage  
 Outstanding requests  
 Average fulfillment time  
AI Model Governance 
Displays all production AI models. 
Each model includes: 
 Model name  
 Version  
 Owner  
 Purpose  
 Training data version  
 Validation status  
 Accuracy  
 Drift score  
 Last retrained  
 Approval status  
AI Model Detail 
Model 
Cyclone Impact Prediction 
Version 
3.2.1 
Accuracy 
96.8% 
Bias Assessment 
Passed 
Explainability 
Available 
Production Status 
Approved 
AI Governance Controls 
Each model is evaluated for: 
 Fairness  
 Explainability  
 Robustness  
 Drift  
 Security  
 Human oversight  
 Validation frequency  
 Approval workflow  
Lifecycle: 
Development 
↓ 
Validation 
↓ 
Governance Review 
↓ 
Production 
↓ 
Monitoring 
↓ 
Retirement 
Digital Twin Governance 
Governed Digital Twin entities: 
 Buildings  
 Roads  
 Bridges  
 Shelters  
 Utilities  
 Vehicles  
 Sensors  
 Flood Models  
 Coastal Infrastructure  
Each twin displays: 
 Version  
 Last synchronization  
 Integrity score  
 Source systems  
 Calibration status  
Risk Register 
Enterprise risks include: 
 Cybersecurity  
 Climate  
 Infrastructure  
 Operational  
 Financial  
 Compliance  
 Third-party  
 AI  
 Data  
Each risk records: 
 Owner  
 Probability  
 Impact  
 Mitigation  
 Residual risk  
Policy Management 
Governance policies: 
 Data retention  
 Security  
 Disaster recovery  
 AI ethics  
 Privacy  
 Access control  
 Vendor management  
 Backup  
 Incident response  
Supports: 
 Drafting  
 Review  
 Approval  
 Publication  
 Version history  
 Acknowledgement tracking  
AI Governance Advisor 
Persistent intelligence panel. 
Example: 
Recommendation 
Cyclone Damage Assessment Model has exceeded its scheduled validation interval. 
Recommended Action 
Initiate governance review and model revalidation. 
Priority 
High 
Confidence 
98% 
Governance Timeline 
Policy Updated 
↓ 
Audit Initiated 
↓ 
Evidence Uploaded 
↓ 
Compliance Review 
↓ 
Remediation Completed 
↓ 
Control Verified 
↓ 
Audit Closed 
Governance Reports 
Generate: 
 Enterprise Compliance Report  
 Audit Summary  
 Data Quality Report  
 AI Governance Report  
 Digital Twin Governance Report  
 Risk Register  
 Policy Compliance Report  
 Executive Governance Dashboard  
Export: 
 PDF  
 Excel  
 CSV  
Loading State 
Skeleton loaders for: 
 KPI cards  
 Compliance dashboard  
 Data lineage  
 AI governance  
 Audit evidence  
Empty State 
No governance issues detected. 
All monitored controls are operating within acceptable thresholds. 
Error State 
Unable to retrieve governance information. 
Retry 
Load Cached Governance Snapshot 
Notify Governance Administrator 
Accessibility 
Supports: 
 WCAG 2.2 AA  
 Keyboard navigation  
 Screen-reader compatible governance tables  
 High-contrast mode  
 Accessible charts with textual summaries  
 Adjustable text scaling  
Responsive Behavior 
Desktop 
 Complete governance workspace  
 Interactive lineage visualization  
 Policy authoring  
 Audit evidence management  
Tablet 
 Compliance review  
 Audit approval  
 Policy acknowledgement  
Mobile 
Governance snapshot mode: 
 Compliance score  
 Critical risks  
 Open audit findings  
 Policy notifications  
Authoring and complex governance workflows remain desktop-focused. 
Performance Targets 
Metric 
Dashboard load 
Lineage graph rendering 
Metadata search 
Target 
<3 seconds 
<2 seconds 
<500 ms 
Governance report generation <10 seconds 
Audit evidence retrieval 
KPI refresh 
<2 seconds 
≤60 seconds 
API Dependencies 
Governance Services 
 Governance Dashboard API  
 Compliance API  
 Audit Management API  
 Policy Management API  
 Risk Register API  
Data Governance Services 
 Metadata Catalog API  
 Data Lineage API  
 Data Quality API  
 Data Classification API  
 Privacy Management API  
AI Governance Services 
 Model Registry API  
 Model Monitoring API  
 Bias Evaluation API  
 Explainability API  
 Drift Detection API  
Digital Twin Services 
 Digital Twin Registry API  
 Twin Synchronization API  
 Integrity Monitoring API  
Reporting Services 
 Governance Reporting API  
 Evidence Repository API  
 Export API  
Infrastructure 
 Authentication API  
 Audit Logging API  
 Analytics Warehouse API  
 Document Storage API  
Analytics Events 
Track: 
 Audit created  
 Audit finding resolved  
 Evidence uploaded  
 Policy approved  
 Policy acknowledged  
 AI model approved  
 Model revalidated  
 Data quality issue acknowledged  
 Risk accepted  
 Governance report exported  
Security & Permissions 
Role 
Permission 
Chief Governance OAicer Full governance oversight, policy approval, audit 
management, and enterprise risk ownership 
Compliance Manager 
Data Steward 
AI Governance 
Committee Member 
Internal Auditor 
Manage compliance frameworks, assessments, remediation 
plans, and reporting 
Maintain metadata, data quality, classifications, and lineage 
for assigned domains 
Review, approve, monitor, and retire AI models; oversee 
Responsible AI controls 
Read-only access to governance artifacts, audit evidence, 
policies, and compliance reports 
Role 
Permission 
Executive Observer 
Read-only access to governance dashboards, enterprise 
scorecards, and strategic reports 
All governance records—including audit evidence, policy changes, AI approvals, Digital 
Twin metadata, and risk decisions—must be tamper-evident, fully versioned, digitally 
signed where applicable, and protected by immutable audit logging. Sensitive 
governance actions should require multi-level approval and support complete 
traceability for regulatory inspections. 
Figma Design Notes 
The Platform Audit, Compliance, Data Governance & Digital Twin Governance screen 
should project trust, accountability, and executive oversight. The Governance 
Scorecard should be the primary focal point, with clear visual separation between 
compliance, audit, data governance, AI governance, and enterprise risk. Interactive 
lineage graphs, governance dashboards, and AI model registries should provide deep 
drill-down capabilities while preserving a clean executive experience. The design should 
emphasize confidence, transparency, and long-term operational sustainability. 
Screen 40 Status: Complete  
PART 7 — Platform Administration & Governance Status: Complete  
CycloneGuard GVMC Enterprise UI/UX Specification Status 
Part 
Part 1 – Authentication & Access  
Part 2 – Executive Dashboards  
Part 3 – GIS & Spatial Intelligence  
Part 4 – Asset Management  
Part 5 – Incident & Emergency Operations  
Part 6 – Recovery, Citizen Services & Long-Term Resilience  
Part 7 – Platform Administration & Governance  
Status 
Complete 
Complete 
Complete 
Complete 
Complete 
Complete 
Complete 
Entire Enterprise Screen Specification: Complete  