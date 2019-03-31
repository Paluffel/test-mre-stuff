/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    User,
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    private text: Actor = null;
    private cube: Actor = null;

    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }
    /**
     * sets user id .
     * @param user The id of the user we will attach the hat to.
     */
    user="plauffel"
    attach: "head"
    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text. This operation is asynchronous, so
        // it returns a "forward" promise (a special promise, as we'll see later).
        const textPromise = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Text',
                transform: {
                    position: { x: 0, y: 1.5, z: 0 }
                },
                text: {
                    contents: " ",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 30 / 255, g: 206 / 255, b: 213 / 255 },
                    height: 0.3
                }
            }
        });

            /**
     * gets oject from a kit .
     * @param user The id of the user we will attach the hat to.
     */
        const model = Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 1171063328210944377",
            actor: {
                name: 'Faescoolpinkwings',
                transform: {
                    position: { x: 0, y: 0.0, z: 0 },
                    rotation: MRE.Quaternion.RotationAxis(MRE.Vector3.Up(), -180.0 * MRE.DegreesToRadians),
                    scale: { x: 1, y: 1, z: 1 }
               }
         }
     }).value;
     model.attach(this.user="Paluffel",this.attach="head");
            }
        } 

