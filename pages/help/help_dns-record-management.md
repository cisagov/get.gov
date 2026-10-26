---
title: DNS record management
permalink: /help/domain-management/dns-records/
layout: layouts/info-page
sidenav: true
excerpt: Help with setting DNS records
tags: help
eleventyNavigation:
  key: dns-records
  parent: domain-management
  order: 1
  title: DNS record management
---

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">DNS hosting required</h4>
    <p class="usa-alert__text">
      Our DNS hosting service is currently in private preview. Only organizations using it can perform the actions described in this section.
    </p>
  </div>
</div>

DNS records connect your .gov domain to websites, email, and other online services.

If your domain uses our DNS hosting service, you can manage DNS records directly from the .gov registrar.

- [Add DNS records](#add-dns-records)
- [Edit existing records](#edit-existing-records)
- [Delete a record](#delete-a-record)
- [Add a TXT record for domain verification](#add-a-txt-record-for-domain-verification)
- [Add a CNAME record to your web host](#add-a-cname-record-to-your-web-host)
- [Create subdomain](#create-subdomain)
- [Set up email on your .gov domain](#set-up-email-on-your-gov-domain)

---

## **Add DNS records**
1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account. 
2. Click the “Manage” link for your .gov domain.
3. Click “DNS” on the left-side navigation.
4. Click “DNS records.”
5. Click the “Add record” button.
6. Select the type of record you want to create.
7. Enter the required values.
8. Click “Save.”

## **Edit existing records**
1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account.   
2. Click the “Manage” link for your .gov domain.  
3. Click “DNS” on the left-side navigation.  
4. Click “DNS records.”  
5. Click the “Edit” link next to the record you want to update.  
6. Edit the record fields.  
7. Click “Save.”

DNS changes may take time to appear across the internet.

## **Delete a record**
1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account.   
2. Click the “Manage” link for your .gov domain.  
3. Click “DNS” on the left-side navigation.  
4. Click “DNS records.”  
5. Click the three dots next to the record you want to update..  
6. Click “Delete.”

## **Add a TXT record for domain verification**
TXT records are commonly used to verify that you manage a domain. Some services, such as email providers or website platforms, will give you a unique verification value to add as a TXT record before you can finish setup or use certain features.

To add a TXT record for domain verification:

1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account.   
2. Click the “Manage” link for your .gov domain.  
3. Click “DNS” on the left-side navigation.  
4. Click “DNS records.”  
5. Click the “Add record” button.  
6. Under “Type,” choose “TXT.”  
7. Enter the required values.  
8. Click “Save.”  
9. If required, contact your service provider to complete the verification process (though some may check automatically).

When entering TXT record content:
* Enter the value exactly as provided (don’t add quotation marks at the beginning or end).  
* Don’t add extra spaces.  
* If the value is long, enter it as a single value unless your service provider specifically tells you otherwise.

Your domain’s verification will not succeed until the DNS change has been saved.

## **Add a CNAME record to your web host**
A CNAME record can be used to connect a domain or subdomain to a web hosting service. It’s the record that allows your users to see your approved .gov domain name, masking the hostname where your web host actually operates. 

To add a CNAME record:

1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account.   
2. Click the “Manage” link for your .gov domain.  
3. Click “DNS” on the left-side navigation.  
4. Click “DNS records.”  
5. Click the “Add record” button.  
6. Under “Type,” choose “CNAME.”  
7. Enter the host name provided by your web hosting provider.  
8. Enter the destination value provided by your web hosting provider.  
9. Click “Save.”

## **Create subdomain**
A subdomain creates a separate address under your domain, such as *blog*.example.gov or *help*.example.gov. You can use subdomains for websites, applications, support portals, and other online tools. The website or application you're connecting to will typically tell you which type of DNS record to create and what values to enter.

To create a subdomain:

1. Sign in to the [.gov registrar](https://manage.get.gov) using your Login.gov account.   
2. Click the “Manage” link for your .gov domain.  
3. Click “DNS” on the left-side navigation.  
4. Click “DNS records.”  
5. Click the “Add record” button.  
6. Select the type of record you want to create.  
7. Enter the required values in the form fields. (Typically, the website or application you're connecting will tell you what values to enter.)  
8. Click “Save.”

## **Set up email on your .gov domain**
To send and receive email using your domain, you'll need an email service provider. 

Most email providers require one or more MX records, and may also require additional records for domain verification and email security. Follow your email provider's instructions and enter the DNS values exactly as specified.

After adding the records, allow time for DNS changes to propagate before testing email services.
