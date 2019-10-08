import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { element } from '@angular/core/src/render3/instructions';
import { Footer } from 'primeng/primeng';
import { Location } from '@angular/common';
import { ShareService } from '../../providers/share.service';
import { constants } from '../../constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-createivr',
  templateUrl: './createivr.component.html',
  styleUrls: ['./createivr.component.scss']
})



export class CreateivrComponent implements OnInit, OnDestroy {
  event: any;
  ivrObj: any;
  ivrData: TreeNode[];
  selectedNode: TreeNode;
  currentNode: any;
  SelectedNodelabel: any;
  ivrnode: any = {};
  messagevisible: boolean;
  connectcalls: boolean;
  ivrnodeform: any;
  optiondisp: boolean = true;
  selectedoption: string;
  optionlist: any = {
    messagesay: false,
    gather_Input: false
  }
  gather_count = 0;
  connect_count = 0;
  say_count = 0;
  split_count = 0;
  finaldata: any;
  de: any;
  userId: any;
  newmessage: any;
  ivrId: any;
  indexcount: any = -1;
  sidstartingindex: any = 11;
  gatherinputwidget: any = {
    "keypress": null,
    "timeout": 'say_play'
  };
  triggerwidget: any = {
    "incomingCall": null,
    // "incomingMessage": null
  };
  ivrstatus: any;
  widgetlist: any;
  gatherwidgetlist: any;
  widgetObject: any;

  twilioJson: any = {
    "description": "A New Flow",
    "states": []
  };
  splitdulicate: boolean;
  ivrname: string;
  previousurl: any;
  constructor(
    private shareService: ShareService,
    private _location: Location,
    private route: ActivatedRoute,

    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private renderer: Renderer2) {

  }


  ngOnInit() {



    this.renderer.addClass(document.body, 'ivrpage');
    this.route.params.subscribe(params => {
      this.userId = params['userid'];
      this.ivrId = params['id'];
      this.ivrId ? this.getivrdata() : this.setivrdata();
    });


    this.widgetlist = [
      { label: 'Select widget', value: null },
      { label: 'Gather Input', value: 'gather_input' },
      { label: 'Connect to call', value: 'connect_call' },
      { label: 'Say/Play', value: 'say_play' }
    ];

    this.gatherwidgetlist = [
      { label: 'Select widget', value: null },
      { label: 'Gather Input', value: 'gather_input' },
      { label: 'Connect to call', value: 'connect_call' },
      { label: 'Say/Play', value: 'say_play' },
      { label: 'Split', value: 'split' }
    ];
  }

  twilioTrigger: any =
    {
      "description": "A New Flow",
      "states": [
        {
          "type": "InitialState",
          "name": "Trigger",
          "properties": {
            "offset": {
              "x": 0,
              "y": 0
            },
            "flow_url": "https://webhooks.twilio.com/v1/Accounts/AC87508959b13ff129841d01e1c6eef475/Flows/FW1b9094d020a017731b1e3b7bf0c08079"
          },
          "transitions": [
            {
              "event": "incomingMessage",
              "conditions": [],
              "next": null,
              "uuid": this.makeUid()
            },
            {
              "event": "incomingCall",
              "conditions": [],
              "next": null,
              "uuid": this.makeUid()
            },
            {
              "event": "incomingRequest",
              "conditions": [],
              "next": null,
              "uuid": this.makeUid()
            }
          ],
          "sid": "FF510631c9c53ee82893c757bbd49e2da3"
        }
      ]
    }

  twilioGather(id) {
    let twilioGather = {
      "sid": id,
      "name": "gather_" + this.makeid(3),
      "type": "Gather",
      "properties": {
        "loop": 1,
        "timeout": 5,
        "stop_gather": true,
        "finish_on_key": "#",
        "offset": {
          "x": 50,
          "y": 150
        },
        "say": "",
        "language": "en",
        "gather_language": "en",
        "voice": "alice",
        "play": null
      },
      "transitions": [
        {

          "uuid": this.makeUid(),
          "event": "keypress",
          "conditions": [],
          "next": null
        },
        {

          "uuid": this.makeUid(),
          "event": "speech",
          "conditions": [],
          "next": null
        },
        {

          "uuid": this.makeUid(),
          "event": "timeout",
          "conditions": [],
          "next": null
        }
      ]
    }
    return twilioGather;
  }

