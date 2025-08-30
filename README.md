# student-registration-system

<p style="padding-left: 4em"><span style='background-color:rgb(147, 196, 125)'> <b>Assignment:</b> </span></p>



<p style="padding-left: 4em"> <span style='background-color:rgb(147, 196, 125)'> <b>Student Registration System</b> </span></p>



<p>        							  <b>Submitted By :</b>          </p>



<p style="padding-left: 16em"> <b><i>Chaitali Mahato</i></b> </p>



<p><span style='background-color:rgb(182, 215, 168)'>PROJECT OVERVIEW :</span></p>



<p>Lets say “XYZ Foundation” is a NGO who is taking students for the Volunteering Programme. </p>



<p>This System comprises of the following functionalities: - </p>




 - College Students can REGISTER themselves through the submission form
 - Students have to enter their “student id” , “name” , “email” & “phone number”.
 - The System is capable of handling form field validations.
 - Student id is unique. i.e. more than one student cannot have same student id 
 - Admin login link is placed at the top right corner.
 - Admin has to enter username/password 
 - Admin can see all the registered students.
 - Admin can edit/delete records from the table for each Student
 - Admin can delete all the records at a single click
 - Admin can “Logout” by clicking the “logout” button from top right corner

<p><span style='background-color:rgb(182, 215, 168)'>PROJECT STRUCTURE :</span></p>



<p>Root</p>



<p>│</p>



<p>├── node_modules/          # Installed npm packages (dependencies)</p>



<p>│</p>



<p>├── src/                   # Source folder (code + assets)</p>



<p>│   ├── images/            # Store images (logo, gif image.)</p>



<p>│   ├── index.js           # Main JavaScript file</p>



<p>│   ├── input.css          # Tailwind input file (before build)</p>



<p>│   └── output.css         # Compiled CSS file (after Tailwind build)</p>



<p>│</p>



<p>├── datacollect.html       # Page showing collected student data</p>



<p>├── index.html             # Homepage (registration)</p>



<p>│</p>



<p>├── package.json           # Project config (scripts, dependencies)</p>



<p>├── package-lock.json      # Exact dependency versions</p>



<p><span style='background-color:rgb(182, 215, 168)'>PROJECT FLOW :</span></p>



![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdgG5ORdsHNi-C5D6V8317yg4L2VdHa3OfsC2o27S8psa8PyU2hhJco-kUcN0EWXHvKxeWCjtBeLQsoV-PukE1hRl_tgygFsQH29yUAXuJlkpw4In4W2Ce68qaDg4r2GUZPf3cL61t2ricuFvFK7mhL4ZN9?key=ti6elyXYLh9BS3AiRZNr0g "")


 - This is the Landing Screen. It has  <b>“Register Now”</b>  link, on clicking it will scroll to the bottom and focus on the submission form. 
 - Right Side corner has link to  <b>“Admin Login”</b> 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDAW-_lN3GyGfxLLQghMyUQlmDlkmduhy91qUhJm-kkpZbrsRPhuQYEcLWwJkydxLjXrjMvZbnxfi9Kl5F6nysiapbfJZPLnkvzkpULDSSyyfOQdQAcMtc-LpWxWEMPhUe7Sr_G2vnD6JCKalihVBZamM3?key=ti6elyXYLh9BS3AiRZNr0g "")


 - Below is the “Student Registration Form” with form fields “student id”, “name”, “email” and “contact number”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdzr4EEnYCQbbpztqy56Zb__L2GtvJhJtwroqIkFxVTxBUAAjQPot9zsQFjeliY8NpK-82_Zcx1Oa0roCdmNa50VYeJygi2dHRe5g0MNRNJMDHlJ57ysE8lb57nnlbdS4PnvKltk2PcUMMtPLybyFmlBR8R?key=ti6elyXYLh9BS3AiRZNr0g "")


 - Student enter the details in the form

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXex9HvNyHegJx-WBi1UK6v6R-w7BVcGxcqzEGwhEt8QqRpL2AbmzFLOpTfbXWFPkG2IlA30pv8YkV19ApUDH8si8K__VYLYMM_CmJaF6eiS9W6Ts_LSzC3oNpBU1mtHtw-r05bv86UCL4jy3eoIZGtkzQ?key=ti6elyXYLh9BS3AiRZNr0g "")


 - Upon successful registration a message  <b>“Registration Successful!”</b>  can be seen at the bottom of the form.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe4-0aX7LzsIV7uqILd5kL7CUNKPMF8rmgnTNz8kODWfcU2ym4HGjczSw4BTdDhrpEucfMKEavTityRQbnBQOoQG7iAFgQOJkd8_CJeN2ZmbtilbdYE1JTXXvWSL31iEtd5lB_agde64PX1W12oYO0kPNSf?key=ti6elyXYLh9BS3AiRZNr0g "")


 - If a student tries to register with the already existing “student id” , then a message will show up  <b>“Student ID already exists. Please use a different one.”</b> 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUrQlnqB8UHpjapYV6jiX4CjgL8_f4SLCV00OHDVKGsB7c4uGtY9u2fmYQRg17Kv2gqIGeXim_t_nge1to6oPHSEfKaxv7SL7aSQnfM55naEaZik_HYx8EKfpaJnJF-OOYPIzxrs8KTSJMGjl9VlZdbAAz?key=ti6elyXYLh9BS3AiRZNr0g "")


 - This is the “Admin Login” 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXctrx2UqEbRXEGJ1Dl23CfsUg8BqLoqh6gaZ8h0LMY2sxUkstg985MiV1anIoxMQ8MgZRmy1bYyVpOaqeuV4z8FM5OR7Pe1WMqo-pKkwhV6ZyfBi_ZzPE9m7dnsAHYVegPRO-BfetP5nmPbCVbamh3YZvVo?key=ti6elyXYLh9BS3AiRZNr0g "")

