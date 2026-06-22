# ParaBank Home Page Requirement Document

## 1. Document Purpose
This document defines the functional requirements for the ParaBank home page and all menus/hyperlinks visible on the home screen.

It is intended to help QA, developers, and business stakeholders:
- verify current behavior,
- detect navigation regressions,
- and use the baseline for future enhancements.

## 2. Application Under Review
- Application: ParaBank demo site
- Home URL: https://parabank.parasoft.com/parabank/index.htm
- Validation method: Live UI exploration using Playwright MCP
- Validation date: 2026-06-22

## 3. Home Page Layout Requirements
The home page must contain the following sections.

### 3.1 Header Area
- ParaBank logo link (navigates to Home).
- Admin icon/logo link (navigates to Admin Page).
- Primary top navigation: About Us, Services, Products, Locations, Admin Page.
- Secondary compact links: home, about, contact.
- Non-clickable label: Solutions.

### 3.2 Left Panel (Customer Login)
- Heading: Customer Login.
- Username input.
- Password input.
- Log In button.
- Forgot login info? link.
- Register link.

### 3.3 Right Panel (Service and News)
- ATM Services label with service links.
- Online Services label with service links.
- Services Read More link.
- Latest News section with dated news links.
- News Read More link.

### 3.4 Footer
- Footer links: Home, About Us, Services, Products, Locations, Forum, Site Map, Contact Us.
- Visit link: www.parasoft.com.
- Copyright text.

## 4. Non-Clickable Menu/Label Requirements
The following texts are visible but are not hyperlinks and should not navigate:

| Label | Area | Expected Behavior |
|---|---|---|
| Solutions | Header (top navigation list) | Displayed as section label only, no navigation |
| ATM Services | Right Panel | Displayed as group title only, no navigation |
| Online Services | Right Panel | Displayed as group title only, no navigation |
| 06/22/2026 (news date text) | Right Panel / Latest News | Date label text only; clickable item is the news title |

## 5. Menu and Hyperlink Navigation Requirements
Notes:
- Some links appear in multiple places (header/footer/etc.) but must resolve to the same destination.
- External links may redirect from old HTTP paths to updated HTTPS destinations.