  splitCondition: any = {
    "type": "equal_to",
    "friendly_name": "If value equal_to 1",
    "value": "1"
  }

  twilioSplit(id, input) {
    let twilioSplit = {
      "type": "Branch",
      "name": "split_" + this.makeid(3),
      "properties": {
        "offset": {
          "x": 0,
          "y": 190
        },
        "input": input
      },
      "transitions": [
        {
          "event": "noMatch",
          "conditions": [],
          "next": null,
          "uuid": this.makeUid()
        }
      ],
      "sid": id
    }
    return twilioSplit;
  }

  twilioConnect(id) {
    let twillioConnect = {
      "sid": id,
      "name": "connect_call_" + this.makeid(3),
      "type": "ConnectCaller",
      "properties": {
        "noun": "number",
        "caller_id": "{{contact.channel.address}}",
        "timeout": 30,
        "offset": {
          "x": 100.57412092593955,
          "y": 116.34675641653374
        },
        "to": ""
      },
      "transitions": [
        {

          "uuid": this.makeUid(),
          "event": "callCompleted",
          "conditions": [],
          "next": null
        },
        {

          "uuid": this.makeUid(),
          "event": "hangup",
          "conditions": [],
          "next": null
        }
      ]
    }
    return twillioConnect;
  }

  twilioPlay(id) {
    let twilioPlay = {
      "sid": id,
      "name": "say_play_" + this.makeid(3),
      "type": "SayPlay",
      "properties": {
        "loop": 1,
        "offset": {
          "x": -220,
          "y": 120
        },
        "say": ""
      },
      "transitions": [
        {

          "uuid": this.makeUid(),
          "event": "audioComplete",
          "conditions": [],
          "next": null
        }
      ]
    }
    return twilioPlay;
  }

  getivrdata() {
    this.shareService.getData(constants.getivr + this.ivrId).subscribe(res => {
      this.ivrData = JSON.parse(res['ivr'][0].orginaljson);
      this.twilioTrigger = JSON.parse(res['ivr'][0].ivrjson);
      this.ivrstatus = res['ivr'][0].status;
      this.ivrname = res['ivr'][0].ivrname;
      res['ivr'][0].sidstartingindex ? this.sidstartingindex = res['ivr'][0].sidstartingindex : null;
    })
  }

  setivrdata() {
    this.ivrData = [];
    this.ivrObj = {
      label: 'Incoming',
      type: 'trigger',
      twilioId: 'FF510631c9c53ee82893c757bbd49e2da3',
      styleClass: 'ui-trigger',
      expanded: true,
      data: {
        message: 'start',
        'avatar': 'walter.jpg',
        options: 'trigger',
        id: '1',
        incomingCall: null,
        // incomingMessage: null
      },
      children: []
    };
    this.ivrData.push(this.ivrObj);
  }

  onNodeSelect(event) {
    this.event = event;
    this.optionlist = {};
    this.optionlist[event.node.data.options] = true;
    this.selectedoption = event.node.data.options;
    // this.editwidget(event.node)
    this.SelectedNodelabel = event.node.label;
    let id = event.node.id;;
    let res = this.find(this.ivrData, id); 
    if (this.ivrData[0].children.length > 0) {
      let result = this.ivrData[0].children.filter(function (obj) {
        if (obj['id'] == id) {
          return obj;
        }
      });
    }
    //to enable gather input node
    if (res.children.length === 0 && res.data.keypress && res.data.timeout) {
      res.data.keypress = null;
      res.data.timeout = null;
    }
    if (res.children.length === 1 && res.children[0].nodeType === 'keypress') {
      this.gatherinputwidget.timeout = null;
      res.data.timeout = null;
    }
    if (res.children.length === 1 && res.children[0].nodeType === 'timeout') {
      this.gatherinputwidget.keypress = null;
      res.data.keypress = null;
    }
    this.currentNode = res; //result[0];
  }

