// ==UserScript==
// @name Fimfiction Emote Extender
// @namespace ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/Fimfiction-Emote-API/master/emoteAPI-noSave.js
// @version 2.0
// ==/UserScript==

$(document).ready(run());

function run() {

	//Use the following settings only in the first script you run.

	//Uncomment to enable verbose emote tables:
	//$("body").append("<div id='verboseEnabled'></div>");

	//Uncomment *one* line to select emote size:
	//$("body").append("<div id='emoteSizeSmall'></div>"); //Small Emotes
	$("body").append("<div id='emoteSizeRegular'></div>"); //Regular Emotes
	//$("body").append("<div id='emoteSizeLarge'></div>"); //Large Emotes
	
	addEmote("http://i.imgur.com/NBEDt.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/5Tp73.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/oa0BJ.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/oaEI1BM.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/bEP8EQ2.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/mMp7L.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/HZlOi.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/7PYFy.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/DHDbq.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/8zRAx.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/aBIJ1.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/DmoWN.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/MdJgU.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/dVnqE.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/TAf9J.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/gNxjD.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/JmYib.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/aPZth.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/4sZY1.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/1NN8f.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/xmRQV.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/lGb8P.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/0zTKq.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/BeQHk.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/fl6ox.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/mbZjl.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/r19vB.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/hMgvT.png", "Emote", "AJ", "Applejack", 1);
	addEmote("http://i.imgur.com/ZCoEh.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/1ppRy.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/kjSfI.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/pwUmu.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/geqle.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/LOrxf.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/Evd0x.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/tjCXQ.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/NlvYtnA.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/Qe7TiLt.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/yAmRYea.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/pww1wjm.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/KZHFE8U.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/MZsrxQK.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/aHVIEJf.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/DPk2NZn.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/ogtnDnC.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/oBAx788.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/myOBKB4.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/LRD2W70.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/MIrVmT7.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/yyfj6BZ.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/6DvjrRv.png", "Emote", "AJ", "Applejack", 2);
	addEmote("http://i.imgur.com/0REqcvr.png", "Emote", "AJ", "Applejack", 2);

	addEmote("http://i.imgur.com/hCkff.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/FlxUX.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/Mpt2V.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/PKx4m.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/J1YdP.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/iX6uT.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/AUoqx.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/gphLa.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/eAjva.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/H718D.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/ahOjP.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/5wxoPUa.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/sb2Qbof.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/24nRCr5.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/AFuKMoD.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/mkCLMHb.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/IOcuWkK.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/YUeUKME.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/z4PAdhi.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/wwVpoHt.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/cSViT7t.png", "Emote", "FS", "Fluttershy", 1);
	addEmote("http://i.imgur.com/3UFhl3F.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/968NYEH.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/HUbolAq.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/Ade2YQ4.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/nirPCDd.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/MHYaQsA.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/r4SxEH3.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/xZjtFqi.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/5c1j3xv.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/uSOX8aw.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/EcWBGKl.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/hkeh1qO.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/zFPxSbB.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/UgQIIgZ.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/7LN4PGP.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/Ar4a6oI.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/Tsg6sSk.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/3Bw1vJc.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/09KvwZS.png", "Emote", "FS", "Fluttershy", 2);
	addEmote("http://i.imgur.com/Pz8VqXm.png", "Emote", "FS", "Fluttershy", 2);

	addEmote("http://i.imgur.com/N6frZ.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/EYLpq.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/ojb2X.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/30Blc.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/yGwJZ.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/aMNtT.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/qO3Da.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/UGWzB.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/477xD.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/RXtaw.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/uEidI.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/xeWgy.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/zbei6cO.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/zplekGi.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/jvzynek.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/LMtxcao.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/7ppPcYn.png", "Emote", "PP", "Pinkie Pie", 1);
	addEmote("http://i.imgur.com/4doC5ED.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/MQBZ41g.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/pdLkfXA.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/NwyjTTE.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/Q7KFdL7.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/q4uECGh.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/4M5fMay.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/8BDWuaI.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/sBq1PM1.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/Ok4LXo8.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/NH9sCfd.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/4nGTfIp.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/ba6ZNCe.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/pfxW46W.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/EOCIHpr.png", "Emote", "PP", "Pinkie Pie", 2);
	addEmote("http://i.imgur.com/guiiQT2.png", "Emote", "PP", "Pinkie Pie", 2);

	addEmote("http://i.imgur.com/CGBhB.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/Ma3vZ.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/zbSFhpV.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/dObdk0h.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/i3eNB.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/TAnnF.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/DHfUL.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/9YyaH.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/DobP4.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/DiqwR.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/SUAwQ.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/JT3f7.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/u3SP8.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/ZkYG2.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/2tu9n.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/KluyWmn.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/cUszKbb.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/9yFw70j.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/hyH6usq.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/CpZgXTk.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/hT1CSak.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/HDAG3B9.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/tHHlMgs.png", "Emote", "R", "Rarity", 1);
	addEmote("http://i.imgur.com/GLRdqlz.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/dwryYQj.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/pqytDZN.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/JqAPTWq.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/mmVWxDL.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/YHqF6Oe.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/BTkTZtQ.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/ijHyYGN.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/H93RXx3.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/rqasPvb.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/qrNLnm7.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/gSUBQJo.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/L82FBf7.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/uUFRVSw.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/9cktQCa.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/FIMTF9F.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/6Xjr4qx.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/8FLpgzg.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/zDp89aN.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/E3hoUZ9.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/gB0LmNp.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/4rkfVbA.png", "Emote", "R", "Rarity", 2);
	addEmote("http://i.imgur.com/e3oGM6f.png", "Emote", "R", "Rarity", 2);

	addEmote("http://i.imgur.com/tCets.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/dB5nN.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/Kv8nA.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/OzWNB.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/jjgRs.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/oZUgV.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/XtUF0.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/o42xN.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/9HNfn.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/NRtTF.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/CqXDDh6.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/QoZIz.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/Y7iEz.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/DN4kI.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/1mJFi.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/fQFdk.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/5JXsL.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/drWSW.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/r1Eed.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/mI2kf.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/JJakx.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/2mIou.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/l49YA.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/Bo3i2.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/F4J97.png", "Emote", "RD", "Rainbow Dash", 1);
	addEmote("http://i.imgur.com/99WZ6.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/KgKuu.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/ys5RX.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/m10uz.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/AJ9zx.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/81dJd.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/vc4Ok.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/e09RZ.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/Uvt7B.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/DupLe.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/Am3AY.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/7TZmw.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/72IFYgG.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/xq9lagn.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/Cqzgjte.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/fmPKYjE.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/ZaEN90U.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/1bcgbrm.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/aJbPeur.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/DuTtzKD.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/btqHYra.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/RpDP6ER.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/Giz33co.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/hn8oRP5.png", "Emote", "RD", "Rainbow Dash", 2);
	addEmote("http://i.imgur.com/g63FgrH.png", "Emote", "RD", "Rainbow Dash", 2);

	addEmote("http://i.imgur.com/AhJQA.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/teICa.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/qDNQJ.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/ULdav.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/NZ9LG.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/lyj7g.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/UQUPg.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/uCBdE.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/h6FPh.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/Zvhzz.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/5faXAtj.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/IbDeO.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/5OGeQ.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/hs7Hh.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/Srz3i.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/HlSYp.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/2652g.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/NmMWv.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/Ccokh.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/hgIE1.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/hRqZN.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/2hXpy.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/ZsI8b.png", "Emote", "TS", "Twilight Sparkle", 1);
	addEmote("http://i.imgur.com/fGB3u.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/1wjw2.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/wnSmS.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/r0Rhe.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/cCChp.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/UkpBz.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/MRdvo.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/OJHNg.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/IZJSZ.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/z2R9A.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/AKn7J.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/djjrzly.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/u91K3lE.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/6amBMsZ.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/8MaDTLV.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/SspLS12.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/SGKxDhn.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/OL1DowU.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/lSIizWD.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/JV1WARw.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/CV2Kxuv.png", "Emote", "TS", "Twilight Sparkle", 2);
	addEmote("http://i.imgur.com/OVnC2UC.png", "Emote", "TS", "Twilight Sparkle", 2);

	addEmote("http://i.imgur.com/DKLH4.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/6skeR.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/yEdBp.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/EKbat.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/Ku52Y.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/JZ7Qjcd.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/8lobA8K.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/CWD9YgU.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/AHCUSzQ.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/s9xv5RA.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/K2NUEkN.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/L3HMAWY.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/oFJvsvt.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/U60iZlB.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/YeZuAdH.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/Sm8bW9r.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/NZoImDq.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/oHyofJ3.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/UjiYYXl.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/0V8u1Lz.png", "Emote", "CMC", "The Crusaders", 1);
	addEmote("http://i.imgur.com/uVj8R.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/20x2X.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/BxLgU.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/gl6yp.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/IMGC8.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/fiITL.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/tDOuj3P.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/O7YJl8D.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/5HOAGsD.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/kQc1R5l.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/sM1SH0r.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/rLhDpm3.png", "Emote", "CMC", "The Crusaders", 2);
	addEmote("http://i.imgur.com/sYAzM.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/VViKq.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/DGsL3.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/dWaeV.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/inSsXQt.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/Gh1mXeB.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/njZ7Ocd.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/IfOQXKX.png", "Emote", "CMC", "The Crusaders", 3);
	addEmote("http://i.imgur.com/s461PaL.png", "Emote", "CMC", "The Crusaders", 3);

	addEmote("http://i.imgur.com/TkVcM.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/ZebG2.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/Wtyb9.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/j4frQ.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/fIvet.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/tkMRq.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/u9iJV.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/fH5FO.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/0lMv9.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/nh9dv.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/Av7mi.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/xJ9hG.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/TVh3T.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/QwaS1.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/YI5jr.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/lebxZ.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/QcNTf.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/qACFB.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/BbPhC.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/GmNPM.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/vBxYG.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/pV4j88A.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/VK1CV.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/Vhz4BpV.png", "Emote", "MISC", "Other", 1);
	addEmote("http://i.imgur.com/sHp29.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/rv8JX.png", "Emote", "MISC", "Other", 2);	
	addEmote("http://i.imgur.com/zI6pj.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/BDNMW.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/ZQwXp.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/cgoor.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/wLZl0.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/P83z2.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/4pRNpKu.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/tF17M4z.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/REXzM.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/3Sr1ACU.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/LbXFj.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/jorT3.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/nXFjR.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/S46ae8h.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/GIV4g.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/rTIx4.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/ZNGZn.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/UwaXc.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/kXPdl.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/mmjN8.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/BoPE4.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/W9ZCa.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/a9ddz.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/xo9Mr.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/MGw7s.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/lx5pI.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/eWyjh.png", "Emote", "MISC", "Other", 2);
	addEmote("http://i.imgur.com/pjagI.png", "Emote", "MISC", "Other", 2);

}