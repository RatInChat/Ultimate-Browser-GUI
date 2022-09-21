/*
Ultimate Browser GUI
By: RatInChat, And Piplup7575 who was forced to help. :)

This is a new maintained version based off of the nicer graphical interface of CrownJS.
If you have any suggestions, please contact me on my discord server: https://discord.gg/haAUu2DaWm 
*/

// do not remove the style thing below -- it is essential
let date = `d${Date.now()}`;
let style = document.createElement("style")
// basically creating all elements + adding id's
let jkkldsa = document.createElement("h1")
let header = document.createElement(`div`)
header.id = `${date}-header`
let minimize = document.createElement("div")
minimize.id = `${date}-minimize`
let ds1 = document.createElement("p")
ds1.id = `${date}-ds1`
jkkldsa.id = `${date}-jkkldsa`
let btn1 = document.createElement("div")
btn1.id = `${date}-btn1`
let btn2 = document.createElement("div")
btn2.id = `${date}-btn2`
let btn3 = document.createElement("div")
btn3.id = `${date}-btn3`
let btn4 = document.createElement("div")
btn4.id = `${date}-btn4`
let btn5 = document.createElement("div")
btn5.id = `${date}-btn5`
let circle1 = document.createElement("div")
circle1.className = `${date}-circleBase ${date}-circle1`
let circle2 = document.createElement("div")
circle2.className = `${date}-circleBase ${date}-circle2`
let circle3 = document.createElement("div")
circle3.className = `${date}-circleBase ${date}-circle3`
let circle4 = document.createElement("div")
circle4.className = `${date}-circleBase ${date}-circle4`
let backbtn = document.createElement("button")
backbtn.id = `${date}-backbtn`
ds1.style.display = "none"
let author = document.createElement("h2")
author.id = `${date}-author`
document.head.appendChild(style)
let mainframe = document.createElement("div");
let logo = document.createElement("img")
let consolebtn = document.createElement("div")
consolebtn.id = `${date}-consolebtn`
mainframe.appendChild(header)
mainframe.appendChild(logo)
mainframe.id = `${date}-mainframe`
let proxyDomain = "https://deploy.ratinchat.repl.co/service/hvtrs8/www."