  onTriggerWidget() {
    for (var key in this.triggerwidget) {
      if (this.ivrData[0].data[key] == null) {
        this.ivrData[0].data[key] = this.triggerwidget[key];
        let gatherInput = this.buildTwilioJson(key, this.triggerwidget[key]);
        if (gatherInput != null)
          this.ivrData[0].children.push(gatherInput);
      }
    }
  }

  buildTwilioJson(key, triggerInput) {
    let tempTrigger = this.twilioTrigger.states[0];
    let transition = tempTrigger.transitions;
    for (let obj of transition) {
      if (obj.event == key) {
        let genId = this.makeSid(2);
        obj.next = genId;
        if (triggerInput == "gather_input") {
          this.gather_count++;
          let twilioGather = this.twilioGather(genId);
          let gatherInput = this.settingwidgetdata(triggerInput, genId);
          this.twilioTrigger.states.push(twilioGather);
          return gatherInput;
        } else if (triggerInput == "connect_call") {
          this.connect_count++;
          let twilioConnect = this.twilioConnect(genId);
          let connectInput = this.settingCallWidget(triggerInput, genId);
          this.twilioTrigger.states.push(twilioConnect);
          return connectInput;
        } else if (triggerInput == "say_play") {
          this.say_count++;
          let twilioPlay = this.twilioPlay(genId);
          let playInput = this.settingPlayWidget(triggerInput, genId);
          this.twilioTrigger.states.push(twilioPlay);
          return playInput;
        }
      }
    }
  }

  onGatherInput() {
    for (var key in this.gatherinputwidget) {
      if (this.currentNode.data[key] == null) {
        this.currentNode.data[key] = this.gatherinputwidget[key];
        let gatherInput = this.buildGatherTwilioJson(key, this.gatherinputwidget[key]);
        if (gatherInput != null)
          gatherInput['nodeType'] = key;
        key === 'timeout' ? gatherInput.data['message'] = 'You have not entered any input' : null
        this.currentNode.children.push(gatherInput);
      }
    }
  }

  buildGatherTwilioJson(key, triggerInput) {
    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    for (let obj of tempTrigger) {
      if (obj.sid == twilioId) {
        let transition = obj.transitions;
        for (let transobj of transition) {
          if (transobj.event == key) {
            let genId = this.makeSid(2);
            transobj.next = genId;
            if (triggerInput == "gather_input") {
              this.gather_count++;
              let twilioGather = this.twilioGather(genId);
              let gatherInput = this.settingwidgetdata(triggerInput, genId);
              this.twilioTrigger.states.push(twilioGather);
              return gatherInput;
            } else if (triggerInput == "connect_call") {
              this.connect_count++;
              let twilioConnect = this.twilioConnect(genId);
              let connectInput = this.settingCallWidget(triggerInput, genId);
              this.twilioTrigger.states.push(twilioConnect);
              return connectInput;
            } else if (triggerInput == "say_play") {
              this.say_count++;
              let twilioPlay = this.twilioPlay(genId);
			  twilioPlay.properties.say="You have not entered any input";
              let playInput = this.settingPlayWidget(triggerInput, genId);
              this.twilioTrigger.states.push(twilioPlay);
              return playInput;
            }
            else if (triggerInput == "split") {
              this.split_count++;
              let split_input = "{{widgets." + obj.name + ".Digits}}";
              let twilioSplit = this.twilioSplit(genId, split_input);
              let splitInput = this.settingSplitWidget(triggerInput, genId);
              this.twilioTrigger.states.push(twilioSplit);
              return splitInput;
            }
          }
        }
      }
    }
  }