| Home Page Area | Menu/Hyperlink | Expected Navigation URL | Expected Destination Details |
|---|---|---|---|
| Header area (admin icon link) | Admin icon/logo | https://parabank.parasoft.com/parabank/admin.htm | Admin page titled "ParaBank | Administration" with sections: Administration, Database, JMS Service, Data Access Mode, Web Service, Application Settings. Admin forms/buttons include Initialize, Clean, Startup, Submit. |
| Header area (ParaBank logo) | ParaBank logo | https://parabank.parasoft.com/parabank/index.htm | Home page titled "ParaBank | Welcome | Online Banking" with Customer Login panel and right-panel services/news content. |
| Header primary nav | About Us | https://parabank.parasoft.com/parabank/about.htm | Page titled "ParaBank | About Us" with heading "ParaSoft Demo Website" and explanatory demo-site text including external parasoft.com reference. |
| Header primary nav | Services | https://parabank.parasoft.com/parabank/services.htm | Page titled "ParaBank | Services" showing service-related references/operations and links to WSDL/certificate resources. |
| Header primary nav | Products | http://www.parasoft.com/jsp/products.jsp | Redirects to https://www.parasoft.com/products/ with Parasoft products content and headings such as "Find the Testing Solution That Fits Your Team Perfectly" and product categories. |
| Header primary nav | Locations | http://www.parasoft.com/jsp/pr/contacts.jsp | Redirects to https://www.parasoft.com/solutions/ with Parasoft solutions overview headings and category blocks. |
| Header primary nav | Admin Page | https://parabank.parasoft.com/parabank/admin.htm | Same expected result as Admin icon link. |
| Header compact nav | home | https://parabank.parasoft.com/parabank/index.htm | Same expected result as ParaBank home. |
| Header compact nav | about | https://parabank.parasoft.com/parabank/about.htm | Same expected result as About Us. |
| Header compact nav | contact | https://parabank.parasoft.com/parabank/contact.htm | Customer Care page titled "ParaBank | Customer Care" with support form fields Name, Email, Phone, Message and button "Send to Customer Care". |
| Login panel | Forgot login info? | https://parabank.parasoft.com/parabank/lookup.htm | Customer Lookup page titled "ParaBank | Customer Lookup" with identity verification fields: first/last name, address details, ZIP, SSN and button "Find My Login Info". |
| Login panel | Register | https://parabank.parasoft.com/parabank/register.htm | Registration page titled "ParaBank | Register for Free Online Account Access" with heading "Signing up is easy!" and account-registration form fields (name, address, phone, SSN, username, password, repeated password). |
| Right panel: ATM Services | Withdraw Funds | https://parabank.parasoft.com/parabank/services/ParaBank?wsdl | XML/WSDL service definition document should render (browser XML view). |
| Right panel: ATM Services | Transfer Funds | https://parabank.parasoft.com/parabank/services/ParaBank?wsdl | XML/WSDL service definition document should render (browser XML view). |
| Right panel: ATM Services | Check Balances | https://parabank.parasoft.com/parabank/services/ParaBank?wsdl | XML/WSDL service definition document should render (browser XML view). |
| Right panel: ATM Services | Make Deposits | https://parabank.parasoft.com/parabank/services/ParaBank?wsdl | XML/WSDL service definition document should render (browser XML view). |
| Right panel: Online Services | Bill Pay | https://parabank.parasoft.com/parabank/services/bank?_wadl&_type=xml | XML/WADL service definition should render (application/xml). |
| Right panel: Online Services | Account History | https://parabank.parasoft.com/parabank/services/bank?_wadl&_type=xml | XML/WADL service definition should render (application/xml). |
| Right panel: Online Services | Transfer Funds | https://parabank.parasoft.com/parabank/services/bank?_wadl&_type=xml | XML/WADL service definition should render (application/xml). |
| Right panel | Read More (services) | https://parabank.parasoft.com/parabank/services.htm | Same expected result as Services page. |
| Right panel: Latest News | ParaBank Is Now Re-Opened | https://parabank.parasoft.com/parabank/news.htm#6 | News page titled "ParaBank | News" anchored to the selected article section. News page should list multiple dated news items and article text. |
| Right panel: Latest News | New! Online Bill Pay | https://parabank.parasoft.com/parabank/news.htm#5 | Same News page anchored to bill-pay article. |
| Right panel: Latest News | New! Online Account Transfers | https://parabank.parasoft.com/parabank/news.htm#4 | Same News page anchored to account-transfer article. |
| Right panel | Read More (news) | https://parabank.parasoft.com/parabank/news.htm | News listing page with article headings and date sections (06/22/2026, 05/23/2026, 05/16/2026, 01/01/2026). |
| Footer | Home | https://parabank.parasoft.com/parabank/index.htm | Same expected result as home page. |
| Footer | About Us | https://parabank.parasoft.com/parabank/about.htm | Same expected result as About Us. |
| Footer | Services | https://parabank.parasoft.com/parabank/services.htm | Same expected result as Services page. |
| Footer | Products | http://www.parasoft.com/jsp/products.jsp | Same expected result as external Products redirect. |
| Footer | Locations | http://www.parasoft.com/jsp/pr/contacts.jsp | Same expected result as external Locations redirect. |
| Footer | Forum | http://forums.parasoft.com/ | Redirects to https://forums.parasoft.com/ (forum home, title: "Home - Parasoft Forums"). |
| Footer | Site Map | https://parabank.parasoft.com/parabank/sitemap.htm | Site Map page titled "ParaBank | Site Map" listing major site navigation links (e.g., About Us, Services, Products, Locations, Admin Page, Open New Account, Accounts Overview, Transfer Funds). |
| Footer | Contact Us | https://parabank.parasoft.com/parabank/contact.htm | Same expected result as Customer Care page. |
| Footer Visit link | www.parasoft.com | http://www.parasoft.com/ | Redirects to https://www.parasoft.com/ (corporate homepage with automation/product solution sections). |

## 6. Login Action Requirement (Control Validation)
Although Log In is a button (not a hyperlink), it is a major home-page action and must be validated.

| Action | Expected Navigation | Expected Result |
|---|---|---|
| Click Log In with empty Username and Password | https://parabank.parasoft.com/parabank/login.htm | Error page titled "ParaBank | Error" showing heading "Error!" and message: "Please enter a username and password." |

## 7. Reusable Verification Checklist (For Future Regression)
For each menu/hyperlink/action listed above, verify:
- The element is visible on Home page.
- The element text matches expected label.
- Click navigates to the expected URL (or valid redirected target when external).
- Destination page title is correct.
- Destination page displays required content blocks/forms/sections as documented.
- No broken-link behavior, blank page, or unexpected server error.

## 8. Risks and Enhancement Opportunities
- Several links route to external domains; dependency on third-party site uptime/content can affect user journey.
- Service links open technical XML descriptors (WSDL/WADL), which may be confusing for end users; consider routing these to user-friendly pages if business intent is non-technical.
- Site Map contains deeper application links that are not directly visible in home menus; this can be used for feature-discovery and future expansion of functional tests.