mainframe.id = `${date}-mainframe`
document.body.appendChild(mainframe)
mainframe.append(jkkldsa)
mainframe.append(backbtn)
mainframe.append(author)
mainframe.appendChild(ds1)
logo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnXeYXVW99z9779P7nDNn+mR6JpNekYSSUKUqCIl6URAVUVGR+1pB743Xe68XC/paQAUpEkEIHSR0QkglvcxM2sxkejm9n7Pr+0zuo89rg5SZzOiT/c/546z1W9/f97PX3muvvfbeAqe3SeWAMKnUnBbDaSCTbCc4DeQ0kEnmwCmUY7BSpO6J4A+7LjG+wg9CAoLxl82f7iHjDGR99cqKgl29KedL375H0i1teQ9RCxSKAki22l2RtLJs+2srEn+UcRrIOAF5q/n7n+xr5o62anN9m2DFEosSlMEnS+R0MwnJTDhroTdsaA6rd8nbm657Z1TKhAN5seHS8/fba1/fNe9cWn++nIhDiA6bIt/Jof8eoWxknPwal7BP1670pau83+6b5/nXbdMdRFMCM7oOMyMcwqFJ5JQ0abOHbFQnFhXImgKkfdXEg0UM5rqbdjx3y+EJBfLU1StLot2DQ6GKucK6ZWfQd8M8InaZsD2BIahIgrgtj/p+hOrouDg4RkHvq1rpNzUXP7nnqqplG6qdBIZCLN27h7mROIYSRTeLZPImCp1Z4nkXw84pdPuKGbaaiGkZCpkIvlQ499be+x0TC+TTd924szN9v1I5k/UXziN6QTVxV56IO48g6IjoaBgUhNxPoe5fEQRtjDwckzD3TPtebaGl7OmdN8ycu6VUY0p/hBteW8PM2DCGHkN1O45CyA7IDCol7PU1cMjmZIA0ipLBIeex62DGTEGwknAVrZ5QID/4/COvdvamLrSU1bPl6kVEm91EfTmyPhVBMFCFPKMEVEMGQelBaKwZEydPMshdVSv9iWn+l9ffftbCg9UmFhyK8fnn7mdqJoWm9qH7PBT2Z8jsl9nunM5Ge5Buk0rWKGCTNGy6HUQraVsJKYf7KDh7tR9PU5U+oUBu/+qLxlBPErW0mrZLZhGvsxMrLpAPGIiCToE8KmCgYiAjoA4ZyDUIM+ST9PSEqo+CiM0u/93OO86/ZEO9zJwjEf7z/p/RJOeg0IEeDKJuGGK4x8Fb3lmst/jpt6QwrAZuw4smFpN2+kh5/VjK3ASayyiaV41Y7cEosYPFmNiT+ldvf9PoG8mj+IN0Lp1GotJMvFJBLR71yyCDjIZwFIZ4tK/I6OQfRGi58YQcPcFKj7Nc2jpr5kNdP7vhutfnaswMZbnz+19jlmagW4+AyYP6ah/749W8aJ/BZpNIzJPD6ijCqhYT89eRcrnwTfFQcVkL9qAfvdSKajUw5TT0lIgmqcjOCQbymX/fbKRGFNJFXrrPrCdTYSFRq2EEDFRDJSvoqEf3mTwSo5dRMgpZEKeekp69kpWicK7n4zs/Mv/BTdfPwJOK8N2HH+CqjlbI7IGqIPJTg+yJl/CIYx67rApqpQurXkrWWkGsrBJnpYuaM2twzSojY7dgMgyMqIqrN4yQyVKW78FvjSOWS/SWV09sD/nYd3cb2ahM3uWif2412UozqUYDsQhiYhYNKzo6xuixd/QUb2QoKFl0W/O4A/lF9TcWbf7cRc+t/+zMspRD4Tv338t1u9fhNg+g263IzwywLdHAw9YZ7PMoGGVFSGIVwxXNWPwuGi5uwNxcjuaQUEUB+8E07s4QU7s3Mcfehs83gBwwyDnMhOzFDHln01Hckhv3xN7tKHHt99oNLVwg67QzNKOCTKWJbIuEuchgSEhi4MZAGT16YRV0FCWJnsmhFI1fD7mr6jb/wJKmp9b+x1VLj1TLfGzjJu548tcUCf1IxVZyr4VY31XHE6Z6dhaLUFmBbqojOqWRYIOP2vc3UCjyoMgGzkNRytu7OPPIGub69+EOHERzSmTTUkJ2N3YmDuU3JAz/Yx/4zv3rJ8WV+ge/f9ggIpN0WAg3liCXmcjNMWP2G/QKcQx8Rw9XbkNEEFRSkSRiNvvL/JRpnzvB08G7Vvvy+77zzV0rr/qPnRdUmM461M7/PPZrpg9sg2oT+ush1nRO40mhjINNRejWKuIVTejBEprOr8PWXE7OIeHoyFO9eTsXhV5nlv0lfL4jgI9MZ+pJ/PU/SbWG9jc/ejD894RMaA+55EfdhimmkLaZiFX5KVRKyPNtWIqgQxgCipEo4DFGD1g5sv1p9Eh2ZnpuU+tYArlt2crG3vc1bdl9+5X+tDjCf/3uN6xofQObP4FyQGXzJjcPiy3sK3Ug108lGWzB2lBB0/n1GAEPWqRA9fYjLNv9BGd7nqSsqBc9b+tJ7449kVUC36pe3Zc7Vr0TCuTC/9tvmKMaebNOtNyLUmlBW2DDGjBoJ4woFCEi4zesFIw0hdcjWireaGXF2F0gfvjDP3yy55vXfqh1lpsVbz7FN197jmJrD0JKY/9LJh5SW9hRFSBV10SyuIGihfXULqqjYDZhP5hhwbpXuCZ3D3WBbehhNWdk3bfpceFp98PDJzTtM6FAlv1syLDHDHKiTDzgRK22w5l2LH6NfSQwCx4wZEqxEs2ksGxMHh55f23Tse5t71buxuU/nD68eFpr++fOw5zt4cerfsX88E4kr0p4TZpHR6bxakkJmcYm4tVT8c6eQs2MKagmE+U7erhoxxOcJ/6WYvsRWe4RX5dDZR/1r+7806ztiWqcUCBn3xMyXOHR4a1CwmnGqHEhnW3HXAy7SGETXFgMhaBhprcrhGd37pmBaxquPtFk/1jvU19/+Intn1p2zWCdnY9seImbNj2HPRglvyXHM63VvOQpIzyjgUywAf/0ekoX1kAGatfv4+rOB5gfeBUhHstrR7Ir+vZmX1q4fXTkMTbbhAJZfE/I8IT1/+0hFgGp2o20zIE5KLBDyOIVHFhRKTIMetviODZkP99/c8M9J5r69Z+7e/bgwsbN+z9+jj0Q288dz6+iIdmObjXT/rTGQ45meqeWk66Yjn9mI5WzqtBjMvXb9nHFwO+YV7QeeUTem9+jXNeyunPviep4t3oTCuR9vwoZngjIRoG4oGGp8mK+xINQrLJdUCg1bNgEDY9uMLw3SW5Del7olrpdJ2LEtd+6//6O6y++sbPeyYc3PsPy9o2Yi7IkXsnwaLKRHTU+5LJp6A0N1C+qB93ElPX7+XD4tzR6tpHuFd4U+9RPzvvl5tFh07htEwvkvsgu74gxRzZyJAwNS7kb++U+9BKNrYJOtSFhR8Cp6gz8YZgjV1cft97rVt5b1d9Yf7Dz2jPskjbCtx7/FcWMoOUk1m9x8nxxFXJ9A+mycuqn1WIpdlC+b4TlB+6noXinkQqb1ocejr5/xaZNxzxSOhlax53gyTT2l3WXPBB+wjtgXKPqOeKqgsPvwnFlAK1SY4NJpUYX8UgmBF2j/8e99Hy16bj0XvP9x27rueKMH+yf6pIuatvCpe3rcHp0Bt+SeUyvZrguQKKigYaGGqTqUvz7w1zR8zgzHFuJHDS2SgcKK67+5TPj2iP+0pPjSnAsYYzGWrYq9nNbd/4WUVeJqjmcDgeODwQRanTWizI1ooTfEMkaGvGfJWj/atUx6b3trsftB0oDW/ZfO3dW3Ehwy2tPESSMkZFYt9/DlqIASkU99voySptqMYXSLNn0MmeXbyUalbqzz/RdeMuq1YfHOt9jiXdMCR5LoBMps+y3kS/b+go/dhRUInoGp92J/TI/5jp4U5KpkkSCgplCtkDo13n2faPiPfUuf+DVWf1n1G3ZN63Y3hLr5/3vPI/LI9C1V2ONUU6uqgIqSimvrcIeNZh9eCNnO/aS0DW0tvzlX/rC99YIRydrJmZ7zwTHU9YF9/ac4xkU19nUPBEtj8tiwbE0gDhd4i0xQ43ZTKkhEclqRH6TY/e3a95V7xUvbvhax5kNd3b7ZC7fuYXqbC9SwcbWbiv7it1oxWUEampxOj2UHBni3NQmPNIQAzuzD975he+e0in9v+frhAL54C+7p1uH9Fa7LBMT8rgMCc/7gpjnmlmnR6m2mQgIZoYSCqFVsOO7tX9T7/KNG+0Rp3vL4am1szRzgnPb11MsFYh0KWwsuImX+DEXlxCsrMKW1JnXv5up1m6G21JDemdm/k/uuGNwPHe844k9oUCuu7evyujP9ToLo3c5Clg0A9f0AI4lDt4gRJ3NTBEmBhIqA78tsP0HM/9K70Wb25oyJc6D+2scVEW7mTbUhVU3aBuEDpcH1eelqCSIxx6gdGCYBfIh8pmYEtsS+/yqW2+973jMOhVlJxTIypWGqUtvVbxZHcVUQMqpuJqKsJzjYYM+xBSHCY9goj8s0LU6z/Yfz/szvRfvO3Rbf7XnRyMuXaiL9lGRGaSQEtkXNxEJuDC5nAT95bhzOjMSA/gZZGRrbJ/enTt79TduPulpjvEANKFARhO65du7Yu6U5lMsMqTzuKs82Jf62UQfNXYJryHRHbXS/mSK9JA4r+2Zs3Yt2LbN7A6Wrukpt1+QFTI0jHTj1mSGkipdhh3ZYyXgLcFh8eGLJJmhD5JKJrT0G0Off+nWT/x6PIwcq5gTDuTr/7bjsC2qNOh2FS2Zxh1w4Dy/jJ1qD0G3ik+w0j9kY/uaFPke+Tr7fbOfVj22zkEnZZKaIJgewKKZOJJQSZht4DFT7CnFmbNQmhqhSkjRczDZkd8zPH/Llz6WHCvjxivOhAP599s3bbBHtCWCXUHOZvDYzDjOr6JdPYzHpVFksjIy6OHtd/LkzeIL2nfnXNpvVyVHLow3n0VVBDpkEcWu43G58AhFuFMq9aTJxjN6aFf033cuv+g/x8vAsY474UDu/NqbP3OEtS9Idp2CmsUFOM6dwgH1ADabTMBhIT1QwouVZQxfXE5IyuMuRLGqKsmCzvDosgCzht/hx2k48KY0qswyR3pjGK8ONOy97YrOsTZtPONNOJBffeXVy42Q8oLNrJM35XHKOq6ZFXTbusGUxOMX2dRyIWtb/MT0JHYliQ0LQzmVnKRithgUWfy4ZCdFioxbzdOxP7y2q6/rQlasmFQrHY8F5IQDeXz541LealOdukLeo2LLyjgq/cSCMdJCiBeuv5ZdRZb/Xf4j57FgZVDLo0gF3KIZr1iMXRUp1Q1GMgUya/tv6lu+eNINZ48FxmiZCQcyKuKp6x4zrLKB4jcwZzI43C6SjTZ+dMvZdFhV0HIoyGBYCBsFEGT8ohWH7sKimykxbHT0juT0zYnZoY8vmJA5qGM1/L3KTQogaz78e2O0Z2gBEOUsiUof3/3vC+mWMthQUDCT0jUKhgZCmmLBhcNwY9Gd+ASJQ7t7euzbD7UM3Hxl9r0Snuz/Twog65f/Zr05xVlGMbTPCfCLL59Dj5RCRcUiOIlqWVQULGIeH26suhsHdrKaRvK17udjl8/5wGQ3+lj1TQogOz70my+KKe2nr3yimd+taCYi5skJKjbDwrCgogoFnIaM5ygMLy7BTTidIbu+79bk5bN+eqzJ/iOUmxRA9n7g7tmP3bxo9zMXFJORVJKChgM3fUIOhDw+w8AuuBHx4TLs9IeSCpvDy1JXtWz8RzD5eDROCiBXxQfe6TZnF2VFlYRkYNadDJryGEYWLyJ20YNV8B8dYfX0xNDf6avJr1jYczyJ/qOUnVAgy1tbLXqJbc+AlG/OmQpETWYM3c6IqKBKOfyYsYs+TKIPSbAR2dVDyxd+gRxPzdvadu8JLXaY7GAmFMhH+vd294vKFNWqEDYJ5GUHidFfUxavZMYuBRFMHiRs2DYf5NqbfsfmoEI4PPLAjn0PfXKym3si+iYEyGe2bXNoRUZvn6T6M06FhCCRK9iJSwIZq4x7FIatHNHkRtStlL3xNq/94j6e3lHKM9NcHB7sOrxj36oxWcF4IqaNZ51TDuS2jRvtmleO9Ei6veCQiZqsxLI20mYzKauC02zG7qjEsLhRBSvnPbiG+x76PkaRlT1bZnDfrFJ2DR3U02rW3ta2ekIebfunAfLfrz0VSHk8vYMm2Z5xy4RHH57P2ElYncStOVxWOzZXFTiKyBsmFj6xiad/+CgYrWhlGqmuM7nT5WGT3EuqkJu3q+2Rf7rzyCnrIXe9/lBlTvQf6jfL9rS/QEwQGUy4SVt9jDhl7DYbFncVeINkDI2bfvEc371vDYa1DOQtGCV5tMwsfhoO8oYvwUgmeuf21t9/Yzz31omIfUqA3PvcvXU50XloyGxI4ZI0ScFCf8hH3uGmz2lgclow+xvRigKkDY1rHnyLe554EQbiYKpHUHeAO4JhLeGxLaU8M9/DkXA/77Q9ekr0n0ow457Q4w/dVZl2FHX3mWQpXZ4jZVjYP+IAWymdLlDdFmyBBrSyMhKCzuW/3sT9D7yG4UshJuIYhQoEvRfR3IXusdHeOp1fNvhpTfXy1t6Hxl3/qYQx7rO9z937rbqsqexQ2KJJyfICIYtKR5cPxVnKYZeVvE/E6m9Crw0SFs2ou8Mvhj6z6mL0nEnwxhCVOELCdfTBT4T94MmjJc/gTsXFeluMRDZ28479qyf1PfLjBTpue9jGu26zxyylkWFJtGdqE4TsAh2tfnRXgN0eLyk/uAItFJoqiZslMtuPrCssalkaWfI/uwRZnaPbQ5jMSYRQHkMoQRDawZJEdNfz6F4fL9eaOZIJ793e9rvZx5v0ZC4/LkC2fPOWQN5b0hs2q/ZUXYqoVWL/Hi+qp5yDrgDdQRlHaQv6tFpiDpFMd3pPrrZ8zqhRvef84AuSov9MJ4LJHsKIpzAxBVXvQRC7wVvEwcONPFxRxJ5MH2Ii69jUt/qUrEw/FSDHBciOO76SDVkt9kxdiIhfoO0dN7K1nkOuUg6UpXEEp6HPbibpsxALp2P5t94K/vF2q7H8cenQ0KBqKBFEyyCWQhoh60QVNEwcRLGOvkxgLg+mPGy2xkgpiau2tT327Kkw61S0MaZABj5zpSPlquiNW9z+TN0gI8UCnZuc5KQSDrtm8E5FHGugHmPBPOKVTmKpdDbferiYJUv+bA/fdfG9BSMXs2hqJ3YhDkkJTXJjoYu8lMQaaODlfT7WVVjpzg33b29bVXUqzDoVbYwpkP6br++Omr1TMjW9xCsFujfaGdHKGHDOZm1NAlNRPcybT2yal7iiIK4dCCQvmfFX78J669IHf2AqZL+STx3EaYkhZLPohh/RiKDTi+ZwkYjP5Gm7g7bCMBtb7x/TPE6F8X+vjTFJxFi+XIrZtK1Js29epmqQRD30boX9sQoE11xeqDRIlQSR5p5JZlEpwyiG0hZapMxu3P63hD37gcebzVp+vxbvwKp3Y8onEAw/slbAJgyQEBVc5bN5eb+FrS6FqB6/e1frqlsm0sixantMgKSvuezFnKXk0kxxF6lZBkNtBlsPl+P2LOD5Uhtd5RYczeeSubTu6H0OeffQLcq86Xf/vSQMDOHxq57IiOlBeyGxGy8JjJwZWXRgF0ZIGjGkQDGDoQY2mE10yqHsttb7nWNlykTGOWkg8vvf/5Oc3X9rwdtPemGeWKfKhndKKC2azgu+OrbUpvFXnEv8utn0e1QKB+IvydPqLn2vpB+47sXXhGT4guTANgJSGApZdDGAqqYxiYPERBFfcAHrBk20acnR9zxcuLPtodffK+5k//+kgKgXLb5aEyufUmwDpM/OkoopvPSSlybPNNY65/BCYwhHyQLyl59F3xwTmeFCT2Hd2/XHsoDtv/7llbkuNbMz17cDV6Ebi5bE0DzkDAOnKUJYS2OvbGBwKMBuIKTEottbfxOY7Ia/l74TBmIsXjxLtQX2qOIA8nl5crrOpscliiz1tNvO4ZGGKNny6ehLzyF6WZCIomjpbWk3S6qP+Zrhe5943ZBHDqIMvkNAj6NrEnnJjUASTYgQFy34Kxeyr0fjsJKkoCn1ew7c1/VeSU/m/08IiDFjsd/weAYN0hb1nDCqq8DWJzQy+Xpy1vN4pEbmUKUX9+xLid3YRJcthrotcpZ6xqzjWpTwrc9ufpV434XhA69RqSfQjAyCECCp5fGa4wwoMo6GRmJDbrrzBnE1vXNH66/mT2bD30vbcQMZHVEZR4ZThmG1G2d0oUxR6Xssw86hcupdS3iguIy36jMUVV1A4ub3cagujyWs/yYRrPz0e4n5y/+//NW2+VI4tD1+8E3c6QNY9QzgImGAw6yR1UKETQ4qGufT0aUwmImjW4y6Xbt+eUofZT7evN6t/HEDkWcs3GwyFb/PmHUQo0Uj9UaE57YGOcu7gGfts3m0eRBbcAmZj51PaJmNRMEYSNmLK09E9MqVhjg4sjWtDrbbc4ffoJQUig6qyU1az2O3ZBnMF3BOnYqS9BAJy8S1zK7d++6ZdyLtTYY6xwVEaZn7NUxld1J0EOkCBaUjxvOrPSxyNrBVWspDTSFGypoQL7qS+Ceq6JISqmnPUEV6/vzQiSZ7w1fbXmOk+4Kh3c9To4aOvjpWwkfYUPFYIKrFiAoWpsxZxMjhNNF4moJhlLe13T36wq1/uO2Ygch108/AUrZFcvXBpXmMVJp19xtUG6UMiVfwcJXM9ilWvM2XEb5jMR3BEbQD2Y/np01bdTKuXH9Hb6USG+yL7X0Jb6QNKxl00UrO5CCnF7BZFfozBSxTKrBYgigDKgkl07Z79y9mnEy7E1X3mIAYjY0ejZKQLioW8bIIQrFM770ROgYqaDIv5mFvJc/WD+EoOZ/0ly6hZ5lBblhrT5VVTh+LxFZ8cbeaG9gtJdpfopIciqgjSkWE1Awuh42EnGJEFZh61iISHUmSAwkUm7Ro386fbxuL9k9ljGMCkpuycL9JsDcbS4YRZ2cp/CHCc5uKucLexB+0JTzc0EG8dB7mC66g/8uV9EtJLduT99PUNCbP9K34yuH/UBMD3x7cupoqZfRINPqq2CJio2+/xsDqgP5EDrEiQFGwDK1bJp1NpXftvsd9Ks0ci7beE0iydPZ/WyyebxpTI4jnywj7R3j29w7ONxXTpVzAL6sK7KwwE2y8hqFvLaCzIYnclb8539g4ZnfybrzjcHUmGesJtb+O1L+DIiGHLIoYpiLChQwOr4dkIcdIOsP0i88k2R0n153EMAtf37Hj7u+PhVGnKsa7AomXzqo3i+7Dhi8piNeMvuo7z5YfZ3FoPvzGOfzeM/rsXze24vPI3nQlg9eMrrFKdyQ9NY1jncCKL+7pzI+01YX3PE+VkEYRNZD8RDUZ1WzB5LITCcVRfVbqF0xD7ogTH0zILkUKrG27Oz3WesYr3rsCSQbmZ3FIdj6oYK7MEn58hPUHPFxmmsmL8nxWVR8kEmjBfcaVDP1bCx2+IV3oFSszdXVjPsL52DcOfKYQHvjV8K4/4M90YBEKKJITVXIQlvOYiosp5AvER1JUn12HphlInWkUQ31x3Tu/uny8DBzruH8XSNg38yHJ4rpePUtFXJxH3DHCsy/YucJcwqHUUlZVpNhSolLiv5zw1y/kyLIY+ajx42Sw9l/HWuQf433ks5uN1JHNKF1vERQ1CmYB0eQnks+TdTkQvX4yfRGyWoqZl84l2z2McSSJZGf2i5seHJdX8o11rn8TSMg9u1ky2fbnanSkawWscprNv05jybtp0s7gCamOp6r3ILgWw/KrCH8+SI8YkzOWWutYC/z/433kC5sfEaNDHx3e+yyVWhh99KRucqOIVoYUGaOyEkM2SBwKU9biJDCtCLF9GNJyqMXWXbFy7drRjy1M6u1vAgm7FsTzXtGrL3cj1aRJPNnP5jYfV5pqWJtdzKqqffT4KqkquZj+H51LR8Mg+hH13FR989vjme1Vn91U684mu5Idb+OM7MEuaaiSHcPiIZLJES4uwiitQjs0hBoaZvbF9ajEcR5O4BKEn/3k7d99aTz1jUXsvwLSY2u5w2Tz/Wf2QifiWXnEfWFeWmPmEsnOQOZMVvtMrPOPELSfR/xTl9L7L6NzSlpbzF57Si7EPnrDmsOuyEBDtONlysQsqiiiW3yomkinDoVpTWCIyJv6KXJEmXZFLQx2U3ykQK1VKL9x7eoxP7+NBYg/xvgzIB3Uey3OQDjZ4DAZ/+LFLkbZ/tsERsbOHGUmf1Abea5sO1nnHEpqL2bw2zM5MLUX4YlcSXrFiU+PHE9Cyz/27EX+dPaVXM96vLlOzCIo5iIEi5ORVI6exmpyVbWYDw5j3tVH03SZ8sUOPAd7mBZl5Op1L5QeT3unuuyfAdlvmfUHxWW/TPlILea5eVIvD7Fxn8gHxBLaYgt4rLyPdqeFEuv7SNxwEYMrVCKx+MuZ8lmXnErhn/zgI4WiWKelMLgJr03HkFzoVieaIrIHG/ElLeg2H9ITrTQlO2m6sAhfYJgpfSmWqrmvFK3Z+KNTqfd42voTkFaq/CZbeWT43DqkD1ixDQ2x7lWVhYoJU7KFN8RyXijeg2Seh715KSO3T+dgdS/SiLkkXd50wpOHxyP2j2Wvv+znVzQltOez6R14R6/cTXZURxBRFImGZTYvaiExqxlvbwL3qt3M8x1mzlXFlCW2MCflwvfk5ve8ID4RXWNR50/C2sRZu0MlwdmFz7Zgq83S8/wQw0M6ZyvlbI3P5M3AETocVkqdS4l+dAF9V8kIhvDCgKP2yrEQcrwx/s+Z3x+sJ1KmxXdhN0PeUY5ktqEqMjvyQdo/voBMoBz/vftYuGM382u7WbjCoO7Im0esvy3UHW97p6r8USAbmTXNYnW0d189H9vlHkwdg6zdkuRixU4k3swGSWKd+zAm01ycM84j/Klmuus7qbRibZugD3R9buGtzUsSzv0WVzeSOoQo+VF9FUgo5IcUHrxwCdFL52BVRIo/vZYvJd9iasNQzvdxR7Xn9tcjp8rg423nKJD1wvRDQ9NnNeY+PQ9nWZzWNwaxRHSmpcpoT1fwRlE3gyYPZfY5RK8+i9AlKTKq8lCkePonjrfBsSz/oPMzF8+vMz8na+1W0SqhOGeBywzZBJsjlfz+riuJzaim+NVhufRbGx59cuCmCdV7LLkLj1NlL7NUZFs/eTXmSxzoXYNsaY2yLGchGq1hu6ixx9qDKM7AV7uY6HWNHGzupCjtfZhQAAAClUlEQVRqLe6vapnwPc1YudKSXtN2llUeuVw2lZ6hlcx3m/WwbiTSXfctXvr209/50FtBp3nv6kn2Ucq/B0d4hVmvHW6af0H8/1yOtzbKri29BCIpamJlHEoF2OBoIyWVUGKaQ/L8ucQvlFGdxts9noZzj4X46TLH54DwrHlRbPMNX/JJHw2iRntoPTzA4oRIdriEdmTapX7MRj2+8kVEl1ZzZH4n3qwr0Ff912tyj6/p06X/lgPCrdWf25f9t0/N8J+RYe/+LoLDIcrCDoaiXvaZOkkaDkqMGWQWTaNwBuS9hYGusmkntGjhNIL3dkBY/l8HLzKWuV8xnEc40n2IWWEFY8hBn5zliDaARZ5CUWAOqboSRhYNEBR8Z+2rbTyu9VXvLeN0iT86cHSUdVU8F2mPtPr9vT2UDqukh60Mqr2kZBP+Qg3UNqLViAxNiSdD9Qu8p+0bPweOAikzItNTkd7Whv4Qrj6BbCxJJDeClCkmYGkg7XGTb0rg9rvu3tfU/E+x7H/8LD25yH+6UhfU9ier+pMfsvfK5FIh5ISMK1OCy1uNHFOIzEsysvDMSTvlcHI2TJ7af2awObsv5xlI2bRwBEvYQkApRs7ZkEwFTNVGR9vi+WN+r3zyWDE5lPz5Hm+0llkS+R5pKG12hyy4dT/Cm0mYoeEzGedtu3rx2skh+59XxV8dgkxK+xIxqWxwj4C1V8D7Whz1DFHzRKz27TcvHLPv9f3zWnpymf3Nc4KkdlxelOR524+6BH/BimmG/vaOG5eevjI/Oa+PqfbfPUm7t+xZHPxi68bgkkosJcx4+/Zz244p4ulCJ+XA6VHTSdk39pVPAxl7T08q4mkgJ2Xf2Fc+DWTsPT2piKeBnJR9Y1/5/wED9UQL7CS86gAAAABJRU5ErkJggg==";
// appending all elements
mainframe.id = `${date}-main`
document.body.appendChild(mainframe)
mainframe.append(jkkldsa)
mainframe.append(backbtn)
mainframe.append(author)
mainframe.appendChild(ds1)
mainframe.append(btn1)
mainframe.append(btn2)
mainframe.append(btn3)
mainframe.append(btn4)
mainframe.append(btn5)