  settingSplitWidget(val, twilId?) {
    let data = {
      label: '',
      id: this.makeid(5),
      styleClass: "ui-person",
      twilioId: twilId ? twilId : '',
      type: val,
      expanded: true,
      data: {
        options: val,
        condition: [
          { val: null, id: this.makeid(5) }
        ]
      },
      children: []
    };
    return data;
  }

  updateMessage() {
    this.commonUpdate("message", "say");
  }

  updateCallNumber() {
    this.commonUpdate("connectcallsto", "to");
  }

  updateSay() {
    this.commonUpdate("message", "say");
  }

  commonUpdate(from, to) {
    let message = this.currentNode.data[from];
    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    for (let obj of tempTrigger) {
      if (obj.sid == twilioId) {
        obj.properties[to] = message;
      }
    }
  }


  triggerInputs(triggerInput, genId) {
    if (triggerInput == "gather_input") {
      this.gather_count++;
      let twilioGather = this.twilioGather(genId);
      let gatherInput = this.settingwidgetdata(triggerInput, genId);
      this.twilioTrigger.states.push(twilioGather);
      return gatherInput;
    } else if (triggerInput == "connect_call") {
      this.connect_count++;
      let twilioConnect = this.twilioConnect(genId);
      let connectInput = this.settingCallWidget(triggerInput, genId);
      this.twilioTrigger.states.push(twilioConnect);
      return connectInput;
    } else if (triggerInput == "say_play") {
      this.say_count++;
      let twilioPlay = this.twilioPlay(genId);
      let playInput = this.settingPlayWidget(triggerInput, genId);
      this.twilioTrigger.states.push(twilioPlay);
      return playInput;
    }
  }

  onConnectCalls(val) {
    let connectCall = this.buildCallTwilioJson(val);
    this.currentNode.children.push(connectCall);
  }

  buildCallTwilioJson(val) {
    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    for (let obj of tempTrigger) {
      if (obj.sid == twilioId) {
        let transition = obj.transitions;
        for (let transobj of transition) {
          if (transobj.event == "callCompleted" && val) {
            let genId = this.makeSid(2);
            transobj.next = genId;
            return this.triggerInputs(val, genId);
          }
        }

      }
    }
  }

  onPlay(playval, val) {
    let playInput = this.buildPlayTwilioJson(val);
    this.currentNode.children.push(playInput);
  }

  buildPlayTwilioJson(val) {
    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    for (let obj of tempTrigger) {
      if (obj.sid == twilioId) {
        let transition = obj.transitions;
        for (let transobj of transition) {
          if (transobj.event == "audioComplete" && val) {
            let genId = this.makeSid(2);
            transobj.next = genId;
            return this.triggerInputs(val, genId);
          }
        }
      }
    }
  }

  // splitdulicatevalidation(ev, item) { 
  //   var valueArr = this.currentNode.data.condition.map(function (item) { return item.val });
  //   this.splitdulicate = valueArr.some(function (item, idx) {
  //     return valueArr.indexOf(item) != idx
  //   }); 
  // }

  ondeletesplit(seletednode) {
    var selectedConditionIndex = this.currentNode.data.condition.findIndex((element) => {
      return element.val == seletednode.val
    });
    if (selectedConditionIndex > -1) {

      //#step1 - remove condition item in condition Array
      this.currentNode.data.condition.splice(selectedConditionIndex, 1);

      //remove null obj in array
      this.currentNode.data.condition.filter((obj) => {
        if (obj && obj !== null) {
          return obj;
        }
      });

      //#step2 - remove condition item in twilio json
      let selectednodeindex = this.currentNode.children.findIndex((child) => child.id === seletednode.id);
      if (selectednodeindex > -1 && this.currentNode.children.length > 0) {

        let tIndex = this.search(this.currentNode.twilioId, this.twilioTrigger.states);

        if (this.twilioTrigger.states[tIndex] && this.twilioTrigger.states[tIndex].transitions) {
          this.twilioTrigger.states[tIndex].transitions.forEach(function (element, index) {
            if (element.next && this.currentNode.children[selectednodeindex]) {
              if (this.currentNode.children[selectednodeindex].twilioId === element.next) {
                this.twilioTrigger.states[tIndex].transitions.splice(index, 1);
              }
            }
          }.bind(this));
        }

        if (this.currentNode.children[selectednodeindex] && this.currentNode.children[selectednodeindex].twilioId) {
          this.nodetoremove(this.currentNode.children[selectednodeindex].twilioId);
        }

        //#step3 - remove condition item in children array
        this.currentNode.children.splice(selectednodeindex, 1);
        //remove null obj in array
        this.currentNode.children.filter((obj) => {
          if (obj && obj !== null) {
            return obj;
          }
        });
      }

      //#step4 - set empty condition item when we delete all condition items
      if (this.currentNode.data.condition.length === 0) {
        this.currentNode.data.condition.push({
          val: null, id: this.makeid(5)
        });
      }

    }
  }

