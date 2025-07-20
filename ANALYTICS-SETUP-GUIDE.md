# 📊 Analytics & Search Console Setup Guide

## Complete guide to set up all analytics and verification codes for your academic website

---

## 🎯 **Google Analytics 4 (GA4) Setup**

### **Step 1: Create Google Analytics Account**

1. Go to **https://analytics.google.com/**
2. Click **"Start measuring"** or **"Get started today"**
3. **Account Setup:**
   - Account name: `Dr. Houda LECHHEB Website`
   - Data sharing settings: Enable recommended options
   - Click **"Next"**

### **Step 2: Create Property**

1. **Property Setup:**
   - Property name: `houdalechheb.netlify.app`
   - Reporting time zone: `(GMT+01:00) Morocco`
   - Currency: `MAD - Moroccan Dirham`
   - Click **"Next"**

### **Step 3: Business Information**

1. **Industry Category:** `Education`
2. **Business size:** `Small (1-10 employees)`
3. **How you plan to use Analytics:**
   - ✅ Examine user behavior
   - ✅ Measure advertising ROI
   - ✅ Get baseline reports
4. Click **"Create"**

### **Step 4: Get Your GA4 Measurement ID**

1. Accept **Terms of Service**
2. Choose **"Web"** platform
3. **Set up data stream:**
   - Website URL: `https://houdalechheb.netlify.app`
   - Stream name: `Dr. Houda LECHHEB Website`
   - Click **"Create stream"**
4. **Copy your Measurement ID:** `G-XXXXXXXXXX`
   - It will look like: `G-ABC123DEF4`

### **Step 5: Add to .env**

```bash
NEXT_PUBLIC_GA_ID=G-ABC123DEF4
```

---

## 🔍 **Google Search Console Setup**

### **Step 1: Add Property**

1. Go to **https://search.google.com/search-console**
2. Click **"Add property"**
3. Choose **"URL prefix"**
4. Enter: `https://houdalechheb.netlify.app`
5. Click **"Continue"**

### **Step 2: Verify Ownership**

1. **HTML tag method** (Recommended):
   - Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123def456ghi789" />
   ```
2. **Copy the content value:** `abc123def456ghi789`
3. **Add to .env:**
   ```bash
   NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456ghi789
   ```
4. Deploy your website
5. Return to Search Console and click **"Verify"**

### **Alternative Verification Methods:**

- **HTML file upload**
- **Google Analytics** (if already connected)
- **Google Tag Manager**
- **Domain name provider**

---

## 🌐 **Bing Webmaster Tools Setup**

### **Step 1: Create Account**

1. Go to **https://www.bing.com/webmasters**
2. Sign in with Microsoft account or create one
3. Click **"Add a site"**

### **Step 2: Add Your Website**

1. **Add your site:** `https://houdalechheb.netlify.app`
2. **Sitemap:** `https://houdalechheb.netlify.app/sitemap.xml`
3. Click **"Add"**

### **Step 3: Verify Ownership**

1. Choose **"HTML Meta Tag"** method
2. Copy the meta tag content:
   ```html
   <meta name="msvalidate.01" content="ABC123DEF456GHI789" />
   ```
3. **Copy the content value:** `ABC123DEF456GHI789`
4. **Add to .env:**
   ```bash
   NEXT_PUBLIC_BING_VERIFICATION=ABC123DEF456GHI789
   ```
5. Deploy and verify

---

## 🔴 **Yandex Webmaster Setup**

### **Step 1: Create Account**

1. Go to **https://webmaster.yandex.com/**
2. Sign in with Yandex account or create one
3. Click **"Add site"**

### **Step 2: Add Website**

1. Enter: `https://houdalechheb.netlify.app`
2. Click **"Add"**

### **Step 3: Verify Ownership**

1. Choose **"Meta tag"** method
2. Copy the verification code:
   ```html
   <meta name="yandex-verification" content="abc123def456" />
   ```
3. **Copy the content value:** `abc123def456`
4. **Add to .env:**
   ```bash
   NEXT_PUBLIC_YANDEX_VERIFICATION=abc123def456
   ```
5. Deploy and verify

---

## 🎓 **Academic Profile IDs**

### **ORCID ID Setup**

#### **Step 1: Create ORCID Account**

1. Go to **https://orcid.org/register**
2. **Fill registration form:**
   - First name: `Houda`
   - Last name: `LECHHEB`
   - Email: `houda.lechheb@uit.ac.ma`
   - Password: Create secure password
3. **Verify email** and complete registration

#### **Step 2: Complete Profile**

1. **Add Employment:**
   - Organization: `Université Ibn Tofail`
   - Role: `Professeure d'Enseignement Supérieur`
   - Department: `Faculté des Sciences Économiques et de Gestion`
   - Start date: Your employment start date
2. **Add Education:**

   - Your PhD and other degrees
   - Include institutions and dates