mainframe.appendChild(consolebtn)
backbtn.textContent = "Go back"
backbtn.style.display = "none"
jkkldsa.textContent = "Ultimate Browser GUI"
author.textContent = "A Browser \"Helper\" by RatInChat"
btn1.textContent = "Browser"
btn2.textContent = "Games"
btn3.textContent = "Special"
btn4.textContent = "Other"
btn5.textContent = "Credits"
consolebtn.textContent = "Open Console"
ds1.style.display = "none"

circle1.onclick = () => {
  mainframe.setAttribute("closing", "");

  mainframe.addEventListener(
    "animationend",
    () => {
      mainframe.removeAttribute("closing");
      mainframe.style.display = "none"
    },
    { once: true }
  );
}
circle3.onclick = () => {
  minimize.setAttribute("closing", "");

  minimize.addEventListener(
    "animationend",
    () => {
      minimize.removeAttribute("closing");
      minimize.style.display = "none"
    },
    { once: true }
  );
}
circle4.onclick = async () => {
  document.body.appendChild(mainframe)
  minimize.style.display = "none"
  mainframe.style.display = ""
}

let right = 300;
let left = 50;

header.appendChild(circle1)
header.appendChild(circle2)
minimize.appendChild(circle3)
minimize.appendChild(circle4)