  onSplit() {
    let splitCondition = this.currentNode.data.condition;
    //step1 unique validation
    this.splitdulicate = false;
    let tempArr = [];
    for (let obj of splitCondition) {
      if (obj.val === null || (obj.val && tempArr.includes(obj.val))) {
        this.splitdulicate = true;
        return false;
      } else {
        tempArr.push(obj.val);
      }
    }
    //step2
    let index = 0;
    for (let obj of splitCondition) {
      let twilioId = this.currentNode.twilioId;
      let tempTrigger = this.twilioTrigger.states;
      for (let newobj of tempTrigger) {
        if (newobj.sid == twilioId) {
          let checkexists = newobj.transitions.findIndex(item => {
            if (item.conditions[0] && item.conditions[0].value == obj.val) {
              return true
            }
          });
          var splitInput;

          if (checkexists === -1) {
            splitInput = this.buildSplitTwilioJson(obj.widget, obj.val);
            //first check whether the id already existed or not
            let index = this.currentNode.children.findIndex((child) => child && child.id.toLowerCase() === obj.id.toLowerCase());
            if (index === -1) {
              //set children id by condition id
              splitInput.id = obj.id;
              //passing condition value #to display in the node view #node.data.splitValue
              splitInput.data['splitVal'] = obj.val;
              this.currentNode.children.push(splitInput);
            }
          }

        }
      }
    }
  }

  checkexixtingsplit(seletednode) {

    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    for (let obj of tempTrigger) {
      // let condArr = this.currentNode.data.condition;
      if (obj.sid == twilioId) {
        var selectednodeindex = obj.transitions.findIndex((element) => {
          if (element.conditions[0]) {
            return element.conditions[0].value == seletednode;
          }
        });
      }
    }

    if (selectednodeindex >= 0) {
      return 'disabled'
    } else if (selectednodeindex == null || selectednodeindex < 0) {
      return 'act'
    }

  }

  buildSplitTwilioJson(widget, val) {
    let twilioId = this.currentNode.twilioId;
    let tempTrigger = this.twilioTrigger.states;
    let newObj = {};
    this.indexcount = -1;
    for (let obj of tempTrigger) {
      // let condArr = this.currentNode.data.condition;
      if (obj.sid == twilioId) {
        this.indexcount++;
        let uid = this.makeUid();
        newObj['uuid'] = uid;
        newObj['event'] = "match";
        newObj['conditions'] = [];
        let condObj = {}
        condObj['type'] = "equal_to";
        condObj['friendly_name'] = "If value equal_to " + val;
        condObj['value'] = val;
        newObj['conditions'].push(condObj);
        let sid = this.makeSid(2);
        let genId = sid;
        newObj['next'] = genId;
        obj.transitions.push(newObj);
        return this.triggerInputs(widget, genId);
      }
    }
  }

  onAdd(currentNode) {
    this.splitdulicate = false;
    let obj = { val: null, id: this.makeid(5) };
    currentNode.data.condition.push(obj);
  }


