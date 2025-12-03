---
title: Member management
permalink: /help/member-management/
layout: layouts/info-page
tags: help
excerpt: Managing organization members in the .gov registrar
eleventyNavigation:
  key: help
  order: 4
  title: Member management
---

[Enterprise mode](https://get.gov/posts/2025-09-10-announcing-enterprise-mode/) allows designated individuals, known as organization admins, to manage the roles and permissions for each member of their organization.

<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Admin role required</h4>
    <p class="usa-alert__text">
      Only organization admins can perform the actions described on this page.
    </p>
  </div>
</div>

* [Understanding enterprise mode roles and permissions](#understanding-enterprise-mode-roles-and-permissions)
* [Add new members to your organization](#add-new-members-to-your-organization)
* [Manage existing members](#manage-existing-members)
* [Manage domain assignments for members](#manage-domain-assignments-for-members)

## Understanding enterprise mode roles and permissions

There are two roles in enterprise mode:

1. **Organization (org) admin**: Users in this role have full visibility and control across the organization, including all domains, domain requests, and member permissions.
2. **Basic member**: By default, users in this role have **limited visibility of the organization** because they can only view and manage the domains assigned to them—essentially acting as “domain managers.” Org admins can grant basic members additional permissions:

  * View all domains for the organization, not just the ones they manage
  * View all domain requests
  * Create domain requests
  * View (but not manage) all member permissions


This table compares the two roles and the permissions that basic members can receive:



## Add new members to your organization

### Add a new admin {.h4}

1. Sign in to the [.gov registrar](https://manage.get.gov/) using your Login.gov account.  
2. In the top navigation bar, click “Members”. On the Members page, click the button “Add a new member”.  
3. Enter the new member’s email address, set their role as "Admin," then click "Invite member".
4. After reviewing a summary of the user's information and permissions, click "Yes, invite member".


### Add a new basic member {.h4}


1. Sign in to the [.gov registrar](https://manage.get.gov/) using your Login.gov account.  
2. Click the “Members” link in the top navigation bar. On the Members page, click the button “Add a new member”.  
3. Enter the new member’s email address and set their role as "Basic". 
4. By default, basic members can view only the domains they manage, not domain requests or member information. You can update these permissions, if desired:
   1. **Domains:** Allow the user to view all domains in your organization or just the domains they manage (default).  
   2. **Domain requests:** Allow the user to view all requests for your organization, view all requests and submit new requests, or have no access to domain requests (default).  
   3. **Members:** Allow the user to view all member permissions or have no access to that information (default). If a user needs to modify organization members, they should be added as an [org admin](#add-a-new-admin) instead.   
5. Click “Invite member” to add the user to your organization. 
6. After reviewing a summary of the user's information and permissions, click “Yes, invite member.”

**Note:** You cannot invite a member who is already a member of another .gov organization. We will offer users the ability to be part of multiple organizations, and switch between them, in late 2025.


## Manage existing members

If you’re not an org admin, you won’t be able to view the Members page.


### Update a member’s role or permissions {.h4}

1. Sign in to the [.gov registrar](https://manage.get.gov/) using your Login.gov account.  
2. Click the “Members” link in the top navigation bar.  
3. Click “Manage” next to the member entry you want to view or update. (Members who are org admins will have an “Admin” tag beside their email address.)  
4. View the member’s permissions and make any necessary changes. Then click “Review.”  
5. You’ll see a summary of the member’s permissions. Click “Apply changes.”


### Remove a member or cancel an invitation {.h4}

1. Sign in to the [.gov registrar](https://manage.get.gov/) using your Login.gov account.  
2. Click the “Members” link in the top navigation bar.  
3. Find the member entry you want to view or update. (Members who are org admins will have an “Admin” tag beside their email address.)  
4. Click the three dots beside the “Manage” link to view “More options.”  
5. Click “Remove member” or “Cancel invitation.”

## Manage domain assignments for a member

Only org admins can manage domain assignments. Basic members who have been granted the additional permission to "view all member permissions" can view, but not edit, domain assignments.

1. Sign in to the [.gov registrar](https://manage.get.gov/) using your Login.gov account.  
2. Click the “Members” link in the top navigation bar.  
3. Click “Manage” next to the member entry you want to view or update. On their profile page, scroll down to “Domain assignments.”  
4. Click the “Edit domain assignments” button. You’ll see all the domains for your organization.  
5. Select the domains you want to assign to the member. Click “Review” to see a summary of changes.  
6. If everything looks good, click “Apply changes.”

All domains must have at least one domain manager. If the user is the only manager for a domain, you won’t be able to unassign them from that domain. Assign another domain manager first before unassigning the original domain manager.

**Additional domain management tasks**

Once an admin or basic member is made a manager of a specific domain, additional domain management tasks may be performed. Learn more about [managing a domain](../domain-management/).