<p>Admin Login modal popup will show up after click the Button.  Enter the below credentials.</p>



<p>User Name=  <b>“admin”</b> </p>



<p>Password =  <b>“Qwerty@123”</b> </p>



![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfAKmT3LMg--QDWLWy6r9j_OSfXHzVI83Un2aUNI-dCcNkYFTz6LqkNYHha7yoIhBWC6Zk7Jm6DctH2MjWmnlpv6RcROV4noEYBFsdlZW9RBODSTaO3G6vlh1Kt1HY2EHY2AsFRFT1d0xJuWj7Xx3yhLtXf?key=ti6elyXYLh9BS3AiRZNr0g "")


 - This is the Dashboard view for Admin to Engage with the table. Here Admin can see all the registered students. 
 - Admin can Edit/Delete records of individual students.  <b>All the data can be edited except</b>  <b>Student ID</b> 
 - Admin can also delete the complete data at once by clicking  <b>“Delete All Records</b> ” Button

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe3enbr3OIpeoIea0zZhmLypB_kAKy4Ngwldyw3jGeWKhSw167VHyF2WqOKxS2f8O7yF4JazWvj6iA9xK77WC1-FcRzZwF6Vhv2Zm9lfwojahaFYQwVrm76ihoAielghV5Pk1MwBCJtNrZAGH362_5hYQ?key=ti6elyXYLh9BS3AiRZNr0g "")

<p>In the edit button we can edit Name , Email and Contact Number.</p>



![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchvWNuIKuxo9u1dxgBj0EF1Ehu5iNjcdbsNm54nc6tODD6V7uVNx1JFyTNQ_qei68Yj2o7K9eB_HBDLV5GH4xX9OFeDth9FTw63lkONH1bJk6O7814H8JAcpbXzkbrc-eTfuLMgsYIryF8Doi9s1LYl5fb?key=ti6elyXYLh9BS3AiRZNr0g "")


 -  <b>EDIT</b> 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdsT6Zx5DfZ5voHS9n-tYFaf62QkdIkNM0QWj7PPxN-FgOW77tnsypc9qSgYNfLH6OBvsrZ9Ie4o-4APR6_vlGYsvI0A1TD3XeU1zB-jgpGe2ZKvJA8OGxXPeTHbBtG_erpcSq1437F4rL2LriAPi9GTA?key=ti6elyXYLh9BS3AiRZNr0g "")


 -  <b>“Delete All Records”</b> 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXexaCO45frtI394-3bkbjkIYaRYqbvfEjkoM1b7BbFNZvxY9AFM3n8ijIyA8VatmkC8Q3D-A_zx5tzqcoLkvdj9wX6pkyfUTPSfsbU-dv20g0Z017v2irQ4-FZZuiTR2Y5DO1ka84JKeKv4wbADpOMx1A?key=ti6elyXYLh9BS3AiRZNr0g "")


 -  <b>“Log Out”</b>  button sign out the Admin and lands to Homepage.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_OeoMbIYH55oA6OuQFoEahc1yrN4Yn9lqjVTi54R8nda4qH-XyWGbn6nCWZa-IOgeFfsVl_1zNx1j535sdcPIAcpuTXe26tqjtMQ-ILtRCAhXBKpnzEvZBnx6QdXjNIQTgvPEs2OVuwksJnZP8Q0G4pwT?key=ti6elyXYLh9BS3AiRZNr0g "")

<p>*************************************     THANK YOU     ******************************************</p>


