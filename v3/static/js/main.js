/*-----------------------------------------------------------*\
|                              _                              |
|                             | |                             |
|  __      _____  ___ ___  ___| | __ _  __ _ _ __ ___   ___   |
|  \ \ /\ / / _ \/ __/ __|/ _ \ |/ _` |/ _` | '_ ` _ \ / _ \  |
|   \ V  V /  __/\__ \__ \  __/ | (_| | (_| | | | | | |  __/  |
|    \_/\_/ \___||___/___/\___|_|\__, |\__,_|_| |_| |_|\___|  |
|                                 __/ |                       |
|                                |___/                        |
| This code is made by Wesselgame and it's licensed under the |
| MIT license ( https://opensource.org/licenses/MIT )         |
|                                                             |
| GitHub: https://github.com/PassTheWessel                    |
\*-----------------------------------------------------------*/
$(function() {
  $('.code-icons i').tooltip();

  toggle_things = function(first, second) {
    $('.' + first).slideUp('fast', function() {
      $('.' + second).slideDown('fast');
    });
  };
});