const dragElement = (element, dragzone) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
//MouseUp occurs when the user releases the mouse button
  const dragMouseUp = () => {
    document.onmouseup = null;
//onmousemove attribute fires when the pointer is moving while it is over an element.
    document.onmousemove = null;
  };

  const dragMouseMove = (event) => {

    event.preventDefault();
//clientX property returns the horizontal coordinate of the mouse pointer
    pos1 = pos3 - event.clientX;
//clientY property returns the vertical coordinate of the mouse pointer
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;
//offsetTop property returns the top position relative to the parent
    right = `${element.offsetTop - pos2}px`;
    left = `${element.offsetLeft - pos1}px`;
    element.style.top = right;
    element.style.left = left;
    minimize.style.top = right;
    minimize.style.left = left;
  };

  const dragMouseDown = (event) => {
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  dragzone.onmousedown = dragMouseDown;
};

const dragElement2 = (element) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
//MouseUp occurs when the user releases the mouse button
  const dragMouseUp2 = () => {
    document.onmouseup = null;
//onmousemove attribute fires when the pointer is moving while it is over an element.
    document.onmousemove = null;
  };

  const dragMouseMove2 = (event) => {

    event.preventDefault();
//clientX property returns the horizontal coordinate of the mouse pointer
    pos1 = pos3 - event.clientX;
//clientY property returns the vertical coordinate of the mouse pointer
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;
//offsetTop property returns the top position relative to the parent
    right = `${element.offsetTop - pos2}px`;
    left = `${element.offsetLeft - pos1}px`;
    element.style.top = right;
    element.style.left = left;
    mainframe.style.top = right;
    mainframe.style.left = left;
  };

  const dragMouseDown2 = (event) => {
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    document.onmouseup = dragMouseUp2;
    document.onmousemove = dragMouseMove2;
  };

  element.onmousedown = dragMouseDown2;
};