  settingPlayWidget(val, twilId?) {
    let data = {
      label: '',
      id: this.makeid(5),
      styleClass: "ui-person",
      twilioId: twilId ? twilId : '',
      type: val,
      expanded: true,
      data: {
        options: val,
        message: "",
        audiocompleted: null
      },
      children: []
    };
    return data;
  }

  settingCallWidget(val, twilId?) {
    let data = {
      label: '',
      id: this.makeid(5),
      styleClass: "ui-person",
      twilioId: twilId ? twilId : '',
      type: val,
      expanded: true,
      data: {
        options: val,
        connectcallsto: "",
        connectcallsend: null
      },
      children: []
    };
    return data;
  }

  settingwidgetdata(val, twilId?) {
    let data = {
      label: '',
      id: this.makeid(5),
      styleClass: "ui-person",
      twilioId: twilId ? twilId : '',
      type: val,
      expanded: true,
      data: {
        message: '',
        options: val,
        stopgatheringkeypress: '#',
        stopgatheringsecond: 5,
        keypress: null,
        timeout: null
      },
      children: []
    };

    return data;
  }

  makeSid(length) {
    var result = 'FF510631c9c53ee82893c757bbd49e2d';
    // var characters = '0123456789';
    // var charactersLength = characters.length;
    // for (var i = 0; i < length; i++) {
    //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // }
    this.sidstartingindex = this.sidstartingindex + 1;

    result += this.sidstartingindex;
    return result;
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  makeUid() {
    let segment1 = this.makeid(8);
    let segment2 = this.makeid(4);
    let segment3 = this.makeid(4);
    let segment4 = this.makeid(4);
    let segment5 = this.makeid(12);
    return segment1 + '-' + segment2 + '-' + segment3 + '-' + segment4 + '-' + segment5;
  }

  find(source, id) {
    for (let obj of source) {
      if (obj.id == id) {
        return obj;
      }
      if (obj.children) {
        var subresult = this.find(obj.children, id);
        // If the item was found in the subchildren, return it.
        if (subresult)
          return subresult;
      }
    }
    // Nothing found yet? return null.
    return null;
  }


  findNested(current, parent, value, i) {
    if (current.id === value) {
      let twillioId = current.twilioId;
      this.nodetoremove(twillioId);
      // // Deleted actual element
      // let index = this.twilioTrigger.states.findIndex(x => x.sid === twillioId);
      // this.twilioTrigger.states.splice(index, 1);
      // //Disconnect from parent
      // this.twilioTrigger.states.forEach(element => {
      //   if (element.transitions && element.transitions.length > 0) {
      //     element.transitions.forEach(object => {
      //       if (object.next == twillioId) {
      //         object.next = null;
      //       }
      //     });
      //   }
      // });
      parent.children.splice(i, 1);
      //check whether id is existed in split condition array and remove it..
      if (current.id && parent.data.condition && parent.data.condition.length > 0) {
        let cIndex = parent.data.condition.findIndex((obj) => obj.id && obj.id.toLowerCase() === current.id.toLowerCase());
        if (cIndex > -1) {
          parent.data.condition.splice(cIndex, 1);
        }
        //set single condition when we delete all children of split
        if (parent.data.condition.length === 0) {
          parent.data.condition = [
            { val: null, id: this.makeid(5) }
          ]
        }
        //to enable split 
        if (parent.children.length === 0 && parent.data.keypress && parent.data.timeout) {
          parent.data.keypress = null;
          parent.data.timeout = null;
        }
      }
      this.setIncomingCallAsNull();
    }
    if (current && current.children && current.children.length > 0) {
      for (let j = 0; j < current.children.length; j++) {
        this.findNested(current.children[j], current, value, j);
      }
    }
  }
  //set incoming call as null fortrigger node once delete all the child nodes except trigger node
  setIncomingCallAsNull() {
    if (this.ivrData[0].children.length === 0) {
      this.ivrData[0].data['incomingCall'] = null;
    }
  }
  onDelete() {
    let currentId = this.currentNode.id;

    this.currentNode.data.splitVal ? this.deletenodeintwilio() : null;
    for (let i = 0; i < this.ivrData.length; i++) {
      this.findNested(this.ivrData[i], this.ivrData, currentId, i); // ID is string like «30»
      this.submitivr(false, 'save');
    }
  }


  // on deleting node if it is split child, search its parent and delete its condition
  deletenodeintwilio() {
    this.twilioTrigger.states.forEach(element => {
      if (element.transitions && element.transitions.length > 0) {
        element.transitions.forEach((object, index) => {
          if (object.next && (object.next == this.currentNode.twilioId)) {
            element.transitions.splice(index, 1);
          }
        });
      };
    });
  }
  search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].sid === nameKey) {
        return i;
      }
    }
  }



  nodetoremove(sid) {
    let arrayofwidgetToremove = [];

    let resultObject = this.search(sid, this.twilioTrigger.states);

    if (this.twilioTrigger.states[resultObject] && this.twilioTrigger.states[resultObject].transitions) {
      this.twilioTrigger.states[resultObject].transitions.forEach(function (element, index) {
        if (element.next) {
          arrayofwidgetToremove.includes(element.next) ? null : arrayofwidgetToremove.push(element.next)
        }
      });

      this.twilioTrigger.states.splice(resultObject, 1);

    }

    if (arrayofwidgetToremove.length > 0) {
      arrayofwidgetToremove = arrayofwidgetToremove.filter(e => e !== sid);
    }

    if (arrayofwidgetToremove.length > 0) {
      arrayofwidgetToremove.forEach(function (element) {
        this.nodetoremove(element)
      }.bind(this))
    } else {
      return true;
    }
  }



  submitivr(redirect, type) {
    let data = {
      ivrname: this.ivrname,
      createdby: this.userId,
      ivrjson: JSON.stringify(this.twilioTrigger),
      orginaljson: JSON.stringify(this.ivrData),
      sidstartingindex: this.sidstartingindex
    }
    type === 'save' ? data['status'] = 'draft' : data['status'] = 'pending';
    this.ivrId ? this.updateivr(data, redirect) : this.createnew(data, redirect);

  }


  createnew(data, redirect) {
    this.shareService.postData(constants.getivr, data).subscribe(res => {
      redirect ? this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Saved successfully' }) : null;
      data.status === 'pending' ? this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Submitted for approval' }) : null;

      localStorage.setItem('sameurl', 'ivr');
      localStorage.getItem('user-token') ? this.router.navigateByUrl('/dashboard/editivr/' + res['ivr']._id + '/' + this.userId) : this.router.navigateByUrl('/admin/editivr/' + res['ivr']._id + '/' + this.userId);
    });


  }
  updateivr(data, redirect) {
    if (this.ivrstatus === 'approved') {
      this.confirmationService.confirm({
        message: 'Are you sure you want to modify the IVR? The changes will not be reflected until CuServe admins approve them',
        accept: () => {
          this.update(data, redirect);
          // this.getivrdata();

        },
        reject: () => {
          this.getivrdata();
        },
      })
    } else {
      this.update(data, redirect);
      // this.getivrdata();

    }
  }


  update(data, redirect) {
    this.shareService.update(constants.getivr + this.ivrId, data).subscribe(res => {
      this.getivrdata();
      data.status === 'pending' ? this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Submitted for approval' }) : null;
      redirect ? this.messageService.add({ severity: 'success', summary: 'Sucess Message', detail: 'Saved sucessfully' }) : null;
      this.getivrdata();
    })
  }




  back() {
    localStorage.getItem('previousurl') ? this.previousurl = localStorage.getItem('previousurl') : null;

    if (localStorage.getItem('sameurl') == 'ivr') {
      localStorage.getItem('user-token') ? this.router.navigateByUrl('/dashboard/ivr/' + this.userId) : this.router.navigateByUrl('/admin/users/ivr/' + this.userId);
      localStorage.removeItem('sameurl');

    } else {
      this.router.navigateByUrl(this.previousurl)

    }
  }


  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'ivrpage');

  }

}
