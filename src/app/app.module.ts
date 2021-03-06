import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { IvrService } from './services/ivr/ivr.service';
import { DncService } from './services/dnc/dnc.service';
import { UserService } from './services/user/user.service';
import { BillingService } from './services/billing/billing.service';
import { AnalyticsService } from './services/analytics/analytics.service';
import { AudioService } from 'src/app/services/audio/audio.service';
import { CampaignService } from 'src/app/services/campaign/campaign.service';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsPurchaseComponent } from './components/accounts-purchase/accounts-purchase.component';
import { AudioComponent } from './components/audio/audio.component';
import { AudioAddComponent } from './components/audio-add/audio-add.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { PhonebookAddComponent } from './components/phonebook-add/phonebook-add.component';
import { DncComponent } from './components/dnc/dnc.component';
import { DncAddComponent } from './components/dnc-add/dnc-add.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CampaignsAddComponent } from './components/campaigns-add/campaigns-add.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PhonebookService } from './services/phonebook/phonebook.service';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { StatementsComponent } from './components/statements/statements.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReportCdrComponent } from './components/report-cdr/report-cdr.component';
import { ReportSingleComponent } from './components/report-single/report-single.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IvrAddComponent } from './components/ivr-add/ivr-add.component';
import { IvrComponent } from './components/ivr/ivr.component';
import { IvrEditComponent } from './components/ivr-edit/ivr-edit.component';
import { CampaignEditComponent } from './components/campaign-edit/campaign-edit.component';
import { CampaignReportComponent } from './components/campaign-report/campaign-report.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PhonebookEditComponent } from './components/phonebook-edit/phonebook-edit.component';
import { PhonebookViewComponent } from './components/phonebook-view/phonebook-view.component';
import { DncViewComponent } from './components/dnc-view/dnc-view.component';
import { AudioEditComponent } from './components/audio-edit/audio-edit.component';
import { CampaignQuickReportComponent } from './campaign-quick-report/campaign-quick-report.component';
import { LandingComponent } from './landing/landing.component';
import { CampaignCdrComponent } from './components/campaign-cdr/campaign-cdr.component';
import { AccountCreateComponent } from './components/account-create/account-create.component';
import { AddLeadsComponent } from './components/add-leads/add-leads.component';
import { QuickstartComponent } from './components/quickstart/quickstart.component';
import { AddDncLeadComponent } from './components/add-dnc-lead/add-dnc-lead.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { CampaignRecycleComponent } from './components/campaign-recycle/campaign-recycle.component';
import { CampaignDuplicateComponent } from './components/campaign-duplicate/campaign-duplicate.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';
import { HelpComponent } from './components/help/help.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    AnalyticsComponent,
    AccountsComponent,
    AccountsPurchaseComponent,
    AudioComponent,
    AudioAddComponent,
    PhonebookComponent,
    PhonebookAddComponent,
    DncComponent,
    DncAddComponent,
    CampaignsComponent,
    CampaignsAddComponent,
    SettingsComponent,
    InvoicesComponent,
    StatementsComponent,
    PurchaseComponent,
    ReportCdrComponent,
    ReportSingleComponent,
    NavbarComponent,
    IvrAddComponent,
    IvrComponent,
    IvrEditComponent,
    CampaignEditComponent,
    CampaignReportComponent,
    PhonebookEditComponent,
    PhonebookViewComponent,
    DncViewComponent,
    AudioEditComponent,
    CampaignQuickReportComponent,
    LandingComponent,
    CampaignCdrComponent,
    AccountCreateComponent,
    AddLeadsComponent,
    QuickstartComponent,
    AddDncLeadComponent,
    ReportDetailComponent,
    CampaignRecycleComponent,
    CampaignDuplicateComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentStatusComponent,
    HelpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    CampaignService,
    PhonebookService,
    AudioService,
    AnalyticsService,
    BillingService,
    UserService,
    DncService,
    IvrService,
    AuthService,
    AuthGuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