const dragable = document.getElementById(`${date}-main`),
  dragzone = document.getElementById(`${date}-header`);
dragElement(dragable, dragzone);
circle2.onclick = async () => {
  document.body.appendChild(minimize)
  minimize.style.display = ""
  mainframe.style.display = "none"
  const dragable1 = document.getElementById(`${date}-minimize`);
  dragElement2(dragable1);
}
btn1.onclick = () => {
    let stylething = document.createElement("style")
    document.head.appendChild(stylething)
    let style = document.createElement("style")
// basically creating all elements + adding id's
    let jkkldsa = document.createElement("h1")
    let ds1 = document.createElement("p")
    ds1.id = `${date}-ds1`
    jkkldsa.id = `${date}-jkkldsa`
    let btn1 = document.createElement("div")
    btn1.id = `${date}-btn1`
    let btn2 = document.createElement("div")
    btn2.id = `${date}-btn2`
    let btn3 = document.createElement("div")
    btn3.id = `${date}-btn3`
    let backbtn = document.createElement("button")
    backbtn.id = `${date}-backbtn`
    ds1.style.display = "none"
    let author = document.createElement("h2")
    author.id = `${date}-author`
    document.head.appendChild(style)
    let main = document.createElement("div");
    let btn4 = document.createElement("div")
    btn4.id = `${date}-btn4`
    let btn5 = document.createElement("div")
    btn5.id = `${date}-btn5`
    let btn6 = document.createElement("div")
    btn6.id = `${date}-btn6`
    let btn7 = document.createElement("div")
    btn7.id = `${date}-btn7`

    main.id = `${date}-main`
    document.body.appendChild(main)
    main.append(jkkldsa)
    main.append(backbtn)
    main.append(author)
    main.appendChild(ds1)
    document.body.appendChild(main)
    main.append(jkkldsa)
    main.append(backbtn)
    main.append(author)
    main.appendChild(ds1)
    main.append(btn1)
    main.append(btn2)
    main.append(btn3)
    main.append(btn4)
    main.append(btn5)
    main.append(btn6)
    main.append(btn7)
    backbtn.textContent = "Go back"
    backbtn.style.display = "none"
    jkkldsa.textContent = "Browser"
    author.textContent = "Bypasses, proxies, and more."
    btn1.textContent = "History Flooder"
    btn2.textContent = "Tab Cloak"
    btn3.textContent = "Proxy Browser"
    btn4.textContent = "Edit/UnEdit Anything."
    btn5.textContent = "LocalStorage Editor"
    btn6.textContent = "Script Injector"
    btn7.textContent = "X-Ray Goggles"
    ds1.style.display = "none"
    let goback = document.createElement("button")
    goback.id = `${date}-goback`
    goback.style.display = ''
    goback.textContent = "Go back"
    main.appendChild(goback)

    goback.onclick = () => {
      main.style.display = "none"
    }

    btn1.addEventListener("click", function () {

      !function () {
        for (var t = "/", o = 0; o < 100; o++)
          history.pushState(0, 0, t += o.toString())
      }();

      ds1.style.display = ''
      ds1.textContent = "Activated History Flooder."
    });
    btn2.onclick = function tabcloak() {

      let tabname = prompt("Enter Tab Name: ")
      document.jkkldsa = tabname
      ds1.style.display = ''
      ds1.textContent = "Activated Tab Cloak."
      function gcloak() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
        document.jkkldsa = tabname;
        console.log(document.jkkldsa);
        document.getElementsByTagName('head')[0].appendChild(link)
      };
      gcloak(); setInterval(gcloak, 1000);
    
    }
    btn3.addEventListener("click", function () {
      let url = prompt("Insert a URL. (ex. google.com) DO NOT ADD www. or https://"); if (url == "" || url == null) { url = "google.com" }; var code1 = "<iframe src="; var code2 = " width=100% height=100%>"; var codeIP3 = `${code1}${proxyDomain}${url}${code2}`;
       document.write(codeIP3);
    });
    btn4.addEventListener("click", function () {
      if (document.body.contentEditable == "false" || document.designMode == "off") {
      document.body.contentEditable = 'true'; document.designMode='on'; void 0
      } else {
        document.body.contentEditable = 'false'; document.designMode='off'; void 0
      }
    })
    btn5.onclick = () => {

      let stylething = document.createElement("style")
      document.head.appendChild(stylething)
      let main = document.createElement("div")
      main.id = `${date}-main`
      document.body.appendChild(main)
      main.appendChild(style)
      let goback = document.createElement("button")
      goback.id = `${date}-goback`
      let submit = document.createElement("button")
      submit.id = `${date}-goback`
      let box = document.createElement("div")
      let table = document.createElement('table');
      let thead = document.createElement('thead');
      let tbody = document.createElement('tbody');
      table.appendChild(thead);
      table.appendChild(tbody);
      box.appendChild(table);
      // Creating and adding data to first row of the table
      let row_1 = document.createElement('tr');
      let heading_1 = document.createElement('th');
      heading_1.innerHTML = "Key";
      let heading_2 = document.createElement('th');
      heading_2.innerHTML = "Value";
      row_1.appendChild(heading_1);
      row_1.appendChild(heading_2);
      thead.appendChild(row_1);
      var i;
      function load() {
      for(var s = 0;s<tbody.rows.length;){
          tbody.deleteRow(s);
      }
      for (i = 0; i < localStorage.length; i++)   {
        let row_2 = document.createElement('tr');
        let row_2_data_2 = document.createElement('td');
        row_2_data_2.innerHTML = localStorage.key(i);
        let row_2_data_3 = document.createElement('td');
        row_2_data_3.innerHTML = localStorage.getItem(localStorage.key(i));
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        tbody.appendChild(row_2);
     }
    }
     setInterval(load(), 15000);
      load()
      box.id = `${date}-box`
      main.appendChild(box)
      let console23 = document.createElement("input")
      let console233 = document.createElement("input")
      console23.id = `${date}-console23`
      console233.id = `${date}-console233`
      main.appendChild(console23)
      main.appendChild(console233)
      console23.placeholder = "Key"
      console233.placeholder = "Value"
      goback.style.display = ''
      goback.textContent = "Go back"
      submit.style.display = ''
      submit.textContent = "Submit"
      main.appendChild(submit)
      main.appendChild(goback)
      submit.onclick = () => {
        localStorage.setItem(console23.value, console233.value);
          load();
      }
      goback.onclick = () => {
        main.style.display = "none"
      }
    
      // main css
      stylething.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    #${date}-goback {
    z-index: 999999 !important;
    }
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    #${date}-box {
      color: white;
      width: 700px !important ;
      height: 300px !important;
      background-color: black;
      margin: 50px;
      padding: 5px;
      padding-left: 5px;
      font-family: "Open Sans";
      border-style: none;
     overflow-y: scroll; /* Show vertical scrollbar */
    }
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
   #${date}-console {
    width: 100px !important;
    border-color: white;
    height: 50px !important;
    background-color: black;
    color: white;
    font-family: "Open Sans";
  }
  #${date}-console::placeholder {
    color: white;
    font-family: "Open Sans";
  }
  #${date}-console23 {
    width: 100px !important;
    height: 50px !important;
    background-color: black;
    border-color: white;
    color: white;
    font-family: "Open Sans";
  }
  #${date}-console23::placeholder {
    color: white;
    font-family: "Open Sans";
  }
  #${date}-console233 {
    width: 100px !important;
    height: 50px !important;
    background-color: black;
    border-color: white;
    color: white;
    font-family: "Open Sans";
  }
  #${date}-console233::placeholder {
    color: white;
    font-family: "Open Sans";
  }
    `
    
    
  }

  // make script injector for btn6
  btn6.onclick = async () => {
    let what = prompt("Do you want to insert a script url or script code? (url/code)")
    if (what == "url") {
      let url = prompt("Insert the url of the script.")
      let script = document.createElement("script")
      // fetch javascript url and asign it to javascript
      let javascript = await fetch(url)
        .then(response => response.text())
        .then(text => script.textContent = text)
      let encoded = await btoa(javascript)
      await script.setAttribute("src", `data:text/text;base64,${encoded}`)
      document.head.appendChild(script)
    } else if (what == "code") {
      let code = prompt("Insert the code of the script.")
      let script = document.createElement("script")
      let encoded = btoa(code)
      script.setAttribute(
        'src',
        `data:text/text;base64,${encoded}`,
      );
      
      document.head.appendChild(script)
    }
  }
  btn7.onclick = () => {
    var script=document.createElement('script');
    script.src='https://x-ray-goggles.mouse.org/webxray.js';
    script.className='webxray';script.setAttribute('data-lang','en-US');
    script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
    document.head.appendChild(script);
  }
    // main css
    stylething.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    #${date}-main {
      background-color: black;
      width: 800px !important;
      height: 600px !important;
      border-radius: 10px;
      animation-name: slidein;
      animation-duration: 2s;
      text-align: center;
      margin: 0px auto;
      z-index: 999999 !important;
      font-family: "Open Sans";
      position: absolute !important;
      left: 300px !important;
      top: 50px !important;
    }
    #${date}-jkkldsa, #${date}-author {
      color: white;
       font-family: "Open Sans";
      padding: -10px;
    }
    #${date}-btn1, #${date}-btn2, #${date}-btn3, #${date}-btn4, #${date}-btn5, #${date}-btn6, #${date}-btn7 {
      background-color: grey;
      color: white;
      font-family: "Open Sans";
      width: 50% !important;
      position: relative !important;
      font-size: 25px !important;
      border-radius: 10px;
      height: 5.5% !important;
      margin: 5px auto !important;
      transtion: 1s;
      transition-duration: 0.5s
    }
    #${date}-btn2:hover,#${date}-btn1:hover, #${date}-btn3:hover, #${date}-btn4:hover, #${date}-btn5:hover, #${date}-btn6:hover, #${date}-btn7:hover {
      background-color: white;
      color: black;
      font-family: "Open Sans";
      width: 55% !important;
      position: relative !important;
      font-size: 25px;
    border-radius: 10px;
      height: 5.5% !important;
      margin: 5px auto;
      transition: all .2s ease-in-out;
      transform: scale(1.05);
     
    }
    #${date}-ds1 {
      color: green;
      font-family: "Open Sans";
      font-family: 10px;
      position: absolute;
      top: -5px;
      left: 10px;
    }
    @keyframes slidein {
      0% {
        opacity: 0%
      }
      100% {
        opacity: 100%
      }
    }
    @keyframes slideout {
      0% {
        opacity: 100%
      }
      100% {
        opacity: 0%
      }
    }
    #${date}-goback {
      z-index: 999999 !important;
      }
  `
  
  
}
consolebtn.onclick = () => {

  let stylething = document.createElement("style")
  document.head.appendChild(stylething)
  let main = document.createElement("div")
  main.id = `${date}-main`
  document.body.appendChild(main)
  main.appendChild(style)
  let goback = document.createElement("button")
  goback.id = `${date}-goback`
  let console = document.createElement("input")
  let box = document.createElement("div")
  console.id = `${date}-console`
  box.id = `${date}-box`
  main.appendChild(console)
  main.appendChild(box)
  console.placeholder = "Enter a command"
  goback.style.display = ''
  goback.textContent = "Go back"
  main.appendChild(goback)

  goback.onclick = () => {
    main.style.display = "none"
  }

  // main css
  stylething.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#${date}-console {
  width: 300px !important;
  border-style: none;
  height: 50px !important;
  background-color: black;
  color: green;
  font-family: "Open Sans";
}
#${date}-console::placeholder {
  color: green;
  font-family: "Open Sans";
}
#${date}-goback {
z-index: 999999 !important;
}
#${date}-box {
  color: green;
  width: 294px !important ;
  height: 300px !important;
  background-color: black;
  margin: 50px;;
  padding: 5px;
  padding-left: 200px;
  font-family: "Open Sans";
  border-style: none;
 overflow-y: scroll; /* Show vertical scrollbar */
}
`



  console.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      let output = document.createElement("p")
      output.textContent = console.value
      box.appendChild(output)


      if (console.value.includes("piplup")) {
        output.value = console.value
      }
      else {
        output.textContent = "Unknown command ' " + console.value + "'"
        output.style.color = "red"
      }
      if (console.value == "piplup console blue") {
        output.textContent = "Changed console theme to blue."
        box.style.backgroundColor = "blue"

      }
      else if (console.value == "piplup console yellow") {
        output.value = console.value
        output.textContent = "Changed console theme to yellow."
        box.style.backgroundColor = "yellow"
      }
      else if (console.value == "piplup custom theme") {
        let bozo = prompt("Enter Image URL.")
        output.value = console.value
        document.body.style.backgroundImage = "url('" + bozo + "')";
        output.textContent = "Added custom theme to page."
      }

      else if (console.value == "piplup new") {
        output.textContent = "if (console.value == 'command- name-here' { code here } else {output.textContent 'Unknown command' ' + console.value + ''' output.style.color = 'red'}"

      }
      else if (console.value == "piplup edit") {
        javascript: document.body.contentEditable = true; void 0;
        output.textContent = "Edit Mode turned on."

      }
      else if (console.value == "piplup create cmd") {
        let name = prompt("Name your command")
        let prefix = "crwn"
        let func = prompt("Paste your JS code. Do piplup new for the basic command creation guide.")

        let store = prefix + " " + name
        eval(func);
        output.textContent = "Executed " + store
      }

      else if (console.value == "piplup proxify site") {
        let url = prompt("Insert a URL. (ex. google.com) DO NOT ADD www. or https://"); if (url == "" || url == null) { url = "google.com" };  var code1 = "<iframe src="; var code2 = " width=100% height=100%>"; var codeIP3 = `${code1}${proxyDomain}${url}${code2}`;
        document.write(codeIP3);
      }

      else {
        output.textContent = "Unknown command ' " + console.value + "'"
        output.style.color = "red"
      }

    }
  });

}


document.addEventListener("keydown", function (e) {
  var key = e.keyCode + e.location;
  if (key == "Shift2")
    if (main.style.visibility == "hidden") {
      main.style.visibility = "visible";
      console.style.visibility = "visible";
    } else {

      main.style.visibility = "hidden";
      console.style.visibility = "hidden";
    };
});

consolebtn.onclick = () => {

  let stylething = document.createElement("style")
  document.head.appendChild(stylething)
  let main = document.createElement("div")
  main.id = `${date}-main`
  document.body.appendChild(main)
  main.appendChild(style)
  let goback = document.createElement("button")
  goback.id = `${date}-goback`
  let console = document.createElement("input")
  let box = document.createElement("div")
  console.id = `${date}-console`
  box.id = `${date}-box`
  main.appendChild(console)
  main.appendChild(box)
  console.placeholder = "Enter a command"
  goback.style.display = ''
  goback.textContent = "Go back"
  main.appendChild(goback)

  goback.onclick = () => {
    main.style.display = "none"
  }


  // main css
  stylething.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#${date}-console {
  width: 300px !important;
  border-style: none;
  height: 50px !important;
  background-color: black;
  color: green;
  font-family: "Open Sans";
}
#${date}-console::placeholder {
  color: green;
  font-family: "Open Sans";
}
#${date}-goback {
z-index: 999999 !important;
}
#${date}-box {
  color: green;
  width: 294px !important ;
  height: 300px !important;
  background-color: black;
  margin: 50px;;
  padding: 5px;
  padding-left: 200px;
  font-family: "Open Sans";
  border-style: none;
 overflow-y: scroll; /* Show vertical scrollbar */
}
`



  // on enter button