3. **Add Works:**
   - Publications, research papers
   - Conference presentations
   - Other academic contributions

#### **Step 3: Get Your ORCID ID**

1. Your ORCID ID will be in format: `0000-0000-0000-0000`
2. Find it at the top of your profile page
3. **Add to .env:**
   ```bash
   NEXT_PUBLIC_ORCID_ID=0000-0000-0000-0000
   ```

### **Google Scholar ID Setup**

#### **Step 1: Create Google Scholar Profile**

1. Go to **https://scholar.google.com/**
2. Click **"My profile"**
3. Sign in with Google account

#### **Step 2: Set Up Profile**

1. **Add affiliation:** `Université Ibn Tofail`
2. **Add research interests:** Your areas of expertise
3. **Add photo:** Use the same professor photo
4. **Verify email:** Use your academic email

#### **Step 3: Add Publications**

1. **Search for your publications**
2. **Claim your papers** by clicking "+"
3. **Add missing publications** manually if needed

#### **Step 4: Get Scholar ID**

1. Your Scholar profile URL will be:
   `https://scholar.google.com/citations?user=YOUR_ID_HERE`
2. **Copy the ID part:** `YOUR_ID_HERE`
3. **Add to .env:**
   ```bash
   NEXT_PUBLIC_GOOGLE_SCHOLAR_ID=YOUR_ID_HERE
   ```

### **ResearchGate Profile Setup**

#### **Step 1: Create Account**

1. Go to **https://www.researchgate.net/signup**
2. Use academic email: `houda.lechheb@uit.ac.ma`
3. **Institution:** `Université Ibn Tofail`
4. **Department:** `Economics`

#### **Step 2: Complete Profile**

1. **Add profile photo** (same professor photo)
2. **Add research interests and skills**
3. **Add education and work experience**
4. **Upload publications**

#### **Step 3: Get Profile ID**

1. Your profile URL will be:
   `https://www.researchgate.net/profile/YOUR-PROFILE-NAME`
2. **Copy the profile name:** `YOUR-PROFILE-NAME`
3. **Add to .env:**
   ```bash
   NEXT_PUBLIC_RESEARCHGATE_ID=YOUR-PROFILE-NAME
   ```

---

## 📧 **Email Configuration**

### **Contact Email Setup**

Simply add your academic email:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=houda.lechheb@uit.ac.ma
```

---

## 📝 **Complete .env File Example**

After completing all setups, your `.env` file should look like:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://houdalechheb.netlify.app

# Analytics
NEXT_PUBLIC_GA_ID=G-ABC123DEF4

# Search Console Verification Codes
NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456ghi789
NEXT_PUBLIC_BING_VERIFICATION=ABC123DEF456GHI789
NEXT_PUBLIC_YANDEX_VERIFICATION=abc123def456

# Academic Profiles
NEXT_PUBLIC_ORCID_ID=0000-0000-0000-0000
NEXT_PUBLIC_GOOGLE_SCHOLAR_ID=YOUR_SCHOLAR_ID
NEXT_PUBLIC_RESEARCHGATE_ID=YOUR-PROFILE-NAME

# Email Configuration
NEXT_PUBLIC_CONTACT_EMAIL=houda.lechheb@uit.ac.ma
```

---

## ✅ **Verification Checklist**

### **Before Going Live:**

- [ ] Google Analytics tracking code added
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] Yandex Webmaster verified
- [ ] ORCID profile complete and public
- [ ] Google Scholar profile complete
- [ ] ResearchGate profile complete
- [ ] Contact email configured

### **After Deployment:**

- [ ] Test Google Analytics tracking (Real-time reports)
- [ ] Submit sitemap to all search consoles
- [ ] Check search console for indexing status
- [ ] Verify social media previews work
- [ ] Test contact form functionality

---

## 🚀 **Next Steps After Setup**

### **Submit Sitemaps:**

1. **Google Search Console:** Submit `https://houdalechheb.netlify.app/sitemap.xml`
2. **Bing Webmaster:** Submit sitemap URL
3. **Yandex Webmaster:** Submit sitemap URL

### **Monitor Performance:**

1. **Google Analytics:** Monitor visitor behavior
2. **Search Console:** Track search performance
3. **Academic profiles:** Monitor citation metrics

### **Regular Maintenance:**

1. **Update publications** on academic profiles
2. **Monitor search rankings** monthly
3. **Update research interests** as needed
4. **Respond to citations** and messages

---

## 📞 **Support Resources**

- **Google Analytics Help:** https://support.google.com/analytics
- **Google Search Console Help:** https://support.google.com/webmasters
- **Bing Webmaster Help:** https://www.bing.com/webmasters/help
- **ORCID Support:** https://support.orcid.org/
- **Google Scholar Help:** https://scholar.google.com/intl/en/scholar/help.html

---

**🎓 Your academic website will now have comprehensive analytics and search engine visibility!**
