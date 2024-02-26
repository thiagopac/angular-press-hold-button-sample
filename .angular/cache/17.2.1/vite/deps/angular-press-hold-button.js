import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-5AQ4OJRV.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  Renderer2,
  ViewChild,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-B5LUOZ3Q.js";

// node_modules/angular-press-hold-button/fesm2022/angular-press-hold-button.mjs
var _c0 = ["progressBar"];
function AngularPressHoldButton_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function AngularPressHoldButton_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 1);
    ɵɵelementContainerEnd();
  }
}
function AngularPressHoldButton_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 2);
    ɵɵelementContainerEnd();
  }
}
function AngularPressHoldButton_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 3);
    ɵɵelementContainerEnd();
  }
}
function AngularPressHoldButton_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 4);
    ɵɵelementContainerEnd();
  }
}
function AngularPressHoldButton_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1, 5);
    ɵɵelementContainerEnd();
  }
}
var _c1 = [[["", "slot", "left", "when", "start"]], [["", "slot", "left", "when", "progress"]], [["", "slot", "left", "when", "finish"]], [["", "slot", "right", "when", "start"]], [["", "slot", "right", "when", "progress"]], [["", "slot", "right", "when", "finish"]]];
var _c2 = (a0) => ({
  "background-color": a0
});
var _c3 = ["[slot='left'][when='start']", "[slot='left'][when='progress']", "[slot='left'][when='finish']", "[slot='right'][when='start']", "[slot='right'][when='progress']", "[slot='right'][when='finish']"];
var _AngularPressHoldButtonService = class _AngularPressHoldButtonService {
  constructor() {
  }
};
_AngularPressHoldButtonService.ɵfac = function AngularPressHoldButtonService_Factory(t) {
  return new (t || _AngularPressHoldButtonService)();
};
_AngularPressHoldButtonService.ɵprov = ɵɵdefineInjectable({
  token: _AngularPressHoldButtonService,
  factory: _AngularPressHoldButtonService.ɵfac,
  providedIn: "root"
});
var AngularPressHoldButtonService = _AngularPressHoldButtonService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularPressHoldButtonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _AngularPressHoldButton = class _AngularPressHoldButton {
  constructor(renderer) {
    this.renderer = renderer;
    this.duration = 1500;
    this.backgroundColor = "#3498db";
    this.progressColor = "#2980b9";
    this.labelStart = "";
    this.labelProgress = "";
    this.labelFinish = "";
    this.actionStarted = new EventEmitter();
    this.actionCancelled = new EventEmitter();
    this.actionFinished = new EventEmitter();
    this.label = "";
    this.currentState = "start";
    this.progressWidth = 0;
  }
  ngOnInit() {
    this.label = this.labelStart;
  }
  startAction(event) {
    event.preventDefault();
    if (this.progressWidth < 100) {
      this.clearProgress();
      this.label = this.labelProgress;
      this.currentState = "progress";
      this.actionStarted.emit();
      this.progressInterval = setInterval(() => {
        this.progressWidth = Math.min(100, this.progressWidth + 100 / (this.duration / 100));
        this.updateProgress();
        if (this.progressWidth >= 100) {
          this.actionSuccess();
        }
      }, 100);
    }
  }
  stopAction(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.progressWidth < 100) {
      this.label = this.labelStart;
      this.currentState = "start";
      this.actionCancelled.emit();
      clearInterval(this.progressInterval);
      this.progressInterval = setInterval(() => {
        this.progressWidth = Math.max(0, this.progressWidth - 100 / (this.duration / 100));
        this.updateProgress();
        if (this.progressWidth <= 0) {
          clearInterval(this.progressInterval);
        }
      }, 100);
    }
  }
  actionSuccess() {
    clearInterval(this.progressInterval);
    this.label = this.labelFinish;
    this.currentState = "finish";
    this.actionFinished.emit();
  }
  updateProgress() {
    if (this.progressBar && this.progressBar.nativeElement) {
      this.renderer.setStyle(this.progressBar.nativeElement, "width", `${this.progressWidth}%`);
    }
  }
  clearProgress() {
    if (this.progressWidth < 100 && this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    this.progressWidth = 0;
    this.updateProgress();
  }
};
_AngularPressHoldButton.ɵfac = function AngularPressHoldButton_Factory(t) {
  return new (t || _AngularPressHoldButton)(ɵɵdirectiveInject(Renderer2));
};
_AngularPressHoldButton.ɵcmp = ɵɵdefineComponent({
  type: _AngularPressHoldButton,
  selectors: [["angular-press-hold-button"]],
  viewQuery: function AngularPressHoldButton_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.progressBar = _t.first);
    }
  },
  inputs: {
    duration: "duration",
    backgroundColor: "backgroundColor",
    progressColor: "progressColor",
    labelStart: "labelStart",
    labelProgress: "labelProgress",
    labelFinish: "labelFinish"
  },
  outputs: {
    actionStarted: "actionStarted",
    actionCancelled: "actionCancelled",
    actionFinished: "actionFinished"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 13,
  vars: 13,
  consts: [[1, "press-hold-button", 3, "ngStyle", "mousedown", "mouseup", "mouseleave", "touchstart", "touchend", "touchcancel"], [1, "icon-container"], [4, "ngIf"], [1, "label-container"], [1, "progress-bar", 3, "ngStyle"], ["progressBar", ""]],
  template: function AngularPressHoldButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("mousedown", function AngularPressHoldButton_Template_button_mousedown_0_listener($event) {
        return ctx.startAction($event);
      })("mouseup", function AngularPressHoldButton_Template_button_mouseup_0_listener() {
        return ctx.stopAction();
      })("mouseleave", function AngularPressHoldButton_Template_button_mouseleave_0_listener() {
        return ctx.stopAction();
      })("touchstart", function AngularPressHoldButton_Template_button_touchstart_0_listener($event) {
        return ctx.startAction($event);
      })("touchend", function AngularPressHoldButton_Template_button_touchend_0_listener() {
        return ctx.stopAction();
      })("touchcancel", function AngularPressHoldButton_Template_button_touchcancel_0_listener() {
        return ctx.stopAction();
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵtemplate(2, AngularPressHoldButton_ng_container_2_Template, 2, 0, "ng-container", 2)(3, AngularPressHoldButton_ng_container_3_Template, 2, 0, "ng-container", 2)(4, AngularPressHoldButton_ng_container_4_Template, 2, 0, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "span", 3);
      ɵɵtext(6);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div", 1);
      ɵɵtemplate(8, AngularPressHoldButton_ng_container_8_Template, 2, 0, "ng-container", 2)(9, AngularPressHoldButton_ng_container_9_Template, 2, 0, "ng-container", 2)(10, AngularPressHoldButton_ng_container_10_Template, 2, 0, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵelement(11, "div", 4, 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction1(9, _c2, ctx.backgroundColor));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.currentState === "start");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentState === "progress");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentState === "finish");
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.label);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.currentState === "start");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentState === "progress");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentState === "finish");
      ɵɵadvance();
      ɵɵproperty("ngStyle", ɵɵpureFunction1(11, _c2, ctx.progressColor));
    }
  },
  dependencies: [CommonModule, NgIf, NgStyle],
  styles: ["[_ngcontent-%COMP%]:root{--button-width: 200px;--button-height: 50px;--button-color: white;--button-padding: 20px;--button-border-radius: 5px;--icon-font-size: 20px}button[_ngcontent-%COMP%]{position:relative;width:var(--button-width);height:var(--button-height);padding:var(--button-padding);border:none;border-radius:var(--button-border-radius);color:var(--button-color);outline:none;display:flex;justify-content:space-evenly;align-items:center;overflow:hidden;cursor:pointer}button[_ngcontent-%COMP%]   .label-container[_ngcontent-%COMP%]{z-index:2;position:relative;flex-grow:1}button[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{position:relative;z-index:2;font-size:var(--icon-font-size)}.progress-bar[_ngcontent-%COMP%]{height:100%;position:absolute;top:0;left:0;width:0%;transition:width .2s ease;z-index:1}.label-container[_ngcontent-%COMP%]{z-index:2;position:relative}"]
});
var AngularPressHoldButton = _AngularPressHoldButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularPressHoldButton, [{
    type: Component,
    args: [{
      selector: "angular-press-hold-button",
      imports: [CommonModule],
      standalone: true,
      template: `<button
  (mousedown)="startAction($event)"
  (mouseup)="stopAction()"
  (mouseleave)="stopAction()"
  (touchstart)="startAction($event)"
  (touchend)="stopAction()"
  (touchcancel)="stopAction()"
  [ngStyle]="{ 'background-color': backgroundColor }"
  class="press-hold-button"
>
  <div class="icon-container">
    <ng-container *ngIf="currentState === 'start'">
      <ng-content select="[slot='left'][when='start']"></ng-content>
    </ng-container>
    <ng-container *ngIf="currentState === 'progress'">
      <ng-content select="[slot='left'][when='progress']"></ng-content>
    </ng-container>
    <ng-container *ngIf="currentState === 'finish'">
      <ng-content select="[slot='left'][when='finish']"></ng-content>
    </ng-container>
  </div>

  <span class="label-container">{{ label }}</span>

  <div class="icon-container">
    <ng-container *ngIf="currentState === 'start'">
      <ng-content select="[slot='right'][when='start']"></ng-content>
    </ng-container>
    <ng-container *ngIf="currentState === 'progress'">
      <ng-content select="[slot='right'][when='progress']"></ng-content>
    </ng-container>
    <ng-container *ngIf="currentState === 'finish'">
      <ng-content select="[slot='right'][when='finish']"></ng-content>
    </ng-container>
  </div>

  <div
    #progressBar
    class="progress-bar"
    [ngStyle]="{ 'background-color': progressColor }"
  ></div>
</button>
`,
      styles: [":root{--button-width: 200px;--button-height: 50px;--button-color: white;--button-padding: 20px;--button-border-radius: 5px;--icon-font-size: 20px}button{position:relative;width:var(--button-width);height:var(--button-height);padding:var(--button-padding);border:none;border-radius:var(--button-border-radius);color:var(--button-color);outline:none;display:flex;justify-content:space-evenly;align-items:center;overflow:hidden;cursor:pointer}button .label-container{z-index:2;position:relative;flex-grow:1}button .icon-container{position:relative;z-index:2;font-size:var(--icon-font-size)}.progress-bar{height:100%;position:absolute;top:0;left:0;width:0%;transition:width .2s ease;z-index:1}.label-container{z-index:2;position:relative}\n"]
    }]
  }], () => [{
    type: Renderer2
  }], {
    progressBar: [{
      type: ViewChild,
      args: ["progressBar"]
    }],
    duration: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    progressColor: [{
      type: Input
    }],
    labelStart: [{
      type: Input
    }],
    labelProgress: [{
      type: Input
    }],
    labelFinish: [{
      type: Input
    }],
    actionStarted: [{
      type: Output
    }],
    actionCancelled: [{
      type: Output
    }],
    actionFinished: [{
      type: Output
    }]
  });
})();
export {
  AngularPressHoldButton,
  AngularPressHoldButtonService
};
//# sourceMappingURL=angular-press-hold-button.js.map