console.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      let output = document.createElement("p")
      output.textContent = console.value
      box.appendChild(output)


      if (console.value.includes("piplup")) {
        output.value = console.value
      }
      else {
        output.textContent = "Unknown command ' " + console.value + "'"
        output.style.color = "red"
      }
      if (console.value == "piplup console blue") {
        output.textContent = "Changed console theme to blue."
        box.style.backgroundColor = "blue"

      }
      else if (console.value == "piplup console yellow") {
        output.value = console.value
        output.textContent = "Changed console theme to yellow."
        box.style.backgroundColor = "yellow"
      }
      else if (console.value == "piplup custom theme") {
        let bozo = prompt("Enter Image URL.")
        output.value = console.value
        document.body.style.backgroundImage = "url('" + bozo + "')";
        output.textContent = "Added custom theme to page."
      }

      else if (console.value == "piplup new") {
        output.textContent = "if (console.value == 'command- name-here' { code here } else {output.textContent 'Unknown command' ' + console.value + ''' output.style.color = 'red'}"

      }
      else if (console.value == "piplup edit") {
        javascript: document.body.contentEditable = true; void 0;
        output.textContent = "Edit Mode turned on."

      }
      else if (console.value == "piplup create cmd") {
        let name = prompt("Name your command")
        let prefix = "crwn"
        let func = prompt("Paste your JS code. Do piplup new for the basic command creation guide.")

        let store = prefix + " " + name
        eval(func);
        output.textContent = "Executed " + store
      }

      else if (console.value == "piplup proxify site") {
        let url = prompt("Insert a URL. (ex. google.com) DO NOT ADD www. or https://"); if (url == "" || url == null) { url = "google.com" }; var proxyDomain = "https://deploy.ratinchat.repl.co/service/hvtrs8/www."; var code1 = "<iframe src="; var code2 = " width=100% height=100%>"; var codeIP3 = `${code1}${proxyDomain}${url}${code2}`;
        document.write(codeIP3);
      }       else if (console.value == "piplup install (your proxy name)") {
        output.textContent = "Downloaded (your proxy name)"
        proxyDomain = "proxy url here"; // dead????? yessir oh ok just do it. Im making the chat thing in another window. 
      }

      else {
        output.textContent = "Unknown command ' " + console.value + "'"
        output.style.color = "red"
      }


    }
  });

}
btn4.onclick = () => {
  let stylething = document.createElement("style")
  document.head.appendChild(stylething)
  let style = document.createElement("style")
// basically creating all elements + adding id's
  let jkkldsa = document.createElement("h1")
  let ds1 = document.createElement("p")
  ds1.id = `${date}-ds1`
  jkkldsa.id = `${date}-jkkldsa`
  let btn1 = document.createElement("div")
  btn1.id = `${date}-btn1`
  let backbtn = document.createElement("button")
  backbtn.id = `${date}-backbtn`
  ds1.style.display = "none"
  let author = document.createElement("h2")
  author.id = `${date}-author`
  document.head.appendChild(style)
  let main = document.createElement("div");
  main.id = `${date}-main`
  document.body.appendChild(main)
  main.append(jkkldsa)
  main.append(backbtn)
  main.append(author)
  main.appendChild(ds1)
  document.body.appendChild(main)
  main.append(jkkldsa)
  main.append(backbtn)
  main.append(author)
  main.appendChild(ds1)
  main.append(btn1)
  backbtn.textContent = "Go back"
  backbtn.style.display = "none"
  jkkldsa.textContent = "Other"
  author.textContent = "Stuff that din't fit in the other categories."
  btn1.textContent = "Themes"
  ds1.style.display = "none"
  let goback = document.createElement("button")
  goback.id = `${date}-goback`
  goback.style.display = ''
  goback.textContent = "Go back"
  main.appendChild(goback)

  goback.onclick = () => {
    main.style.display = "none"
  }
  btn1.onclick = function themes() {
  let defualt = false;
  let color = prompt("Please choose a theme. Available Themes: 'SeaBlue', 'FlamingRed', 'Gold.' (this command is temporarily broken. Some of it may not work.)")

  if (color == "SeaBlue") {
    mainframe.style.backgroundColor = "lightblue"
    jkkldsa.style.color = "black"
    author.style.color = "black"
    ds1.style.color = "blue"
    ds1.style.display = ''
  } else if (color == "FlamingRed") {
    mainframe.style.backgroundColor = "red"
    jkkldsa.style.color = "white"
    author.style.color = "white"
    ds1.style.color = "yellow"
    ds1.style.display = ''

  } else if (color == "Gold") {

    ds1.style.display = ''
    btn1.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    btn2.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    btn3.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    btn4.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    btn5.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    btn6.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    anime.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn1.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn2.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn3.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn4.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn5.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn6.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    newbtn7.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
    backbtn.style.backgroundImage = "url('https://media.istockphoto.com/photos/gold-background-golden-polished-metal-with-steel-texture-picture-id1293988714?b=1&k=20&m=1293988714&s=170667a&w=0&h=1McwI39TCx0I8_RSUKtAxtl41KOFDwy68MmSOFDiyGQ=')";
  } else {
      mainframe.style.backgroundColor = "black"
      jkkldsa.style.color = "white"
      ds1.style.color = "white"
      ds1.style.display = ''
      color = "black"
      defualt = true;
      ds1.textContent = "None Selected. Defualt Enabled."
      ds1.style.display = ''
  }
  if (defualt == false) {
  ds1.textContent = "Activated Themes. Selected Theme: " + color
  ds1.style.display = ''
  }
  
  }
  stylething.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  #${date}-main {
    background-color: black;
    width: 800px !important;
    height: 600px !important;
    border-radius: 10px;
    animation-name: slidein;
    animation-duration: 2s;
    text-align: center;
    margin: 0px auto;
    z-index: 999999 !important;
    font-family: "Open Sans";
    position: absolute !important;
    left: 300px !important;
    top: 50px !important;
  }
  #${date}-jkkldsa, #${date}-author {
    color: white;
     font-family: "Open Sans";
    padding: -10px;
  }
  #${date}-btn1, #${date}-btn2, #${date}-btn3, #${date}-btn4, #${date}-btn5, #${date}-btn6, #${date}-btn7 {
    background-color: grey;
    color: white;
    font-family: "Open Sans";
    width: 50% !important;
    position: relative !important;
    font-size: 25px !important;
    border-radius: 10px;
    height: 5.5% !important;
    margin: 5px auto !important;
    transtion: 1s;
    transition-duration: 0.5s
  }
  #${date}-btn2:hover,#${date}-btn1:hover, #${date}-btn3:hover, #${date}-btn4:hover, #${date}-btn5:hover, #${date}-btn6:hover, #${date}-btn7:hover {
    background-color: white;
    color: black;
    font-family: "Open Sans";
    width: 55% !important;
    position: relative !important;
    font-size: 25px;
  border-radius: 10px;
    height: 5.5% !important;
    margin: 5px auto;
    transition: all .2s ease-in-out;
    transform: scale(1.05);
   
  }
  #${date}-ds1 {
    color: green;
    font-family: "Open Sans";
    font-family: 10px;
    position: absolute;
    top: -5px;
    left: 10px;
  }
  @keyframes slidein {
    0% {
      opacity: 0%
    }
    100% {
      opacity: 100%
    }
  }
  @keyframes slideout {
    0% {
      opacity: 100%
    }
    100% {
      opacity: 0%
    }
  }
  #${date}-goback {
    z-index: 999999 !important;
    }
`
}
btn5.onclick = () => {
  
  let stylething = document.createElement("style")
  document.head.appendChild(stylething)
  let main = document.createElement("div")
  main.id = `${date}-main`
  document.body.appendChild(main)
  main.appendChild(style)
  let goback = document.createElement("button")
  goback.id = `${date}-goback`
  let box = document.createElement("div")
  box.id = `${date}-box`
  main.appendChild(box)
  goback.style.display = ''
  goback.textContent = "Go back"
  main.appendChild(goback)
  // create paragraph
  let title = document.createElement("h1")
  title.textContent = "Credits"
  let output = document.createElement("p")
  output.textContent = "Ideas: RatInChat, RetronBv, Piplup."
  let output2 = document.createElement("p")
  output2.textContent = "Proxy Browser: EngineXNetwork"
  let output3 = document.createElement("p")
  output3.textContent = "Piplup7575: Piplup7575"
  let output4 = document.createElement("p")
  output4.textContent = "X-Ray Goggles: mouse.org"
  box.appendChild(title)
  box.appendChild(output)
  box.appendChild(output2)
  box.appendChild(output3)
  box.appendChild(output4)
  goback.onclick = () => {
    main.style.display = "none"
  }

  // main css
  stylething.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#${date}-console {
  width: 300px !important;
  border-style: none;
  height: 50px !important;
  background-color: black;
  color: white;
  font-family: "Open Sans";
}
#${date}-console::placeholder {
  color: white;
  font-family: "Open Sans";
}
#${date}-goback {
z-index: 999999 !important;
}
#${date}-box {
  color: white;
  width: 700px !important ;
  height: 300px !important;
  background-color: black;
  margin: 50px;
  padding: 5px;
  padding-left: 5px;
  font-family: "Open Sans";
  border-style: none;
 overflow-y: scroll; /* Show vertical scrollbar */
}
`
};
style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
#${date}-main {
  background-color: black;
  width: 800px !important;
  height: 600px !important;
  border-radius: 10px;
  animation-name: slidein;
  animation-duration: 2s;
  text-align: center;
  margin: 0px auto;
  z-index: 999999 !important;
  font-family: "Open Sans";
  position: absolute !important;
  left: ${right}px;
  top: ${left}px;
}
#${date}-main[closing] {
  background-color: black;
  width: 800px !important;
  height: 600px !important;
  border-radius: 10px;
  animation-name: slidein;
  animation-duration: 2s;
  text-align: center;
  margin: 0px auto;
  z-index: 999999 !important;
  font-family: "Open Sans";
  position: absolute !important;
  left: 300px;
  top: 50px;
  animation: fade-out 500ms forwards;
}

#${date}-jkkldsa, #${date}-author {
  color: white;
   font-family: "Open Sans";
  padding: -10px;
}
#${date}-btn1, #${date}-btn2, #${date}-btn3, #${date}-btn4, #${date}-btn5, #${date}-consolebtn {
  background-color: grey;
  color: white;
  font-family: "Open Sans";
  width: 50% !important;
  position: relative !important;
  font-size: 25px !important;
  border-radius: 10px;
  height: 5.5% !important;
  margin: 5px auto !important;
  transtion: 1s;
  transition-duration: 0.5s
}
#${date}-btn2:hover,#${date}-btn1:hover, #${date}-btn3:hover, #${date}-btn4:hover, #${date}-btn5:hover, #${date}-consolebtn:hover {
  background-color: white;
  color: black;
  font-family: "Open Sans";
  width: 55% !important;
  position: relative !important;
  font-size: 25px;
border-radius: 10px;
  height: 5.5% !important;
  margin: 5px auto;
  transition: all .2s ease-in-out;
  transform: scale(1.05);
 
}
#${date}-ds1 {
  color: green;
  font-family: "Open Sans";
  font-family: 10px;
  position: absolute;
  top: -5px;
  left: 10px;
}
#${date}-minimize {
  width: 50px !important;
  height: 5px !important;
  left: 300px;
  top: 50px;
  position: absolute !important;
}
#${date}-minimize[closing] {
  width: 50px !important;
  height: 5px !important;
  left: ${right}px;
  top: ${left}px;
  position: absolute !important;
    animation: fade-out 500ms forwards;
}
#${date}-header, #${date}-minimize {
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #D0D0D0;
  color: #fff;
}
@keyframes slidein {
  0% {
    opacity: 0%
  }
  100% {
    opacity: 100%
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
  .${date}-circleBase {
    border-radius: 50%;
    display: inline-block;
    float: left;
  }
  
  .${date}-circle1, .${date}-circle3 {
    width: 15px;
    height: 15px;
    background: #F20000;
    border: 1px solid #000;
    cursor: pointer;
  }
  
  .${date}-circle2, .${date}-circle4 {
    width: 15px;
    height: 15px;
    background: #FFC947;
    border: 1px solid #000;
    cursor: pointer;
  }
`
